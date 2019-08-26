#!/bin/python

import zlib
import getopt
import sys
import os
import struct

def usage():
    print """ztxt usage:
        python langpack_font.py -c 
    """
	
def packFiles(compress, packName, searchPath, paths):
	with open(searchPath + packName,'wb') as f:
		for k,path in enumerate(paths):
			with open(searchPath + path,'rb') as _f:
				data = _f.read()
				if(compress):
					data = zlib.compress(data)
				data = struct.pack('I', len(data)) + data
				f.write(data)

def main():
	argCount = len(sys.argv)
	if(argCount < 3):
		print("error: argCount < 2")
		return
	
	searchPath = sys.argv[1]
	packName = sys.argv[2]
	
	searchPathLen = len(searchPath)
	lastChar = searchPath[searchPathLen-1:searchPathLen]
	if(lastChar != "\\" and lastChar != "/"):
		searchPath += "/";
	searchPath = searchPath.replace("\\", "/")
		
	files = []
	idx = 3
	while(idx < argCount):
		files += [sys.argv[idx]]
		idx += 1

	print("read over and packFiles......")
	packFiles(True, packName, searchPath, files)
	print("packFiles over.")
	

if __name__ == '__main__':
    main()
