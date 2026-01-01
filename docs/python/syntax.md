---
sidebar_position: 3
sidebar_label: Python Syntax
title: Python Syntax
---

## Python Syntax

Python syntax can be executed by writing directly in the Command Line:

```sh
>>> print("Hello, World!")
Hello, World!
```

Or by creating a python file on the server, using the .py file extension, and running it in the Command Line:

```sh
C:\Users\Your Name>python myfile.py
```

Check the Python version of the editor:
```py
import sys

print(sys.version)
```

## Python Comments

```py

#This is a comment
print("Hello, World!")

print("Hello, World!") #This is a comment


#This is a comment
#written in
#more than just one line
print("Hello, World!")


# Since Python will ignore string literals that are not assigned to a variable, 
# you can add a multiline string (triple quotes) in your code, and place your comment inside it:

# As long as the string is not assigned to a variable, Python will read the code, but then ignore it, 
# and you have made a multiline comment.

"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")

```

## Python Indentation

Indentation refers to the spaces at the beginning of a code line.

Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.

Python uses indentation to indicate a block of code.

```py
if 5 > 2:
  print("Five is greater than two!")
```

**Python will give you an error if you skip the indentation:**

```py
# SYNTAX ERROR
if 5 > 2:
print("Five is greater than two!")
```

The number of spaces is up to you as a programmer, **the most common use is four**, but it has to be at least one.

```py
# SINGLE space for indentation
if 5 > 2:
 print("Five is greater than two!") 

# FOUR spaces for indentation
if 5 > 2:
        print("Five is greater than two!") 
```
You have to use **the same number of spaces in the same block of code**, otherwise Python will give you an error:

```py
# SYNTAX ERROR
if 5 > 2:
 print("Five is greater than two!")
        print("Five is greater than two!")
```