def calc(one, two):
    one = int(one)
    two = int(two)

    firstLine = f"${one} : ${two}"
    lines = []


    # Put everything together
    out = firstLine
    for line in lines:
        out = f"{out}\n{line}"

    return out

if __name__ == '__main__':
    print("This program is not meant to be used standalone")