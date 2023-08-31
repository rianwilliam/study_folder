def sum_dig_pow(a, b):

    for number in range(a,b):
        numbers = [ int(x) for x in str(number) ]
        print(numbers)

    return []

print(sum_dig_pow(50,100))
