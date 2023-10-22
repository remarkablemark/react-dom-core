#!/usr/bin/env bash

REACT_DIRECTORY="$(git rev-parse --show-toplevel)/node_modules/react"

cp -r $REACT_DIRECTORY/dist .
cp -r $REACT_DIRECTORY/lib .
cp -r $REACT_DIRECTORY/react.js .
