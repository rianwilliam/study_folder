

import math

def list_squared(m, n):
    res = []
    l = [ x**2 for x in range(m,n+1) if n % x == 0 ]

    return l
print(list_squared(1,246))
