
#! Converta o número em binário e conte quantos números um tem nele

def count_bits(n):  
    return bin(n).count('1')

print(count_bits(1234))