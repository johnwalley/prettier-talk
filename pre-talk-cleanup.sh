#!/bin/bash

echo "Copying files"
cp "./examples/long-line-pristine.js" "./examples/long-line-unformatted.js"
cp "./examples/sum-pristine.js" "./src/index.js"

echo "Uninstalling husky"
npm uninstall husky

echo "Remember to open web pages ready for talk!"
# open "https://github.com/nrwl/precise-commits"
# open "https://travis-ci.org/johnwalley/prettier-talk"