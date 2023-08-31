
#! Coloque as palavras em ordem de acordo com o número que elas contém

def order(sentence):
    sentence = sentence.split(' ')
    cnt = 1
    word = []
    for i in range(len(sentence)):
        for e,i in enumerate(sentence):
            if i.find(f'{cnt}') > -1:
                word.append(sentence[e])
                cnt += 1
    return ' '.join(word)
print(order('is2 Thi1s T4est 3a'))