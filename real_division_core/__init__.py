import math

def calc(one, two):
    one = int(one)
    two = int(two)

    #Setup
    firstLine = f"{one}:{two} = "
    result = ""
    remainder = ""
    lines = []
    global additionalSpaces

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
    
    def firstRemainder(i):
        global firstRemainderNumsUsed
        global additionalSpaces
        chars = getFirstXChars(str(one), i)
        if int(chars) >= two:
            additionalSpaces = ""
            for i in range (2, int(len(str(chars)))):
                additionalSpaces = additionalSpaces + " "
                print("amo")
            lines.append(str(int(chars) % two))
            firstRemainderNumsUsed = len(str(chars))
            return
        else:
            firstRemainder(i + 1)

    firstRemainder(1)

    # print(firstRemainderNumsUsed)

    nextNumbers = list(str(one)[firstRemainderNumsUsed:])

    # print(nextNumbers)


    # Put everything together
    out = str(firstLine) + str(result)
    if remainder != "" and str(remainder) != "0":
        out = str(out) + " " + "(" + str(remainder) + ")"

    # if str(len(str(additionalSpaces))) == "0" and str(len(str(one))) != "1":
    #     additionalSpaces = " "

    if str(len(str(one))) != "1":
        additionalSpaces = additionalSpaces + " "

    for line in lines:
        out = f"{out}\n{additionalSpaces}{line}"
        additionalSpaces = additionalSpaces + " "
    return out

if __name__ == '__main__':
    print("This program is not meant to be used standalone")