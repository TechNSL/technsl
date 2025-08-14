---
sidebar_position: 1
sidebar_label: Introduction
title: Introduction
---

# What is Git ?

# Git Commands

```bash

git -v
git --version

git -h
git --help

git config --list
git config --list system
git config --list global
git config --list local


# Set username and email for git
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Remove username and email from git config
git config --global --unset user.name
git config --global --unset user.email

git config --global --unset-all user.name
git config --global --unset-all user.email

git clone https://github.com/samkoti/dotnet.git
git clone --recurse-submodules https://github.com/samkoti/dotnet.git
git -c http.sslVerify=false clone https://github.com/samkoti/dotnet.git

git switch "origin/branch-name"
git fetch origin

git status
git diff

# Add all files in the current directory
git add .

# Add all files in the current directory and subdirectories
git add -A
# Add specific file
git add <file-name>

# Add specific directory
git add <directory-name>

# Remove file from git
git rm <file-name>
# Remove file from git and filesystem
git rm -f <file-name>
# Remove directory from git
git rm -r <directory-name>
# Remove directory from git and filesystem
git rm -rf <directory-name>

# Commit changes
git commit -m "Commit message"
# Commit all changes in the current directory
git commit -am "Commit message"
# Commit all changes in the current directory and subdirectories
git commit -a -m "Commit message"
# Push changes to remote repository
git push origin <branch-name>
# Push changes to remote repository and set upstream branch
git push -u origin <branch-name>
# Push changes to remote repository and force push
git push -f origin <branch-name>
# Push changes to remote repository and force push with lease
git push --force-with-lease origin <branch-name>
# Pull changes from remote repository
git pull origin <branch-name>
# Fetch changes from remote repository
git fetch origin <branch-name>
# Fetch all branches from remote repository
git fetch --all
# Fetch all branches from remote repository and prune deleted branches
git fetch --prune
# Show commit history
git log
# Show commit history with graph
git log --graph --oneline --decorate --all
# Show commit history with graph and file changes
git log --graph --oneline --decorate --all --stat
# Show commit history with graph and file changes and author
git log --graph --oneline --decorate --all --stat --author="Your Name"
# Show commit history with graph and file changes and author and date
git log --graph --oneline --decorate --all --stat --author="Your Name" --since="1 week ago"
# Show commit history with graph and file changes and author and date and limit
git log --graph --oneline --decorate --all --stat --author="Your Name" --since="1 week ago" -n 10
# Show commit history with graph and file changes and author and date and limit and reverse

git log --graph --oneline --decorate --all --stat --author="Your Name" --since="1 week ago" -n 10 --reverse
# Show commit history with graph and file changes and author and date and limit and reverse and pretty format
git log --graph --oneline --decorate --all --stat --author="Your Name" --since="1 week ago" -n 10 --reverse --pretty=format:"%h %an %ad %s"
# Show commit history with graph and file changes and author and date and limit and reverse and pretty format and color


git push

```


# Clear Terminal Commands in VS Coode


```ps

# Get temirnal commands history file path

(Get-PSReadLineOption).HistorySavePath

# Output: 
C:\Users\<user-name>\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt


# Clear VS Code temirnal commands history

Remove-Item (Get-PSReadLineOption).HistorySavePath

```
