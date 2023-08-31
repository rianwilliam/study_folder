
def score(dice =[]):
    points = 0
    n = [ x for x in dice if dice.count(x) >= 3 ]
    if n:
        if n.count(1):
            points += 1000
            for _ in range(3):
                dice.remove(1)
        else:
            points += n[0]* 100
            dice = [ x for x in dice if x not in n]

    if 1 in dice:
        points += 100*dice.count(1)

    if 5 in dice:
        points += 50*dice.count(5)

    return points

print(score([1,1,1,4,1]))
