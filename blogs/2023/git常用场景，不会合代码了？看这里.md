---
title: git常用场景，不会合代码了？看这里
date: 2023-02-17
updated: 2023-02-17
tags: 
    - 前端
categories: 
    - git
keywords: git
description: git常用场景，不会合代码了？看这里
---
# git常用场景，不会合代码了？看这里
### 1. 我刚才提交了啥呀？
```js
// 1 
git show
// 2 
git log -n1 -p

```
### 2. 我上次的commit信息又写错了，怎么改下？
```js
// 1. 这个操作会打开一个编辑器，输入 i 就可以修改上次的commit信息，保存并退出可以使用 :wq
git commit --amend --only
// 2. 直接改掉
git commit --amend --only -m 'xxxxxxx'

```
### 3. 我上次提交的代码，感觉全错了，我要去掉最后一次的提交，从头开始。
```js
git reset HEAD^ --hard // 强制退回一个版本
git push -f [remote] [branch] // 强制推送到远端

```
### 4. 我不小心退回了版本，怎么找回这次内容
```js
git reflog // 找到那次的commit的SHA1234
git reset --hard SHA1234 // 到这个版本里来

```
### 5. 前面几次的提交都是一个功能，我想要合并这些commit信息 变成一个提交。
```js
git rebase -i HEAD~5
```
```
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
pick b729ad5 fixup
pick e3851e8 another fix

# Rebase 8074d12..b729ad5 onto 8074d12
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```
所有以 # 开头的行都是注释, 不会影响 rebase.

然后，你可以用任何上面命令列表的命令替换 pick, 你也可以通过删除对应的行来删除一个提交(commit)。

然后需要的commit 提交前面 使用 s , 这样就能既保留commit提交，但是又能把几次提交变成一个

### 6. 想删除本地的少量分支
本地分支比较少的时候，我们可以轻轻松松使用此命令删除
```
git branch -d deleteBranchName
```
如果发现删除不了，可以强制删除使用大写的D
```
git branch -D deleteBranchName
```
### 7.想批量删除本地的分支
#### 批量删除本地已经合并过某分支的所有分支
```
git branch --merged | egrep -v "(^\*|master)" | xargs git branch -d
```
同理这个小写的d可以换成大写的D
#### 批量删除本地所有分支
```
git branch | grep -v 'master' | xargs git branch -D

```