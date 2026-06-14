#!/bin/sh
set -eu

SOURCE_DIR="/opt/app-source"
TARGET_DIR="/var/www/html"
LOCK_DIR="${TARGET_DIR}/.sync-lock"
STAMP_FILE="${TARGET_DIR}/.image-sync-id"
SOURCE_STAMP="$(cat "${SOURCE_DIR}/.image-sync-id")"

mkdir -p "${TARGET_DIR}"

CURRENT_STAMP=""
if [ -f "${STAMP_FILE}" ]; then
    CURRENT_STAMP="$(cat "${STAMP_FILE}" || true)"
fi

if [ "${CURRENT_STAMP}" != "${SOURCE_STAMP}" ]; then
    while ! mkdir "${LOCK_DIR}" 2>/dev/null; do
        sleep 1
    done

    cleanup() {
        rmdir "${LOCK_DIR}" 2>/dev/null || true
    }

    trap cleanup EXIT INT TERM

    CURRENT_STAMP=""
    if [ -f "${STAMP_FILE}" ]; then
        CURRENT_STAMP="$(cat "${STAMP_FILE}" || true)"
    fi

    if [ "${CURRENT_STAMP}" != "${SOURCE_STAMP}" ]; then
        rsync -a --delete \
            --exclude ".sync-lock" \
            --exclude ".image-sync-id" \
            "${SOURCE_DIR}/" "${TARGET_DIR}/"
        printf '%s\n' "${SOURCE_STAMP}" > "${STAMP_FILE}"
    fi

    trap - EXIT INT TERM
    cleanup
fi

chmod -R u=rwX,go=rX "${TARGET_DIR}"

mkdir -p \
    "${TARGET_DIR}/storage/framework/cache" \
    "${TARGET_DIR}/storage/framework/sessions" \
    "${TARGET_DIR}/storage/framework/views" \
    "${TARGET_DIR}/bootstrap/cache"
chown -R www-data:www-data \
    "${TARGET_DIR}/storage" \
    "${TARGET_DIR}/bootstrap/cache"
chmod -R ug+rwx \
    "${TARGET_DIR}/storage" \
    "${TARGET_DIR}/bootstrap/cache"

cd "${TARGET_DIR}"

exec "$@"
