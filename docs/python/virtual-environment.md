---
sidebar_position: 4
sidebar_label: Virtual Environment
title: Virtual Environment
---

# Virtual Environment

:::tip
Always create a virtaul environment `.venv` inside of the project folder. And, **don't add any source code** inside the `.venv` folder. 
:::

## Create an virtual environment
Create a project folder

```sh
mkdir my-project
cd my-project
```

Create virtual environment inside a project folder 

**`Python virtualenv`** is built into Python, other tools are Conda, pipenv, Poetry for creating virtual environments.

```sh
# Here .venv is the name of the virtual environment
python -m venv .venv
```

## Activate an environment

Activate virtual environment

```sh
.venv\Scripts\activate.bat
```

```sh
.venv\Scripts\activate.ps1
```

De-activate virtual environment
```sh
deactivate
```

## Install Individual Packages

PIP command => Preferred Installer Program

```sh
# To see installed packages
pip list 

# To install packges
pip install requests 
```

## Save packges to a file

To save list of packages installed in the project

```sh
pip freeze > requirements.txt 
```

## Install packages from a file

To install packages from the file

```sh
pip install -r requirements.txt 
```
