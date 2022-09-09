#!/bin/bash

cd ../assets

rm -rf gallery/*
rm -rf gallery_min/*

cp -r gallery_full-definition/* gallery/
cp -r gallery_full-definition/* gallery_min/

cd gallery
mogrify -quality "85%" -interlace Line -resize '1280x1280>' *

cd ../gallery_min
mogrify -quality "66%" -interlace Line -thumbnail '288x288>' *