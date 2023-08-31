
#! Conte quantas ovelhas tem no array

def count_sheeps(sheep):
    count = 0
    for index in sheep:
        if index == True:
            count += 1
    
    return count



print(count_sheeps([True,  True,  True,  False,
          True,  True,  True,  True ,
          True,  False, True,  False,
          True,  False, False, True ,
          True,  True,  True,  True ,
          False, False, True,  True ]))


#? Maneira correta de se fazer

def count_sheeps(arrayOfSheeps):
  return arrayOfSheeps.count(True)