# GIT CHEAT SHEET

`` How to check your Git configuration : ``

> git config -l

`` How to setup your Git user email: ``
> git config --global user.email "abc@abc.com"

``` How to initialize a Git repo: ```
> git init

``` How to add a file to the staging area in Git: ```
> git add filename_here

```How to add all files in the staging area in Git:```
> git add .

``` How to check a repository's status in Git: ```
> git status

```How to commit changes in the editor in Git:```
> git commit 

```How to commit changes with a message in Git:```
>git commit -m "your commit message here"

```How to commit changes (and skip the staging area) in Git:```
> git commit -a -m"your commit message here"

``` How to see your commit history in Git: ```
> git log

```How to see your commit history including changes in Git:```
>git log -p

```How to see a specific commit in Git:```
> git show commit-id

```How to see log stats in Git:```
> git log --stat

```How to remove tracked files from the current working tree in Git:```
> git rm filename

```How to ignore files in Git:```
> git checkout filename

```How to create a new branch in Git:```
> git branch branch_name

```How to switch to a newly created branch in Git: ```

> git checkout branch_name

```How to list branches in Git:```
#### You can view all created branches using the git branch command

> git branch

```How to create a branch in Git and switch to it immediately: ```

> git checkout -b branch_name

``` How to delete a branch in Git: ```
> git branch -d branch_name

``` How to merge two branches in Git: ```
> git merge branch_name

``` How to add a remote repository in Git: ```
> git add remote https://repo_here

``` How to see remote URLs in Git: ```
> git remote -v

``` How to get more info about a remote repo in Git: ```
> git remote show origin

``` How to push changes to a remote repo in Git: ```
> git push

``` How to check remote branches that Git is tracking: ```
> git branch -r

``` How to pull changes from a remote repo in Git: ```
> git pull

---
Reference : freeCodeCamp.org
---

## Advance commands 

```merge - Join two or more development histories together ```

>git merge

stash

>git stash

>git stash apply

```To examine the history and state check these commands (see also: git help revisions)```

bisect     Use binary search to find the commit that introduced a bug

grep       Print lines matching a pattern

```To grow, mark and tweak your common history```

rebase     Reapply commits on top of another base tip

tag        Create, list, delete or verify a tag object signed with GPG
