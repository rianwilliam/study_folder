

#! Calcule a diferença entre idades de pai e filho

twice_as_old = lambda dad_years_old, son_years_old: dad_years_old - (son_years_old*2) if dad_years_old > son_years_old*2 else (son_years_old*2) - dad_years_old

print(twice_as_old(68,41))

#!

def twice_as_old(dad_years_old, son_years_old):
    return abs(dad_years_old - 2*son_years_old)
