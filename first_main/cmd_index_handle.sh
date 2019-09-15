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
"gameddz"
"gamedezhou"
"gameebgang"
"gamehonghei"
"gamelonghu"
"gamemajiang"
"gameniuniu"
"gamepaijiu"
"gamepaodekuai"
"gamesangong"
"gamesaolei"
"gameshisanshui"
"gameshuiguoji"
"gametbniuniu"
"gametoubao"
"gamezjh"
"gamezoo"
"gameelslp"
)

gameXXX=()

src="$__root/src"
bin="$__root/bin"
indx="$bin/index.html"
index_libs="$bin/index_libs"
temp="$__root/temp.txt"
#获取关键行号
startRow=`cat $indx | grep -En 'startTagAAA|endTagAAA' | awk -F: '{print $1}' | sed -n '1p'`
endRow=`cat $indx | grep -En 'startTagAAA|endTagAAA' | awk -F: '{print $1}' | sed -n '2p'`
startRow=$[startRow+1]
endRow=$[endRow-1]
echo $startRow
echo $endRow

echo 'one'

rm -rf $temp
touch $temp

cd $src
for d in ${game_list[@]}; do
	if [ -d "$d" ];then
		echo "ddd: $d"
		txt=${index_libs}/${d}.txt
		if [ ! -f "$txt" ];then
			echo "检查异常 没有 $d 的模版文件"
			exit 6
		fi
		echo "txt: $txt"
		echo `cat $txt` >>  $temp
	fi
done

echo 'two'

sed -i 's/<script\ src/<script-src/g' $temp
sed -i 's/script>\ <script-src/script>-<script-src/g' $temp
sed -i ":a;N;s/\n//g;ta" $temp

echo 'three'

sed -i ${startRow},${endRow}c`cat $temp` $indx
sed -i 's/script>-<script-src/script>\n<script-src/g' $indx
sed -i 's/<script-src/\t<script\ src/g' $indx

rm -rf $temp
# rm -rf game.txt


