from re import A



#! Retire da lista A os elementos que estão na lista B

def array_diff(a, b):
    for i in b:
        if a.__contains__(i):
            if a.count(i) > 1:
                a.remove(i)
            a.remove(i)
    return a

print(array_diff([1,2,2],[2]))

#? Outra maneira de se fazer

def array_diff(a, b):
    return [x for x in a if x not in b]