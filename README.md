# Jiantie Marketplace Demo

**模板商城通用 Demo** — 邀请函垂直场景，供开发团队参考落地。

## 🔗 在线预览

**https://marketplace-demo-jiantie.vercel.app**

> 直接在手机或桌面浏览器打开即可，≥1100px 自动切换为 PC 双栏布局。

---

## 技术栈

| 技术 | 说明 |
|------|------|
| React 18 + Vite | 零配置构建 |
| 纯 inline styles | 无 Tailwind / MUI 等外部 UI 库 |
| `src/styles/tokens.js` | 统一设计 token（颜色/字体/间距） |
| React state only | 无 Redux，收藏等状态在 App 层管理 |

---

## 页面结构

```
Home
├── CategoryDetail → TemplatePreview
├── Profile
│   ├── FavoritesScreen
│   ├── WorkDataScreen   (作品数据分析)
│   ├── HelpScreen       (帮助 & 反馈)
│   └── SettingsScreen
└── AgentScreen          (代理招募)
```

---

## 核心文件说明

```
src/
├── App.jsx                  # 路由 + 全局收藏状态
├── styles/tokens.js         # 设计系统（颜色/字体/间距/圆角）
├── data/
│   ├── categories.js        # 类目配置（本地化名称/图标/场景标签）
│   ├── templates.js         # 模板 mock 数据生成
│   └── filters.js           # 格式筛选配置
├── components/
│   ├── AppShell.jsx         # 手机框 / PC 双栏布局（响应式）
│   ├── HomeScreen.jsx       # 首页（类目列表 + 季节 Banner）
│   ├── CategoryDetail.jsx   # 类目详情（场景筛选 + 模板网格）
│   ├── TemplatePreview.jsx  # 全屏模板预览
│   ├── TemplateCard.jsx     # 模板卡片（支持收藏）
│   ├── ProfileScreen.jsx    # 个人中心（作品管理 + 会员）
│   ├── AgentScreen.jsx      # 代理招募页
│   ├── FavoritesScreen.jsx  # 收藏夹
│   ├── WorkDataScreen.jsx   # 作品数据（Views / RSVP / 趋势）
│   ├── HelpScreen.jsx       # 帮助 & 反馈
│   └── SettingsScreen.jsx   # 设置页
└── hooks/
    ├── useResponsive.js     # 响应式断点 hook
    └── useSEO.js            # 动态 title + JSON-LD
```

---

## 本地运行

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 适配说明

- **移动端（< 1100px）**：手机框 demo 模式，固定 390×844
- **PC 端（≥ 1100px）**：左侧类目导航栏 + 主内容区双栏布局
- **多语言**：`categories.js` 中 `localName` 字段替换为目标语言即可

---

## 部署

每次 `git push origin main` → Vercel 自动重新构建部署。
