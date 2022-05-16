import math
def calc(one, two):
    one = int(one)
    two = int(two)

    #Setup
    firstLine = f"{one} : {two} = "
    result = ""
    lines = []
    numbersUsed = 0

    #Functions
    def howManyTimesDoesItFit(one1: int, two1: int):
        temp_one = one1
        temp_two = two1
        one1 = temp_two
        two1 = temp_one
        return math.floor(one1 / two1)

    def getFirstXChars(string: str, x: int):
        return string[:x]

    #The calculation
    while numbersUsed < one:
        if 

    # Put everything together
    out = firstLine + result
    for line in lines:
        out = f"{out}\n{line}"

    return out

if __name__ == '__main__':
    print("This program is not meant to be used standalone")