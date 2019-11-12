#!/bin/bash
set -e

sed -i "s/__JX_NAMESPACE__/$JX_NAMESPACE/g" /usr/share/nginx/html/config.js

exec "$@"