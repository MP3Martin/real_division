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

    def firstPosThatFits(x: int, y: int):
        second_num = 0
        for i in range(1, len(str(y)) + 1):
            second_num = int(str(y)[:i])
            if x <= second_num:
                break 
        return second_num


    #Calc
    leftNums = []
    leftNums.append(one)

    firstLeftNum = firstPosThatFits(two, leftNums[-1])
    one_unselected = list(str(one)[len(str(firstLeftNum)):])
    one_unselected = [eval(i) for i in one_unselected]

    result = ""
    while True:
        leftNum = firstPosThatFits(two, leftNums[-1])
        result += str(leftNum // two)
        remains = str(leftNum % two)
        try:
            newLeftNum = remains + str(one_unselected[0])
            one_unselected.pop(0)
        except IndexError:
            newLeftNum = remains
        
        leftNums.append(int(newLeftNum))

        if str(result) == str(one // two) and str(leftNums[-1]) == str(one % two):
            break

    #Generate output
    leftNums.pop(0)
    leftNums = [str(i) for i in leftNums]

    tempLeftNums = leftNums
    tempLeftNums.pop()
    tempLeftNums = list(map(lambda x: x.replace('0', '00'), tempLeftNums))

    tempLeftNums.append(leftNums[-1])
    leftNums = tempLeftNums

    #TODO: Replace all inbetween strings in leftNums with replace("0", "00")

    return result + f"\n{leftNums}"

if __name__ == '__main__':
    print("This program is not meant to be used standalone")