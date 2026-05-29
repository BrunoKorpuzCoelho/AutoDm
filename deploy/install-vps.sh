#!/bin/bash
# Instalação Auto DM na VPS (Ubuntu/Debian)
# Executar como root: bash install-vps.sh
set -euo pipefail

REPO="https://github.com/BrunoKorpuzCoelho/AutoDm.git"
APP_DIR="/var/www/autodm"
PORT=3001
SERVICE="autodm"

echo "==> Dependências (Node.js 20+, git, nginx)"
if ! command -v node &>/dev/null || [[ "$(node -v | cut -d. -f1 | tr -d v)" -lt 20 ]]; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
apt-get update
apt-get install -y git nginx

echo "==> Clone / atualizar projeto em ${APP_DIR}"
if [[ -d "${APP_DIR}/.git" ]]; then
  cd "${APP_DIR}"
  git pull origin main
else
  git clone "${REPO}" "${APP_DIR}"
  cd "${APP_DIR}"
fi

echo "==> Build"
npm ci
npm run build

echo "==> Permissões"
chown -R www-data:www-data "${APP_DIR}"

echo "==> Systemd (${SERVICE})"
cp "${APP_DIR}/deploy/autodm.service" "/etc/systemd/system/${SERVICE}.service"
systemctl daemon-reload
systemctl enable "${SERVICE}"
systemctl restart "${SERVICE}"

echo "==> Nginx"
cp "${APP_DIR}/deploy/nginx-autodm.conf" /etc/nginx/sites-available/autodm
ln -sf /etc/nginx/sites-available/autodm /etc/nginx/sites-enabled/autodm
nginx -t
systemctl reload nginx

echo ""
echo "OK — App em http://127.0.0.1:${PORT}"
echo "Próximo passo (DNS já a apontar para esta VPS):"
echo "  certbot --nginx -d autodm.pt -d www.autodm.pt"
echo ""
echo "Estado: systemctl status ${SERVICE}"
