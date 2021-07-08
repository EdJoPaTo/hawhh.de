#!/usr/bin/env bash
set -e

rm -rf public
hugo
rsync -acv --compress --omit-dir-times --exclude=.DS_Store --delete-delay public/ xmas2014.3t0.de:/var/www/hawhh.de/
