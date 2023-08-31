
def generate_hashtag(s):
    if not s or len(s) > 140:
        return False
    s = s.title()
    s = [x for x in s if x.strip()]
    s.insert(0,"#")
    return "".join(s)

print(generate_hashtag("Codewars"))
print(generate_hashtag(""))
