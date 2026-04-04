# Mori Template Marketplace

模板商城预览站 — 基于 Vite + React 18 的纯静态前端，展示多市场邀请函模板分类与浏览体验。

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:5173

## 构建

```bash
npm run build
```

输出到 `dist/` 目录。

## 部署到 Cloudflare Pages

### 方式一：GitHub 集成（推荐）

1. 将此目录推送到独立的 GitHub 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create a project → Connect to Git
3. 配置构建设置：
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. 点击 Save and Deploy
5. 每次 push 自动部署，每个 PR 自动生成预览 URL

### 方式二：CLI 手动部署

```bash
# 首次需要登录
npx wrangler login

# 一键构建 + 部署
npm run deploy
```

### 绑定自定义域名

1. 在 Cloudflare Dashboard → Pages → 你的项目 → Custom domains
2. 添加自定义域名（如 `marketplace.yourdomain.com`）
3. Cloudflare 会自动配置 DNS（CNAME → `*.pages.dev`）
4. 等待 SSL 证书自动签发（通常几分钟）

## 功能

- 8 个市场（IN, ID, BR, FR, NG, SA, TR, US）
- 多级类目浏览（L2 / L3）
- 4 种模板格式（Flyer, Image, H5, Video）
- 模板搜索（热门搜索 + 搜索历史）
- 模板详情 & 收藏
- 我的作品管理
- 登录 / 设置页面
- 购买模态框

## 技术栈

- React 18
- Vite 6
- 纯内联样式（无 CSS 框架）
- 所有数据为 Mock/Hardcoded
