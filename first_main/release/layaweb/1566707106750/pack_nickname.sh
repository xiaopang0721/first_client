nickname_txt="nickname.txt"
nickname_bin="common/data/temp/nickname.bin"
__root=`pwd`
python "pack.py" "$__root" $nickname_bin $nickname_txt
if [ $? != 0 ]; then
	echo "脚本执行异常"
	exit 6
fi

echo "nickname.bin成功"
exit 0