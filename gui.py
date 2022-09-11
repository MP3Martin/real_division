import string
import tkinter as tk
from tkinter import ttk, messagebox
import tkinter.font as tkFont
from ttkthemes import ThemedTk
import real_division_core as rdc
import webbrowser
import re
global can_calculate
global empty_content
MAX_CHARS = 28
ALLOWED_CHARS = set(string.digits + ',.╣') #the last one is for temporary stuff
can_calculate = True
default_output_text = "Please type in what you want to divide into the boxes above.\n\n"
# --- #
debug_enabled = True
# --- #

def new(confirm: bool = True):
    if confirm == True:
        if inp1.get("1.0", "end-1c").replace("\n","") != "" or inp2.get("1.0", "end-1c").replace("\n","") != "":
            if messagebox.askokcancel("New file", "Do you want to reset all changes?\n\nAll changes will be lost"):
                new_sys()
        else:
            new_sys()
    else:
        new_sys()

def new_sys():
    inp1.delete(1.0,"end")
    inp2.delete(1.0,"end")
    w.config(state='normal')
    w.delete(1.0,"end")
    w.insert(1.0, default_output_text)
    w.config(state='disabled')
    inp1.focus_set()

# ---- Start of code by https://stackoverflow.com/users/1142167/joel-cornett ---- #
class HyperlinkMessageBox(tk.Toplevel):
    hyperlinkPattern = re.compile(r'<a href="(?P<address>.*?)">(?P<title>.*?)'
                                  '</a>')
    def __init__(self, master, title=None, message=None, **options):
        tk.Toplevel.__init__(self, master)
        self.geometry("240x100")
        self.title(title or master.title())
        self.s = ttk.Style()
        self.s.configure('TFrame', background='lightgrey')
        self.configure(background='lightgrey')
        self.text = tk.Text(self, wrap=tk.WORD, bg="lightgrey", bd=0, padx=5, pady=5, font=('20'),
            height=self.cget('height'))
        self.text.tag_configure("center", justify='center')
        self._formatHyperLink(message)
        self.text.tag_add("center", "1.0", "end")
        self.text.config(state=tk.DISABLED)
        self.text.pack(side=tk.TOP, fill=tk.X)
        self.low_frame = ttk.Frame(self)
        self.low_frame.pack(side=tk.BOTTOM, pady=(0, 10))
        self.button = ttk.Button(self.low_frame, text="Ok",
            command=lambda *a, **k: self.destroy()).pack()
 
    def _formatHyperLink(self, message):
        text = self.text
        start = 0
        for index, match in enumerate(self.hyperlinkPattern.finditer(message)):
            groups = match.groupdict()
            text.insert("end", message[start: match.start()])
            #insert hyperlink tag here
            text.insert("end", groups['title'])
            text.tag_add(str(index),
                "end-%dc" % (len(groups['title']) + 1),
                "end",)
            text.tag_config(str(index),
                foreground="blue",
                underline=1)
            text.tag_bind(str(index),
                "<Enter>",
                lambda *a, **k: text.config(cursor="hand2"))
            text.tag_bind(str(index),
                "<Leave>",
                lambda *a, **k: text.config(cursor="arrow"))
            text.tag_bind(str(index),
                "<Button-1>",
                self._callbackFactory(groups['address']))
            start = match.end()
        else:
            text.insert("end", message[start:])
 
    def _callbackFactory(self, url):
        return lambda *args, **kwargs: webbrowser.open(url)
# ---- End of code by https://stackoverflow.com/users/1142167/joel-cornett ---- #

def donothing():
    pass

def helpmenu_about():
    HyperlinkMessageBox(master, title="About...", message='Made by <a href="http://mp3martin.xyz">©MP3Martin</a>')

def helpmenu_github():
    webbrowser.open("https://github.com/MP3Martin/real_division")

def setWinSize():
    width = master.winfo_screenwidth()
    height = master.winfo_screenheight()
    master.geometry("%dx%d" % (width / 2.8, height / 1.3))

def everySecond():
    # setWinSize()
    master.after(1000, everySecond)

def iprint(string):
    if debug_enabled == True:
        print(string)

def focusText(event):
    w.config(state='normal')
    w.focus()
    w.config(state='disabled')

def clipboard(string = ""):
    master.clipboard_clear()
    if string != "":
        master.clipboard_append(string)
        master.update()

def on_closing():
    if inp1.get("1.0", "end-1c").replace("\n","") != "" or inp2.get("1.0", "end-1c").replace("\n","") != "":
        if messagebox.askokcancel("Quit", "Do you want to quit?\n\nAll changes will be lost"):
            master.destroy()
    else:
        master.destroy()

def copy_output():
    string = w.get("1.0", "end-1c")[:-1]
    if not default_output_text[:10] in string:
        clipboard(string)

def floatToIntForDivision(f1: string, f2: string):
    f1 = str(float(f1))
    f2 = str(float(f2))
    while True:
        if str(f1).endswith(".0") and str(f2).endswith(".0"):
            break
        f1 = str(float(f1) * 10)
        f2 = str(float(f2) * 10)
    
    return [str(int(float(f1))), str(int(float(f2)))]

def calculate():
    global default_output_text

    def addFirstZero(input):
        if input.startswith("."):
            return f"0{input}"
        else:
            return f"{input}"
    
    #Remove leading spaces
    out1 = addFirstZero(inp1.get("1.0", "end-1c").lstrip("0"))
    inp1.delete(1.0,"end")
    inp1.insert(1.0, out1)

    out2 = addFirstZero(inp2.get("1.0", "end-1c").lstrip("0"))
    inp2.delete(1.0,"end")
    inp2.insert(1.0, out2)

    if is_num_second(inp1.get("1.0", "end-1c")) == True and is_num_second(inp2.get("1.0", "end-1c")) == True and isZero(inp1.get("1.0", "end-1c")) == False and isZero(inp2.get("1.0", "end-1c")) == False and float(str(inp1.get("1.0","end"))) >= float(str(inp2.get("1.0","end"))):
        parsedNums = floatToIntForDivision(str(inp1.get("1.0", "end-1c")), str(inp2.get("1.0", "end-1c")))
        out = rdc.calc(parsedNums[0], parsedNums[1])
        w.config(state='normal')
        w.delete(1.0,"end")
        w.insert(1.0, out)
        w.config(state='disabled')
    elif inp1.get("1.0", "end-1c").replace("\n","") == "" and inp2.get("1.0", "end-1c").replace("\n","") == "":
        w.config(state='normal')
        w.delete(1.0,"end")
        w.insert(1.0, default_output_text)
        w.config(state='disabled')

# master = ThemedTk(theme="elegance")
# master = ThemedTk(theme="breeze")
# master = ThemedTk(theme="clearlooks")
master = ThemedTk(theme="plastik")
# master = ThemedTk(theme="winxpblue")
# master = ThemedTk(theme="yaru")
master.configure(background='grey')
master.title("Realistic division generator  -  MP3Martin")
setWinSize()
master.resizable(False,False)

default_font = tkFont.nametofont("TkDefaultFont")
default_font.configure(family="Verdana")
master.option_add("*Font", default_font)

def is_num(text):
    try:
        num = int(text)
        return True
    except:
        return False

def is_num_second(test_str):
    test_str = test_str.replace("\n", "").replace("\r", "")
    if test_str == "":
        return False
    return set(test_str) <= ALLOWED_CHARS


#INPUT
def delete(event):
    chars = len(event.widget.get("1.0", "end-1c"))
    string = str(event.widget.get("1.0","end"))
    string_before = string
    event.widget.delete(1.0,"end")
    how_many = chars - (MAX_CHARS - 1)
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
    iprint(string.replace("[ERROR]","[HANDLED ERROR]"))

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
    def setText(text, widget = event.widget, offset = 0):
        cur_pos = int(str(event.widget.index(tk.INSERT))[2:])
        widget.delete(1.0,"end")
        widget.insert(1.0, text.replace("\n", "").replace("\r", ""))
        widget.mark_set("insert", "%d.%d" % (1, cur_pos + (offset)))

    chars = len(event.widget.get("1.0", "end-1c"))
    content = str(event.widget.get("1.0","end"))

    content1 = str(inp1.get("1.0","end"))
    content2 = str(inp2.get("1.0","end"))

    contents = [content1, content2]

    errored = 0

    if "customtext" in str(event.widget):
        customtext_content = content.replace(",", ".")
        if customtext_content.count(".") > 1:
            temp_char = "╣"
            cur_pos = int(str(event.widget.index(tk.INSERT))[2:])
            modified_content = customtext_content[:cur_pos-1] + temp_char + customtext_content[cur_pos-1:]
            modified_content = modified_content.replace(".", "")
            setText(modified_content)
            modified_content = event.widget.get("1.0","end")
            # print(modified_content)
            event.widget.mark_set("insert", "%d.%d" % (1, (modified_content.find(temp_char) + 1)))
            setText(modified_content.replace(temp_char, "."))
        else:
            if "," in content:
                setText(content.replace(",", "."))


        # i = content.find('.')
        # modified_content = content[:i+1] + content[i+1:].replace('.', '')
        # if content != modified_content:
        #     setText(modified_content, offset = -1)


    for content0 in contents:
        if is_num_second(content0) and " " not in str(content0):
            #IS NUMBERS ONLY
            if isZero(str(content0)):
                #IS ZERO...
                changeError("[ERROR]: Just don't even try to use zero...")
                errored = errored + 1
                can_calculate = False
            else:
                #ISN'T ZERO
                can_calculate = True
                # error_msg.pack_forget()
        else:
            #ISN'T NUMBER
            if content0 == "\n" or content0 == "":
                #IS JUST EMPTY
                can_calculate = True
                # error_msg.pack_forget()
            else:
                #IS NOT NUMBER
                can_calculate = False
                changeError("[ERROR]: Please enter numbers only")
                errored = errored + 1
                #event.widget.delete(1.0,"end")
                #only_num = str ( ''.join(filter(str.isdigit, content) ) )
                #print(only_num)
                #event.widget.insert(1.0, only_num[: -1])
    
    if errored == 0:
        try:
            if float(content1) < float(content2):
                changeError("[ERROR]: First number should be bigger")
                errored = errored + 1
                can_calculate = False
            else:
                can_calculate = True
        except ValueError:
            can_calculate = True
    
    if errored == 0:
        error_msg.pack_forget()

    if chars > 10 and chars < (MAX_CHARS + 1):
        event.widget.configure(width = chars)
        widget_name = event.widget
        widget_name = str(widget_name).replace(".!frame.!","")
        if chars < (MAX_CHARS + 1) and chars > 10:
            iprint("[INFO]: Set widht of " + str(widget_name) + " to " + str(chars))
        inp1.pack()
    else:
        event.widget.configure(width = 10)
        inp1.pack()

    if chars > MAX_CHARS:
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

s = ttk.Style()
s.configure('TFrame', background='lightgrey')

master_wrapper = ttk.Frame(master)
master_wrapper.pack(fill=tk.BOTH,side = tk.TOP,expand=True)

inp_frame = ttk.Frame(master_wrapper)
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

equals_button = ttk.Button(inp_frame, width = 1, command=calculate)
equals_button.config(text = "=")
# equals_button.configure(state="disabled")
equals_button.pack(side = tk.LEFT)

error_frame = ttk.Frame(master_wrapper)
error_frame.pack(fill=tk.BOTH,side = tk.TOP,padx=20, pady=(5,20))

error_msg = tk.Text(error_frame,borderwidth=0,height=1,width=32)
error_msg.insert(0.0,"Error: Please enter numbers only")
error_msg.config(fg='#cd1313')
error_msg.bindtags((str(error_msg), str(master_wrapper), "all"))
error_msg.configure(state="disabled")
error_msg.pack(side= tk.LEFT)


#OUTPUT
h_scrl = ttk.Scrollbar(master_wrapper, orient = 'horizontal')
h_scrl.pack(side = tk.BOTTOM, fill = tk.X)
v_scrl = ttk.Scrollbar(master_wrapper)
v_scrl.pack(side = tk.RIGHT, fill = tk.Y)

out_frame = ttk.Frame(master_wrapper)
out_frame.pack(fill=tk.BOTH,side = tk.TOP,padx=20, pady=(1,1))

out_frame_frame = ttk.Frame(out_frame)
out_frame_frame.pack()

w = tk.Text(out_frame_frame, borderwidth=1,wrap=tk.NONE,xscrollcommand = h_scrl.set,yscrollcommand = v_scrl.set)

h_scrl.config(command=w.xview)
v_scrl.config(command=w.yview)

w.insert(1.0, default_output_text)
w.pack(side = tk.LEFT)
w.configure(state="disabled")
w.bind('<Button-1>', focusText)

copy_button = ttk.Button(out_frame, width = 7, command=copy_output)
copy_button.config(text = "COPY")
# equals_button.configure(state="disabled")
copy_button.pack(side = tk.LEFT, pady = (10, 0))

#MENU
menubar = tk.Menu(master_wrapper)
filemenu = tk.Menu(menubar, tearoff=0)
filemenu.add_command(label="New", command=new)
# filemenu.add_command(label="Open", command=donothing)
# filemenu.add_command(label="Save", command=donothing)
filemenu.add_separator()
filemenu.add_command(label="Exit", command=on_closing)
menubar.add_cascade(label="File", menu=filemenu)

helpmenu = tk.Menu(menubar, tearoff=0)
helpmenu.add_command(label="GitHub", command=helpmenu_github)
helpmenu.add_command(label="About...", command=helpmenu_about)
menubar.add_cascade(label="Help", menu=helpmenu)

master.config(menu=menubar)
        

#CTRL+A FUNCTION
def select_all(event):
    event.widget.tag_add(tk.SEL, "1.0", tk.END)
    event.widget.mark_set(tk.INSERT, "1.0")
    event.widget.see(tk.INSERT)

master.bind("<Control-Key-a>", select_all)
master.bind("<Control-Key-A>", select_all)

#CTRL+C FUNCTION
def copy_selected(event):
    try:
        selected_text = event.widget.get(tk.SEL_FIRST, tk.SEL_LAST)
    except:
        selected_text = "None"
    selected_text = str(selected_text)
    widget = str(event.widget).replace(".!frame.!","")
    if "customtext" in widget:
        selected_text = ''.join(filter(lambda i: i in ALLOWED_CHARS, selected_text))
    if selected_text[-1] == "\n":
        selected_text = selected_text[:-2] + selected_text[-2:].replace("\n", "").replace("\r", "")
    if selected_text == "None":
        clipboard()
    else:
        clipboard(selected_text)

master.bind("<Control-Key-c>", copy_selected)
master.bind("<Control-Key-C>", copy_selected)

#CTRL+X FUNCTION
def cut_selected(event):
    selected_text = master.clipboard_get()
    selected_text = str(selected_text)
    selected_text = selected_text.replace("\n", "")
    if selected_text == "None":
        clipboard()
    else:
        clipboard(selected_text)

master.bind("<Control-Key-x>", cut_selected)
master.bind("<Control-Key-X>", cut_selected)

#ESC HANDLER
def deselect_selected(event):
    event.widget.tag_remove(tk.SEL, "1.0", tk.END)

master.bind("<Escape>", deselect_selected)

#PASTE HANDLER
def custom_paste(event):
    try:
        event.widget.delete("sel.first", "sel.last")
    except:
        pass
    event.widget.insert("insert", event.widget.clipboard_get())
    return "break"
master.bind_class("Text", "<<Paste>>", custom_paste)

#ENTER HANDLER
def custom_enter(event):
    calculate()
    return "break"
master.bind_class("Text", "<Return>", custom_enter)

#SELECT NEXT (tab) FUNCTION
def focus_next_widget(event):
    event.widget.tk_focusNext().focus()
    return("break")

def focus_start(event):
    inp1.focus()
    return("break")


inp1.bind("<Tab>", focus_next_widget)
inp2.bind("<Tab>", focus_start)

master.protocol("WM_DELETE_WINDOW", on_closing)
error_msg.update()
error_msg.pack_forget()
everySecond()
master.mainloop()