#!/bin/bash

__name='first_client'
versions='1.0'
#不需要打包得第三方库
exclude_dts=("LayaAir.d.ts" "core.d.ts" "web.d.ts" "first_client.d.ts")
__root=`pwd`

echo "清理${release}目录"
release="${__root}/release"
rm -rf "${release}"
cd ../
lib_release=`pwd`"/lib_release"
rm -rf "${lib_release}/${versions}"
rm -rf "${lib_release}/libs/"
cd "${__root}"


echo "开始编译"

layaair-cmd -V
if [ $? -ne '0' ]; then
	sh 'install_layaair-cmd.sh'
fi

uglifyjs -V
if [ $? -ne '0' ]; then
	npm install uglify-js -g
fi

layaair-cmd publish -o cc --noUi --noAtlas

if [ $? -ne '0' ]; then
	echo "编译有错误请检查..."
	exit 1
fi
echo "编译完成"

echo "输出:${lib_release}/${versions}/${__name}.min.js"
layaweb="${release}/layaweb"
cd $layaweb
childs=`ls`
bin_temp="${layaweb}/`echo ${childs}|awk -F ' ' '{print $1}'`"
mkdir -p "${lib_release}/${versions}"
outjs="${lib_release}/${versions}/${__name}.js"
outminjs="${lib_release}/${versions}/${__name}.min.js"
outdts="${lib_release}/${versions}/${__name}.d.ts"
mv "${bin_temp}/main.min.js" "${outjs}"

# 移除测试类
start=`sed -n '/var UnitTesting = (function () {/=' ${outjs}`
end=`sed -n '/new UnitTesting();/=' ${outjs}`
if [ "$start" != "" -a "$end" != "" ]; then
	sed -i "${start},${end}d" "${outjs}"
fi

# 写入版本号
sed -i "1i\// v${versions}" "${outjs}"

# # 写入第三方库(排除过滤的)
# for element in `ls "${__root}/libs/"`
# do
# 	need=1
# 	for v in ${exclude_dts[@]}
# 	do
# 		if [ $v == $element ] 
# 		then
# 			need=0
# 		fi
# 	done
# 	if [ $need == 1 ]
# 	then
# 		cp -rf "${__root}/libs/$element" "${lib_release}/libs/"
# 		js_path="${__root}/bin/libs/min/${element%.d.ts*}.min.js"
# 		if [ ! -f $js_path ]
# 		then
# 			js_path="${__root}/bin/libs/${element%.d.ts*}.min.js"
# 			if [ ! -f $js_path ]
# 			then
# 				js_path="${__root}/bin/libs/${element%.d.ts*}.js"
# 			fi
# 		fi
# 		if [ -f $js_path ]
# 		then
# 			echo "打入第三方库：$element"
# 			cat "${js_path}" >> "${outjs}"
# 		fi
# 	fi
# done

# 生成min.js
echo "uglifyjs 打包"
uglifyjs "${outjs}" -m -c -o "${outminjs}"
# 写入版本号
sed -i "1i\// v${versions}" "${outminjs}"

echo "打包d.ts文件"

# 拷贝第三方dts(排除过滤的)
function forEachDirMakeDTS(){
    for element in `ls $1`
    do  
        dir_or_file=$1"/"$element
        if [ -d $dir_or_file ]
        then 
            forEachDirMakeDTS $dir_or_file
        else
			if [[ $dir_or_file == *.d.ts ]] 
			then
				if [[ $dir_or_file == *UnitTesting.d.ts ]] 
				then
					start=`sed -n '/declare class UnitTesting {/=' ${dir_or_file}`
					sed -i "${start},100000000d" "$dir_or_file"
				fi
				cat "$dir_or_file" >> "${outdts}"
			fi
        fi  
    done
}
echo "生成d.ts文件"
forEachDirMakeDTS "${lib_release}/libs"

# 移除编译文件
rm -rf "${release}"

indx="$__root/bin/index.html"
target="$__root/index_libs/game.txt"

startRow=`cat $indx | grep -En 'startTag' | awk -F: '{print $1}'`
endRow=`cat $indx | grep -En 'endTag' | awk -F: '{print $1}'`
startRow=$[startRow+1]
endRow=$[endRow-1]
echo $startRow
echo $endRow
#获取需要分析的内容
`echo sed -n ${startRow},${endRow}p $indx` > ${target}

read -p "编译脚本执行完成,输入任意信息继续..." var