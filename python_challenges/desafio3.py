from math import pow

def powers_of_two(n):
    lista = []
    count = 0
    while count <= n:
        lista.append(pow(2, count))
        count += 1

    return lista


print(powers_of_two(0))