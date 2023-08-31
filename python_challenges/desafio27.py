
#! Retorne o valor em sua forma de soma

def expanded_form(num):
    num = [x for x in str(num)]
    num.reverse()
    res =  [ value + ("0" * index) for index,value in enumerate(num) if value[0] != "0"]
    res.reverse()
    return " + ".join(res)



print(expanded_form(700304))
