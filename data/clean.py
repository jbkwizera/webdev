import sys
import re

count =0
words = []
for line in sys.stdin:
    line = line.strip()
    if '<td><a href="/wiki/' in line:
        count += 1
        line = line[len('<td><a href="/wiki/'):]
        line = line[:line.index('"')]
        if line.isalpha():
            print(line.lower())
