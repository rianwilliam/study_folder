

#! Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the
#! digits in num until you reach a single digit.

from functools import reduce
def persistence(n):
    cnt = 0
    while len(str(n)) > 1:
        cnt += 1
        n = reduce(lambda x,y: int(x)*int(y), [ x for x in str(n) ])
        print(n)
    return cnt 

print(persistence(39))
