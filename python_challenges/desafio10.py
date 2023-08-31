
def duplicate_count(text):
    text = text.lower()
    cnt = 0
    for i in text:
        if text.count(i) > 1:
            cnt += 1
            text = text.replace(i,'')
    return cnt


print(duplicate_count('indivisibility'))

#? Outra maneira de se fazer

def duplicate_count(text):
    count = 0
    for c in set(text.lower()):
        if text.count(c) > 1:
            count += 1
    return count

print(duplicate_count('inDIvIsibility'))