""" dicionario = { 'AAAAA' :'A' ,  'AABBB' :'H' ,  'ABBBA' :'O' ,  'BABAB' :'V' ,
               'AAAAB' :'B' ,  'ABAAA' :'I' ,  'ABBBB' :'P' ,  'BABBA' :'W' ,
               'AAABA' :'C' ,  'ABAAB' :'J' ,  'BAAAA' :'Q' ,  'BABBB' :'X' ,
               'AAABB' :'D' ,  'ABABA' :'K' ,  'BAAAB' :'R' ,  'BBAAA' :'Y' ,
               'AABAA' :'E' ,  'ABABB' :'L' ,  'BAABA' :'S' ,  'BBAAB' :'Z' ,
               'AABAB' :'F' ,  'ABBAA' :'M' ,  'BAABB' :'T' ,
               'AABBA' :'G' ,  'ABBAB' :'N' ,  'BABAA' :'U' } """

guardar = []
def identificar(frase):
    codigos = []
    codigo = ''
    frase_separada = frase.replace('', ' ').split()
    for letra in frase_separada:
        if letra.islower():
            letra = '0'
            codigo += letra
        elif letra.isupper():
            letra = '1'
            codigo += letra
        if len(codigo) == 8:
            conversao = int(codigo, 2)
            codigos.append(chr(conversao))
            codigo = ''


    return ''.join(codigos)

print(identificar('''eSTEgANogRAfIA E O eSTudo E UsO
Das TeCniCas para OCUlTAr a
EXisteNcIA dE umA meNSAGEM deNtro
de oUtRa, umA fORMa De SeGUraNcA
poR obscurANtIsmo. o PRiMEIRo USO
reGisTRado dA pALAvrA DatA DO ANO
de 1499, no livro steganographia,
de johannes trithemius.'''))
