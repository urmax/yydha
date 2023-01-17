---
title: git删除本地分支 批量删除本地分支
date: 2023-01-13
updated: 2023-01-13
tags: 
    - 前端
categories: 
    - git
keywords: git
description: git删除本地分支 批量删除本地分支
---
# git删除本地分支 批量删除本地分支
## 想删除本地的少量分支
本地分支比较少的时候，我们可以轻轻松松使用此命令删除
```
git branch -d deleteBranchName
```
如果发现删除不了，可以强制删除使用大写的D
```
git branch -D deleteBranchName
```
## 想批量删除本地的分支
### 批量删除本地已经合并过某分支的所有分支
```
git branch --merged | egrep -v "(^\*|master)" | xargs git branch -d
```
同理这个小写的d可以换成大写的D
### 批量删除本地所有分支
```
git branch | grep -v 'master' | xargs git branch -D

```