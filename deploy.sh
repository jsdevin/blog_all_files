#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件 , yarn docs:build
npm run docs:build
rm -rf ../distCopy/dist/*

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../distCopy/

# 进入生成的文件夹
cd ../distCopy/dist

# git初始化，每次初始化不影响推送
git init
git add -A
git commit -m '补充入门前端的知识'
git branch -M main

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:jsdevin/jsdevin.github.io.git main

#如果是发布到自定义域名 
# echo 'http://' > CNAME git init git add -A git commit -m 'deploy'