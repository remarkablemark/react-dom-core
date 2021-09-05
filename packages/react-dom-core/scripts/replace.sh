#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
  grep -rl "require('react" lib | xargs sed -i '' "s/require('react/require('react-15/g"
else
  grep -rl "require('react" lib | xargs sed -i "s/require('react/require('react-15/g"
fi
