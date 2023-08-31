
#! Abrevie o nome recebido

def abbrev_name(name):
    return f"{name.split()[0][0].upper()}.{name.split()[1][0].upper()}"


print(abbrev_name("Rian william"))
