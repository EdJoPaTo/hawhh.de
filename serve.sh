#!/usr/bin/env bash
# hugo server -p 4200 --bind 0.0.0.0 --buildDrafts --buildFuture $@
hugo server -p 4200 --buildDrafts --buildFuture $@
