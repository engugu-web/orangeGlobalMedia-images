# 官网轮播图片仓库

这是 Orange Global Media 官网首页星环轮播的独立图片仓库，网站代码在另一个仓库，无需修改。

## 更换图片

1. 打开 `images/` 文件夹，替换、添加或删除图片。
2. 图片按文件名排序，推荐 `01.webp`、`02.webp`、`03.webp`。支持 WebP、PNG、JPG、JPEG、AVIF。
3. 提交并推送到 `main`，等待本仓库 Actions 的 **Publish carousel images** 变为绿色。
4. 刷新官网即可看到最新图片，无需推送官网代码。

也可以在 GitHub 网页上打开 `images/` → **Add file → Upload files** 上传并提交。

建议使用正方形图片（推荐 640×640 或 800×800），每张尽量小于 1 MB。非正方形图片会居中裁切。允许 1–48 张，每张最大 8 MB。

首页始终保留 12 个固定位置：少于 12 张时重复排列，多于 12 张时轮流展示全部图片。每 2 秒同时更换相邻图片，星环与页面布局不变。

`scripts/` 和 `.github/` 负责自动发布，通常无需修改。`dist/` 为自动生成内容，不提交。

发布过程中或图片服务暂时不可用时，官网会保留当前可用的轮播内容。

## 本地使用

本地目录：`D:\orangeMidea\engugu-images`

```sh
git add images
git commit -m "更新首页轮播图片"
git push
```

这个仓库用于官网公开图片，请勿放置账号密码或私人文件。
