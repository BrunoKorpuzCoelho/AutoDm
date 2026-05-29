#!/bin/bash
# Corrige 500 em assets — garante build de produção e serviço autodm
# Executar na VPS como root: bash deploy/fix-production.sh
set -euo pipefail

APP_DIR="/var/www/AutoDm"

# Se o script falhar a meio, não deixar o site parado (já há build)
on_error() {
  if [[ -d "${APP_DIR}/.next" ]]; then
    echo "==> Aviso: script falhou — a reiniciar autodm com o build existente..."
    systemctl start autodm 2>/dev/null || true
  fi
}
trap on_error ERR

echo "==> Git (safe.directory para root + pasta www-data)"
git config --global --add safe.directory "${APP_DIR}" 2>/dev/null || true

echo "==> Parar processos Next.js incorretos (dev na porta 3001)"
systemctl stop autodm 2>/dev/null || true
pkill -f "next dev" 2>/dev/null || true
fuser -k 3001/tcp 2>/dev/null || true
sleep 1

echo "==> Atualizar código"
cd "${APP_DIR}"
git pull origin main

echo "==> Build de produção"
npm ci
rm -rf .next
NODE_ENV=production npm run build

echo "==> Permissões"
chown -R www-data:www-data "${APP_DIR}"
chmod -R u+rwX,g+rX "${APP_DIR}/.next"

echo "==> Serviço systemd"
cp "${APP_DIR}/deploy/autodm.service" /etc/systemd/system/autodm.service
systemctl daemon-reload
systemctl enable autodm
systemctl restart autodm
sleep 2

trap - ERR

echo "==> Testes"
systemctl status autodm --no-pager || true
curl -sI "http://127.0.0.1:3001/" | head -3
echo ""
echo "Se a primeira linha for HTTP/1.1 200, o site está OK."
echo "Reinicia nginx se necessário: systemctl reload nginx"
