
#! Verifique quais carinhas estão construídas da forma correta
def count_smileys(arr):
    cnt = 0
    char = [[':',';'],['~','-'],['D',')']]
    for item in arr:
        if item[0] in char[0]:
            if len(item) > 2 and item[1] in char[1] and item[2] in char[2]:
                cnt += 1
            elif item[1] in char[2]:
                cnt += 1
    return cnt

print(count_smileys([':)',':(',':D',':O',':;']))
