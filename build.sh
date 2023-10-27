#!/bin/sh
IMAGE="mparchin/dnd-admin"
ADDRESS="dnd-admin"
if [ "$1" = "production" ]
  then
    BRANCH=$1
    VITE_ODATA_ADDRESS="https://backend.eldoriantales.com/odata"
  else
    BRANCH="development"
    VITE_ODATA_ADDRESS="http://localhost/odata"
fi
SERVER="91.107.242.150"
ssh $SERVER "cd $ADDRESS && \
git switch $BRANCH && \
git pull && \
docker buildx build -t $IMAGE:$BRANCH --push  --build-arg VITE_ODATA_ADDRESS=$VITE_ODATA_ADDRESS ."