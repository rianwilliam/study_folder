
def unique_in_order(sequence):
    result = []
    if type(sequence) != list:
        sequence = [l for l in sequence]
    for index,item in enumerate(sequence):
        try:
            if item != sequence[index + 1]:
                result.append(item)
        except:
            result.append(item)
    return result


print(unique_in_order([1,123,23,23,3]))

#! Melhor maneira de se fazer

def unique_in_order(iterable):
    res = []
    for item in iterable:
        if len(res) == 0 or item != res[-1]:
            res.append(item)
    return res
