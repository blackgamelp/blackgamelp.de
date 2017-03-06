#!/bin/bash
for fullfilename in ./build/*; do
	echo $fullfilename
	filename=$(basename "$fullfilename")
	gsutil cp $fullfilename gs://blackgamelp.de/
	gsutil acl ch -u AllUsers:R gs://blackgamelp.de/$filename
done

