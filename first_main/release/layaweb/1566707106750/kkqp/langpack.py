import zlib
import getopt
import sys
import os
import struct



def usage():
    print """ztxt usage:
        python langpack_font.py -c 
    """

def pathlist_create(searchPath, outFile):
	if os.path.isfile(outFile): 
		os.remove(outFile)
	f0=file(outFile,'w')
	rootPathLen = len(searchPath)+1;	
	pathlist_each(f0, searchPath, rootPathLen)
	f0.close()

def pathlist_each(f0, searchPath, rootPathLen):
	arr0 = []
	arr1 = []
	arr2 = []
	with open("exclude.txt") as f:
		for item in f:
			item = item.strip('\n')
			if not item or item == "":
				continue
			if(item.find(".") == -1):
				arr2.append(item)
			else :
				if(item[:1] == "."):
					arr0.append(item)
				else:
					arr1.append(item)
	
	for item in os.listdir(searchPath):
		path = searchPath + "/" +item;
		if(os.path.isdir(path)):
			pathlist_each(f0, path, rootPathLen) 
		else:
			path = path[rootPathLen:];
			name = os.path.splitext(path)[0]
			houzhui = os.path.splitext(path)[1]
			
			if handle(arr1,path) and handle(arr0,houzhui) and  handle(arr2,name):
				f0.writelines(path + '\n')
				print(path)

def handle(arr,name):
	for item in arr:
		if (name and name.find(item) != -1) :
			return False
	return True

				
def compress(version, searchPath, paths):
	compressed_arr = []
	for k, v in enumerate(paths):
		print k, v
		with open(v,'rb') as f:
			decompressed = f.read()
			compressed = None
			compressed = zlib.compress(decompressed)
			compressed = struct.pack('i', len(compressed)) + compressed
			compressed_arr.append(compressed)

	with open(searchPath + 'langpack_' + version + '.bin','wb') as f:
		for k, v in enumerate(compressed_arr):
			f.write(v)	
			
def main():
	searchPath = sys.argv[1]
	version = sys.argv[2]
	searchPathLen = len(searchPath)
	lastChar = searchPath[searchPathLen-1:searchPathLen]
	if(lastChar != "\\" and lastChar != "/"):
		searchPath += "\\";
	
	pathlist = 'path.txt'
	paths = [pathlist, 'oprate.txt', 'lang.txt']

	print("begin reading files list......")
	pathlist_create(searchPath, searchPath + pathlist)
	print("read over and go to compress......")
	compress(version, searchPath, paths)
	print("compress over.")
	

if __name__ == '__main__':
    main()
	
	
	
	
	
			
				
	
