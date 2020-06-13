# to get api results

import hashlib
apikey=""
public="3f72a14899d9c5ab18818ace55fb0ffd"
private="8a2732c06541bbb4d09c26038a642f2da0079e5d"
string="1"+private+public
print(hashlib.md5(string.encode('utf-8')).hexdigest())