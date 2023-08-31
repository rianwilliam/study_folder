
#! Uma palavra será dada como parâmetro, se uma letra da palavra aparecer uma vez retorne '(', caso ela se repita retorne ')'

def duplicate_encode(word):
    word = word.lower()
    final_word = []
    for i in word:
        if word.count(i) > 1:
            final_word.append(')')
        else:
            final_word.append('(')
    return(''.join(final_word))
    

print(duplicate_encode('Success'))

#? Outra maneira de se fazer

def duplicate_encode(word):
    return "".join(["(" if word.lower().count(c) == 1 else ")" for c in word.lower()])