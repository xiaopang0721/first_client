#!/bin/bash

__root=`pwd`

game='game.txt'
cd ../
home=`pwd`
list=$home/core_release/part/$game
cd ${__root}/js/game/part
rm -rf $__root/part/js/*.js
for item in `cat $list`;do 
	item=`echo ${item%\r}`
	item_name=${item#*_}
	echo $item_name
	cd $item_name
	uglifyjs *.js -c -m -o ${__root}/part/js/${item_name}_min.js
	python "${__root}/pack.py" "$__root" part/bin/${item_name}_min.bin part/js/${item_name}_min.js
	if [ $? != 0 ]; then
		echo "脚本执行异常"
		exit 6
	fi
	cd ../
done
#rm -rf $__root/part/*.js
read -p "============finish============" var
