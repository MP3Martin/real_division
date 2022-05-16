import math
def calc(one, two):
    one = int(one)
    two = int(two)

    #Setup
    firstLine = f"{one}:{two} = "
    result = ""
    remainder = ""
    lines = []
    numbersUsed = 0

    #Functions
    def howManyTimesDoesItFit(one1: int, two1: int):
        temp_one = one1
        temp_two = two1
        one1 = temp_two
        two1 = temp_one
        return int(math.floor(one1 / two1))

    def getFirstXChars(string: str, x: int):
        return string[:x]

    #The calculation
    result = one // two
    remainder = one % two
    lines.append(f"test")

    # Put everything together
    out = str(firstLine) + str(result)
    if remainder != "" and str(remainder) != "0":
        out = str(out) + " " + "(" + str(remainder) + ")"

    add_spaces = " "
    for line in lines:
        out = f"{out}\n{add_spaces}{line}"
        add_spaces = add_spaces + " "

    return out

if __name__ == '__main__':
    print("This program is not meant to be used standalone")