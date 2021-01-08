#!/usr/bin/env bash

echo "Generating documentation..."
doctum update doctum.config.php

git checkout develop

echo "Repositioning builds..."
mv ./dist/build/* ./docs
