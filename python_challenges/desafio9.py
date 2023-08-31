
#! Caso os parentêses estejam na ordem correta retorne True caso contrário retorne False

def valid_parentheses(string):
    total = 0
    contagem = (string.count(')') + string.count('(')) / 2
    while string.find('(') > -1 and string.find(')') > -1:
        if string.find('(') > -1 and string.find(')') > -1 and string.find('(') < string.find(')'):
            string = string.replace(string[string.find('(')],'',1)
            string = string.replace(string[string.find(')')],'',1)
            total += 1
        else:
            return False
    if total == contagem:
        return True
    else:
        return False
                
print(valid_parentheses('hi(hi)'))

#? Método certo de se fazer

def valid_parentheses(string):
    cnt = 0
    for char in string:
        if char == '(': cnt += 1
        if char == ')': cnt -= 1
        if cnt < 0: return False
    return True if cnt == 0 else False