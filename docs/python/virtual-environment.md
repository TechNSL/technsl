---
sidebar_position: 2
sidebar_label: Virtual Environment
title: Virtual Environment
---

# Virtual Environment

- Create an virtual environment
- Activate an environment
- Install Individual Packages
- Save packges to a file
- Install packages from a file

**TIP:** Always create a virtaul environment ".ven" inside of the project folder. And, don't add any source code inside the venv folder. 

Create a project folder

```sh
mkdir my-project
cd my-project
```

Create virtual environment inside a project folder 

**Python virtualenv** is built into Python, other tools are Conda, pipenv, Poetry for creating virtual environments.

```sh
# Here .venv is the name of the virtual environment
python -m venv .venv
```

Activate virtual environment
```sh
.venv\Scripts\activate.bat
```

De-activate virtual environment
```sh
deactivate
```

Install Packages

PIP command => Preferred Installer Program

```sh
# To see installed packages
pip list 

# To install packges
pip install requests 

# To save list of packages installed in the project
pip freeze > requirements.txt 

# To install packages from the file
pip install -r requirements.txt 

```