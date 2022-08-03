#!/usr/bin/env bash
set -e

rm -rf public
hugo
rsync \
	--recursive --perms --times --omit-dir-times \
	--compress --verbose --checksum --delete-delay --delay-updates \
	--exclude=.DS_Store \
	public/ xmas2014.3t0.de:/var/www/hawhh.de/
