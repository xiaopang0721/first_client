#!/bin/bash

__root=`pwd`

python "langpack.py" "${__root}" "1000"
echo $__root
#path=`echo ${__root%/*}`
path=`echo ${__root##*/}`
# echo $path
cd ../
excludes='excludes.txt'
for item in `cat $excludes` ;do
	item=`echo ${item%\r}`
	if [ "$path" == "$item" ];then
		inside=true;
		break;
	fi
done

if [ -z "$inside" ];then
	echo "$path" >> $excludes
	echo "add $path "
fi

if [ -z "$1" ];then
	read -p "编译脚本执行完成,输入任意信息继续..." var
fi
