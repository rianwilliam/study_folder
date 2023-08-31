
#! Remova os elementos passados como parâmetros da string

def strip_comments(strng, markers):
    strng = strng.split("\n")
    res = []
    for index,word in enumerate(strng):
        if word in markers:
            res += strng[0:strng.index(word)]
        else:
            res += strng[index]

    return res

print(strip_comments('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
