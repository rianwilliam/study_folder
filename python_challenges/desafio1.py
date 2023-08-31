
#! Retorne o valor das horas em milisegundos

def past(h,m,s):
    resultado = 0
    if 0 <= h <= 23:
        for index in range(1,h):
            resultado += 3600000
    if 0 <= m <= 59:
        for index in range(1,m):
            resultado += 60000
    if 0 <= s <= 59:
        for index in range(1,s):
            resultado += 1000
    return print(resultado)

past(17, 57, 20)

#? Maneira correta de ser fazer

def past(h, m, s):
    return (3600*h + 60*m + s) * 1000