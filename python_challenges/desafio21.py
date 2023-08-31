
#! Conte quantos caracteres fornecidos no segundo parâmetro existem na multiplicação do primeiro parâmetro

def nb_dig(n, d):
	arr = [ n1*n1 for n1 in range(n+1) ]
	return len([ str(n1) for n1 in arr for n2 in str(n1) if int(n2) == d])

print(nb_dig(10,1))


#!

nb_dig = lambda n,d: sum(str(k**2).count(str(d)) for k in range(n+1))
