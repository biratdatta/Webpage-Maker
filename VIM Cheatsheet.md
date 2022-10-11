**VIM CHEAT SHEET****

**Global**
:help keyword – open help for keyword
:o file – open file
:saveas file – save file as
:close – close current window
Cursor Movements
h – move cursor left
j – move cursor down
k – move cursor up
l – move cursor right
H – move to top of screen
M – move to middle of screen
L – move to bottom of screen
w – jump forwards to the start of a word
W – jump forwards to the start of a word (words can contain punctuation)
e – jump forwards to the end of a word
E – jump forwards to the end of a word (words can contain punctuation)
b – jump backwards to the start of a word
B – jump backwards to the start of a word (words can contain punctuation)
0 – jump to the start of the line
^ – jump to the first non-blank character of the line
$ – jump to the end of the line
g_ – jump to the last non-blank character of the line
gg – go to the first line of the document
G – go to the last line of the document
5G – go to line 5
fx – jump to next occurrence of character x
tx – jump to before next occurrence of character x
} – jump to next paragraph (or function/block, when editing code)
{ – jump to previous paragraph (or function/block, when editing code)
zz – center cursor on screen
Ctrl + b – move back one full screen
Ctrl + f – move forward one full screen
Ctrl + d – move forward 1/2 a screen
Ctrl + u – move back 1/2 a screen

Tip: Prefix a cursor movement command with a number to repeat it. For example, 4j moves down 4 lines.
**Insert Mode**
i – insert before the cursor
I – insert at the beginning of the line
a – insert (append) after the cursor
A – insert (append) at the end of the line
o – append (open) a new line below the current line
O – append (open) a new line above the current line
ea – insert (append) at the end of the word
Esc – exit insert mode

**Editing**
r – replace a single character
J – join line below to the current line
cc – change (replace) entire line
cw – change (replace) to the end of the word
c$ – change (replace) to the end of the line
s – delete character and substitute text
S – delete line and substitute text (same as cc)
xp – transpose two letters (delete and paste)
u – undo
Ctrl + r – redo
. – repeat last command

**Marking Text (Visual Mode)**

v – start visual mode, mark lines, then perform an operation (such as d-delete)
V – start linewise visual mode
Ctrl + v – start blockwise visual mode
o – move to the other end of marked area
O – move to other corner of block
aw – mark a word
ab – a block with ()
aB – a block with {}
ib – inner block with ()
iB – inner block with {}
Esc – exit visual mode

**Visual Commands**
> – shift text right
< – shift text left
y – yank (copy) marked text
d – delete marked text
~ – switch case
