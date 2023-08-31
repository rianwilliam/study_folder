def first_non_repeating_letter(string):
    string =  [ x for x in string if string.lower().count(x.lower()) == 1] if string else ""
    return string[0] if string else ""

print(first_non_repeating_letter("aaabb"))
