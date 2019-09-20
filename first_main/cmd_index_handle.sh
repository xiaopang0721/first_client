#!/bin/bash

__root=`pwd`

game_list=(
"game"
"gamecomponent"
"gamedating"
"gametongyong"
"gamebaijiale"
"gamebairendezhou"
"gamebenchibaoma"
"gameblackjack"
"gamebrniuniu"
"gamebuyu"
"gamecaishendao"
"gamerddz"
"gamedezhou"
"gameebgang"
"gamehonghei"
"gamelonghu"
"gamemajiang"
"gameniuniu"
"gamerniuniu"
"gamepaijiu"
"gamerpaodekuai"
"gamesangong"
"gamesaolei"
"gamershisanshui"
"gameshuiguoji"
"gametbniuniu"
"gametoubao"
"gamezjh"
"gamezoo"
"gameelslp"
)

src="$__root/src"
bin="$__root/bin"
indx="$bin/index.html"
index_libs="$bin/index_libs"
temp="$__root/temp.txt"
mytemp="$__root/mytemp.txt"
#获取关键行号
startRow=`cat $indx | grep -En 'startTagAAA' | awk -F: '{print $1}'`
endRow=`cat $indx | grep -En 'endTagAAA' | awk -F: '{print $1}'`
startRow=$[startRow+1]
endRow=$[endRow-1]
echo $startRow
echo $endRow

echo 'one'

rm -rf $temp

rm -rf $mytemp

cd $src
for d in ${game_list[@]}; do
	if [ -d "$d" ];then
		echo "ddd: $d"
		txt=${index_libs}/${d}.txt
		if [ ! -f "$txt" ];then
			echo "检查异常 没有 $d 的模版文件"
			continue
		fi
		echo "txt: $txt"
		if [ ! -f ];then
			touch $temp
		fi
		echo `cat $txt`>>$temp
		if [ "$d" != "game" ];then
			if [ ! -f ];then
				touch $mytemp
			fi
			echo '<script-src="js/'$d'/MyInport.js"></script>\n'>>$mytemp
		fi
	fi
done

if [ -f "$temp" ];then
	echo 'two'
	
	sed -i 's/<script\ src/<script-src/g' $temp
	sed -i 's/script>\ <script-src/script>-<script-src/g' $temp
	sed -i ":a;N;s/\n//g;ta" $temp

	echo 'three'

	sed -i ${startRow},${endRow}c`cat $temp` $indx
	sed -i 's/script>-<script-src/script>\n<script-src/g' $indx
	sed -i 's/<script-src/\t<script\ src/g' $indx

	rm -rf $temp
fi
echo 'four'

startCustomRow=`cat $indx | grep -En 'startCustom' | awk -F: '{print $1}'`
endCustomRow=`cat $indx | grep -En 'endCustom' | awk -F: '{print $1}'`
startCustomRow=$[startCustomRow+1]
endCustomRow=$[endCustomRow-1]
echo $startCustomRow
echo $endCustomRow

if [ -f "$mytemp" ];then

	sed -i 's/<script\ src/<script-src/g' $mytemp
	sed -i 's/script>\ <script-src/script>-<script-src/g' $mytemp
	sed -i ":a;N;s/\n//g;ta" $mytemp

	echo 'five'

	sed -i ${startCustomRow},${endCustomRow}c`cat $mytemp` $indx
	sed -i 's/script>-<script-src/script>\n<script-src/g' $indx
	sed -i 's/<script-src/\t<script\ src/g' $indx
	rm -rf $mytemp
else
	sed -i ${startCustomRow},${endCustomRow}c'		<!--导入类添加到这里-->' $indx
fi



if [ -z $1 ] ;then
	read -p "脚本执行完成,输入任意信息结束..." var
fi
exit 0



