#!/bin/bash

__root=`pwd`

excludes='excludes.txt'
for item in `cat $excludes`;do 
	item=`echo ${item%\r}`
	if [ "$item" != "common" ];then
		cd "$__root/$item"
		sh pack.sh 1
	fi
done
read -p "finish" var