import tkinter as tk
from tkinter import ttk
import time
global can_calculate
global empty_content
can_calculate = True
def focusText(event):
   w.config(state='normal')
   w.focus()
   w.config(state='disabled')

master = tk.Tk()
master.title("Realistic division generator  -  HexagonCore")
width = master.winfo_screenwidth() #get your Windows width size 
height = master.winfo_screenheight() #get your Windows height size 
master.geometry("%dx%d" % (width / 2.8, height / 1.3))
master.resizable(False,False)

def is_num(text):
    try:
        num = int(text)
        return True
    except:
        return False


#INPUT
def delete(event):
    chars = len(event.widget.get("1.0", "end-1c"))
    string = str(event.widget.get("1.0","end"))
    string_before = string
    event.widget.delete(1.0,"end")
    how_many = chars - 19
    string = string[: -how_many]
    #print("\n\nBefore: " + string_before + "\nAfter: " + str(string))
    event.widget.insert(1.0, string)

def changeError(string):
    error_msg.config(state=tk.NORMAL)
    #error_msg.update()
    error_msg.pack(side= tk.LEFT)
    error_msg.update()
    error_msg.delete(1.0,"end")
    error_msg.insert(1.0, string)
    chars = len(error_msg.get("1.0", "end-1c"))
    error_msg.configure(width = chars)
    #error_msg.pack_forget()
    error_msg.config(state="disabled")
    print(string)

    # -- TESTING -- #
    print(inp1.get("1.0", "end-1c"))
    inp1.selection_get()
    inp2.selection_get()

def isZero(string1):
    string1 = string1.replace("\n","")
    #THIS IS THE FASTEST WAY :D
    if string1 == string1[0]*len(string1):
        #ALL CHARACTERS ARE SAME
        if "0" in string1:
            return True
            #ALL CHARACTERS ARE 0
        else:
            #ALL CHARACTERS ARE SAME, BUT NOT 0
            return False
    else:
        #ALL CHARACTERS AREN'T SAME
        return False

def onModificationWidthChange(event):
    chars = len(event.widget.get("1.0", "end-1c"))
    content = str(event.widget.get("1.0","end"))

    if is_num(content) and " " not in str(content):
        #IS NUMBERS ONLY
        if isZero(str(content)):
            #IS ZERO...
            changeError("[ERROR]: Just don't even try to use zero...")
            can_calculate = False
        else:
            #ISN'T ZERO
            can_calculate = True
            error_msg.pack_forget()
    else:
        #ISN'T NUMBER
        if content == "\n" or content == "":
            #IS JUST EMPTY
            can_calculate = True
            error_msg.pack_forget()
        else:
            #IS NOT NUMBER
            can_calculate = False
            changeError("[ERROR]: Please enter numbers only")
            #event.widget.delete(1.0,"end")
            #only_num = str ( ''.join(filter(str.isdigit, content) ) )
            #print(only_num)
            #event.widget.insert(1.0, only_num[: -1])

    if chars > 10 and chars < 21:
        event.widget.configure(width = chars)
        widget_name = event.widget
        widget_name = str(widget_name).replace(".!frame.!","")
        if chars < 21 and chars > 10:
            print("[INFO]: Set widht of " + str(widget_name) + " to " + str(chars))
        inp1.pack()
    else:
        event.widget.configure(width = 10)
        inp1.pack()

    if chars > 20:
        #print("is now max lenght ("+ str(chars) + ")")
        delete(event)
        inp1.pack()

class CustomText(tk.Text):
    def __init__(self, *args, **kwargs):
        """A text widget that report on internal widget commands"""
        tk.Text.__init__(self, *args, **kwargs)

        # create a proxy for the underlying widget
        self._orig = self._w + "_orig"
        self.tk.call("rename", self._w, self._orig)
        self.tk.createcommand(self._w, self._proxy)

    def _proxy(self, command, *args):
        cmd = (self._orig, command) + args
        try:
            result = self.tk.call(cmd)
        except Exception:
            return None


        if command in ("insert", "delete", "replace"):
            self.event_generate("<<TextModified>>")

        return result

inp_frame = tk.Frame(master)
inp_frame.pack(fill=tk.BOTH,side = tk.TOP,padx=20, pady=(20,0))

inp1=CustomText(inp_frame, width=10, height=1)
inp1.insert(tk.END, "")
inp1.pack(side = tk.LEFT)
inp1.bind("<<TextModified>>", onModificationWidthChange)
inp1.focus_set()

divide_symbol = tk.Text(inp_frame,height=1,width=1)
divide_symbol.insert(0.0,":")
divide_symbol.configure(state="disabled")
divide_symbol.pack(side = tk.LEFT)

inp2=CustomText(inp_frame, width=10, height=1)
inp2.insert(tk.END, "")
inp2.pack(side = tk.LEFT)
inp2.bind("<<TextModified>>", onModificationWidthChange)

equals_symbol = tk.Text(inp_frame,height=1,width=1)
equals_symbol.insert(0.0,"=")
equals_symbol.configure(state="disabled")
equals_symbol.pack(side = tk.LEFT)

error_frame = tk.Frame(master)
error_frame.pack(fill=tk.BOTH,side = tk.TOP,padx=20, pady=(5,20))

error_msg = tk.Text(error_frame,borderwidth=0,height=1,width=32)
error_msg.insert(0.0,"Error: Please enter numbers only")
error_msg.config(fg='#cd1313')
error_msg.bindtags((str(error_msg), str(master), "all"))
error_msg.configure(state="disabled")
error_msg.pack(side= tk.LEFT)


#OUTPUT
h_scrl = tk.Scrollbar(master, orient = 'horizontal')
h_scrl.pack(side = tk.BOTTOM, fill = tk.X)
v_scrl = tk.Scrollbar(master)
v_scrl.pack(side = tk.RIGHT, fill = tk.Y)

out_frame = tk.Frame(master)
out_frame.pack(fill=tk.BOTH,side = tk.TOP,padx=20, pady=(1,1))

w = tk.Text(out_frame, borderwidth=1,wrap=tk.NONE,xscrollcommand = h_scrl.set,yscrollcommand = v_scrl.set)

h_scrl.config(command=w.xview)
v_scrl.config(command=w.yview)

w.insert(1.0, "Hello, world!       dsd dsssssssssssss\nnsssssssssssssss\nsssdsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsfshz\nhzgfdsgffsdgfgdv\ndghfdghfdhs\ngffdghfdsssssss\nnsssssssssssssss\nsssdsfdsfshz\nhzgfdsgffsdgfgdv\ndghfdghfdhs\ngffdghfdsssssss\nnsssssssssssssss\nsssdsfdsfshz\nhzgfdsgffsdgfgdv\ndghfdghfdhs\ngffdghfdsssssss\nnsssssssssssssss\nsssdsfdsfshz\nhzgfdsgffsdgfgdv\ndghfdghfdhs\ngffdghfdsssssss\nnsssssssssssssss\nsssdsfdsfshz\nhzgfdsgffsdgfgdv\ndghfdghfdhs\ngffdghfdsssssss\nnsssssssssssssss\nsssdsfdsfshz\nhzgfdsgffsdgfgdv\ndghfdghfdhs\ngffdghfdsg\nhdsgfhsdgfhdsgfhsfdgh\nfdsghghfghfds\ndsds\nghdsfghsfshgf\n")
w.pack(side = tk.LEFT)
w.configure(state="disabled")
w.bind('<Button-1>', focusText)
        

#CTRL+A FUNCTION
def select_all(event):
    event.widget.tag_add(tk.SEL, "1.0", tk.END)
    event.widget.mark_set(tk.INSERT, "1.0")
    event.widget.see(tk.INSERT)

master.bind("<Control-Key-a>", select_all)
master.bind("<Control-Key-A>", select_all)

#SELECT NEXT (tab) FUNCTION
def focus_next_widget(event):
    event.widget.tk_focusNext().focus()
    return("break")

def focus_start(event):
    inp1.focus()
    return("break")


inp1.bind("<Tab>", focus_next_widget)
inp2.bind("<Tab>", focus_start)

error_msg.update()
error_msg.pack_forget()
master.mainloop()