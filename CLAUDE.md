# 工作约定

## 每次会话开始时
首先跑 `git pull --rebase`。如果有新 commit,简要告诉我拉到了什么。
如果有未提交的本地改动导致 pull 失败,先停下问我怎么处理。

## 会话结束前
提醒我有没有未推送的 commit,需要 push 的话提醒我。

## 部署相关
本项目通过 GitHub 集成自动部署到 Vercel。
**绝对不要跑 `vercel deploy`、`vercel --prod` 或其它任何直接上传到部署平台的命令。**
我交替在 Mac 和 Windows 工作,GitHub 是唯一的同步通道。
