#!/bin/bash

cd ../assets

rm -rf gallery/*
rm -rf gallery_min/*

cp -r gallery_full-definition/* gallery/
cp -r gallery_full-definition/* gallery_min/

cd gallery
mogrify -quality "80%" -interlace Line -resize '900x900^' *

cd ../gallery_min
mogrify -quality "50%" -interlace Line -thumbnail '288x288^' *