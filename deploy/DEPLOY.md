# Deploy Auto DM na VPS (autodm.pt)

Repositório: `https://github.com/BrunoKorpuzCoelho/AutoDm.git`

## Pré-requisitos

1. **DNS** — registos `A` (e opcionalmente `AAAA`) para `autodm.pt` e `www.autodm.pt` → IP da VPS (`vmi2815001`).
2. **Porta 3001** livre (o projeto Cubixone em `/var/www/cubixone` costuma usar outra porta, ex. 3000).
3. Código no GitHub atualizado (`git push origin main`).

## Instalação rápida (na VPS, como root)

```bash
cd /var/www
git clone https://github.com/BrunoKorpuzCoelho/AutoDm.git autodm
cd autodm
bash deploy/install-vps.sh
```

Ou, se já clonaste:

```bash
cd /var/www/autodm
git pull origin main
bash deploy/install-vps.sh
```

## SSL (HTTPS)

Depois do DNS propagar:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d autodm.pt -d www.autodm.pt
```

## Comandos úteis

| Ação | Comando |
|------|---------|
| Ver estado | `systemctl status autodm` |
| Logs | `journalctl -u autodm -f` |
| Reiniciar app | `systemctl restart autodm` |
| Atualizar site | `cd /var/www/autodm && git pull && npm ci && npm run build && systemctl restart autodm` |

## Estrutura na VPS

```
/var/www/
  cubixone/   ← outro projeto
  autodm/     ← este projeto (Next.js na porta 3001)
```

Nginx faz proxy de `autodm.pt` → `http://127.0.0.1:3001`.

## Problemas comuns

- **502 Bad Gateway** — `systemctl status autodm`; confirma que o build terminou sem erros.
- **500 em CSS/JS com nomes `turbopack-*`** — estás em `next dev`, não em produção. Corre:
  ```bash
  cd /var/www/autodm && bash deploy/fix-production.sh
  ```
- **Porta em uso** — edita `PORT` em `deploy/autodm.service` e `proxy_pass` em `deploy/nginx-autodm.conf`.
- **Permissões** — `chown -R www-data:www-data /var/www/autodm`
