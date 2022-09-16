import math

def calc(one, two):

    one = str(one)
    two = str(two)

    def floatToIntForDivision(f1: str, f2: str):
        #stringToStringFLoat
        def stsf(string):
            string = str(string)
            if "." in string:
                return "" + string
            else:
                return string + ".0"

        def moveDotRight(arg_string):
            string = stsf(arg_string)
            if string.endswith(".0"):
                string = string[:-2]
                string = string + "0.0"
                return string
            pos = string.find(".")
            pos += 1
            string = string.replace(".", "")
            string = string[:pos] + "." + string[pos:]
            if string.endswith("."):
                string += "0"
            string = string.lstrip("0")
            if string.startswith("."):
                string = "0" + string
            return string

        f1_ = stsf(f1)
        f2_ = stsf(f2)
        # print([f1_, f2_])
        if f1_.endswith(".0") == False or f2_.endswith(".0") == False:
            # print("is not full number")
            while True:
                if str(f1_).endswith(".0") and str(f2_).endswith(".0"):
                    break
                else:
                    f1_ = moveDotRight(f1_)
                    f2_ = moveDotRight(f2_)
        
        return [f1_[:-2], f2_[:-2]]

    temp = floatToIntForDivision(one, two)

    one = int(temp[0])
    two = int(temp[1])

    temp = None

    # print([one, two])

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
        
        leftNums.append(str(newLeftNum))

        if str(result) == str(one // two) and str(leftNums[-1]) == str(one % two):
            break

    #Generate output
    remainder = int(leftNums[-1])
    leftNums.pop(0)
    leftNums = [str(i) for i in leftNums]

    tempLeftNums = leftNums
    my_i_251541 = 0
    for item in tempLeftNums:
        if item == "0":
            tempLeftNums[my_i_251541] = "00"
        my_i_251541 += 1
    
    tempLeftNums.pop()
    tempLeftNums.append(str(one % two))
    leftNums = tempLeftNums

    firstLine = f"{one} : {two} = {result}"
    if remainder != 0:
        firstLine += f" ({remainder})"

    spaceOffset = len(str(firstLeftNum)) - 1

    remainders = ""
    for i in range(len(leftNums)):
        string = f"{i*' '}{spaceOffset*' '}{leftNums[i]}\n"
        if len(str(leftNums[i])) >= 3:
            string = string[(len(str(leftNums[i])) - 2):]
        
        remainders += string

    return f"{firstLine}\n{remainders}"

if __name__ == '__main__':
    print("This program is not meant to be used standalone")