import math
def calc(one, two):
    one = int(one)
    two = int(two)

    #Setup
    firstLine = f"{one} : {two} = "
    lines = []

    #Functions
    def howManyTimesDoesItFit(one1, two1):
        temp_one = one1
        temp_two = two1
        one1 = temp_two
        two1 = temp_one
        return math.floor(one1 / two1)

    print(howManyTimesDoesItFit(3,25))

    # Put everything together
    out = firstLine
    for line in lines:
        out = f"{out}\n{line}"

    return out

if __name__ == '__main__':
    print("This program is not meant to be used standalone")