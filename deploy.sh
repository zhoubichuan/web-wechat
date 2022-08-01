# 自动化打包同时将源码发布到master分支，将打包后的代码发布到gh-pages分支

# 1.发布到master分支
git init
git add -A
git commit -m 'master'
git pull gitee master
git push -u gitee master
git push gitee master

# 2.打包
npm run src:build

# 3.进入打包目录
cd web-wechat

# 4.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add gitee https://gitee.com/zhoubichuan/web-wechat.git
git push -f gitee gh-pages

# 5.返回初始目录
cd -

# 1.发布到master分支
git init
git add -A
git commit -m 'master'
git pull github master
git push -u github master
git push github master

