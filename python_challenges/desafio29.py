import re
def pig_it(text):
    res = []
    for word in text.split():
        word = word[1::]+word[0]+"ay" if not re.findall("[^\w]",word) else word
        res.append(word)
    return " ".join(res)
    # return " ".join([ word[1::]+word[0]+"ay" for word in text if not re.findall("[^\w]",word)])

    print(pig_it('Pig l!@!/atin is cool !'))

#? Melhor maneira

def pig_it(text):
    return " ".join(x[1:] + x[0] + "ay" if x.isalnum() else x for x in text.split())
