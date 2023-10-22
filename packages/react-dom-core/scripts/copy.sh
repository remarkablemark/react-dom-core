#!/usr/bin/env bash

REACT_DIRECTORY="$(git rev-parse --show-toplevel)/node_modules/react-dom"

cp -r $REACT_DIRECTORY/dist .
cp -r $REACT_DIRECTORY/lib .
cp -r $REACT_DIRECTORY/index.js .
cp -r $REACT_DIRECTORY/server.js .
cp -r $REACT_DIRECTORY/test-utils.js .
