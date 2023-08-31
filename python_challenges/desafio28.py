
import re
def domain_name(url):
    if not url: return ""
    return "".join([ x for x in re.search(".[^https://www.].[^.]*",url).group() if x != "." and x != "/"]).removeprefix("www")

print(domain_name("hmloqykk8fuq4byn7eplqbgz1.com/kata/514a024011ea4fb54200004b/train/python"))
print(domain_name("8gok0vd3y1jy1lk1cc"))
print(domain_name("https://hggoogle.com"))
print(domain_name("https://google.co.jp"))
print(domain_name("www.3wdn1qvnj.ru"))
print(domain_name("https://3wdn1qvnj.com"))


#! Melhor maneira de fazer

def domain_name(url):
    return url.split("//")[-1].split("www.")[-1].split(".")[0]
