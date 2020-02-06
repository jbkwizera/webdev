

def flatten(a, res):
    if not isinstance(a, list):
        res.append(a)
    else:
        for item in a:
            flatten(item, res)



if __name__ == '__main__':
    a = [[0, 1], 2, [3, [5, [6, 7], [9, 11, 11, [12, 45]], [17, 23]], 56], 67]
    r = []
    flatten(a, r)
    print(r)
