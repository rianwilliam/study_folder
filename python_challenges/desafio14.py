
#! Pegue o IP e transforme ele em binário

def binary(n):
    result = []
    for i in set(n.split('.')):
        i = int(i)
        result.append(bin(i))
    return '.'.join(result)


print(binary('128.32.10.1'))
