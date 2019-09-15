#!/bin/bash

__root=`pwd`
src="$__root/src"
bin="$__root/bin"
indx="$bin/index.html"
index_libs="$bin/index_libs"
#获取关键行号
startRow=`cat $indx | grep -En 'startTag|endTag' | awk -F: '{print $1}' | sed -n '1p'`
endRow=`cat $indx | grep -En 'startTag|endTag' | awk -F: '{print $1}' | sed -n '2p'`
startRow=$[startRow+1]
endRow=$[endRow-1]
echo $startRow
echo $endRow

cd $src
rm -rf temp.txt
touch temp.txt
for d in `ls -d game*`; do
	txt=${index_libs}/${d}.txt
	if [ ! -f "$txt" ];then
		echo "检查异常 没有 $d 的模版文件"
		exit 6
	fi
	echo `cat ${index_libs}/$d` >>  temp.txt
done

sed -i 's/<script\ src/\t<script-src/g' temp.txt
sed -i ":a;N;s/\n//g;ta" temp.txt

sed -i ${startRow},${endRow}c`cat temp.txt` $indx
sed -i 's/script><script-src/script>\n<script-src/g' $indx
sed -i 's/<script-src/\t<script\ src/g' $indx

# rm -rf temp.txt
# rm -rf game.txt


