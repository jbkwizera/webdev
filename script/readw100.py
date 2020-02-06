import re
if __name__ == '__main__':
    with open('../data/nw100k.txt', 'r') as stdin:
        txt = re.split('\\s+', stdin.read().strip())
        words = [word for word in txt if len(word) >= 2 and word.isalpha()]
    for word in words:
        print(word.lower())
