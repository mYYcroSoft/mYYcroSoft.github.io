import os 


file = open("photo_01.txt", "w+")
file.write("Je toto pravada?")
lines = file.readline()
print(lines)