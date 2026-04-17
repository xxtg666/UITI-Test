# UITI Test (User Interface Type Indicator)

![UITI Test Assessment](https://img.shields.io/badge/UI-Morphing-blueviolet) ![React](https://img.shields.io/badge/React-18-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

UITI (界面美学人格测试) 是一个创新型的网页前端测试应用，旨在发掘用户潜意识中的数字美学偏好。它致敬了经典的 MBTI 十六型人格测试，但在测试维度上完全锚定在**视觉设计、用户界面体验、以及数字美学调性**上。

> 最重要的是，这不仅仅是一个「问卷」，它的测试界面是一个 **Morphing UI（流式自适应界面）**。当你做出不同的选择时，整个网站的背景、卡片容器、字体排版、阴影、景深与动画反馈都会**实时发生改变**，让你在测试结束前，就已经置身于你潜意识选择的那个完美数字环境。

---

## ✨ 核心特性 / Features

*   📝 **40道深度定制的双模题库**
    *   20 道**文本沉浸题**：从软件操作习惯、功能需求与情绪反馈入手。
    *   20 道**视觉对比题**：用自然问答的方式展现两套完全不同风格的组件（如下拉菜单、进度条、播放器等），纯前端拟真渲染！
*   🎨 **极致的流式自适应 UI 引擎 (Morphing UI Engine)**
    *   算法会实时跟踪你的四维倾向分数矩阵。
    *   **极简 vs 表现 (M/E)**：背景从干练纯白向渐变赛博风演化；字体在 `Inter`、`JetBrains Mono` 到厚重的 `Playfair Display` 之间实时切换。
    *   **扁平 vs 立体 (F/D)**：卡片从黑边新粗野主义，演变为阴影深邃的新拟态图层，甚至化为强光赛博毛玻璃效果。
*   🏆 **16种专属界面美学人格谱系**
    *   结构化映射的 16 款性格图鉴：SMFT (极简工程师), OEDK (赛博极客), OEFT (波普艺术家) 等等。
    *   完善的类型详解与真实使用场景推荐。
*   📊 **百分比偏好看板**
    *   结果页展示精确的用户四维特征分值（Trait Bars）。
    *   可以直接保存甚至“沉浸”在100%纯净度的任意美学类型里。

## 🧬 四大美学维度 (The 4 Dimensions)

1.  **形态 (Shape)**: `S (结构 Structure)` vs `O (有机 Organic)` 
    *   你喜欢秩序、网格和直角，还是流动、圆润和不规则的排版？
2.  **表达 (Expression)**: `M (极简 Minimal)` vs `E (表现 Expressive)`
    *   你信奉 "Less is more" 只留核心信息，还是喜欢绚烂的渐变与张扬的视觉刺激？
3.  **空间 (Depth)**: `F (扁平 Flat)` vs `D (立体 Dimensional)`
    *   你偏好绝对纯粹的 2D 扁平涂装/色块空间，还是迷恋阴影、高光、毛玻璃带来的 3D 拟物资感？
4.  **动态 (Kinetics)**: `T (安静 Tranquil)` vs `K (动感 Kinetic)`
    *   你希望软件瞬时响应、静态克制，还是期待操作时有 Q 弹流畅的微交互与视差动画陪伴？

## 🚀 快速开始 / Getting Started

### 环境要求
* Node.js v16+ (推荐 v18)

### 安装与运行
```bash
# 1. 克隆仓库
git clone https://github.com/xxtg666/UITI-Test.git
cd UITI-Test

# 2. 安装依赖
npm install

# 3. 运行本地开发服务器
npm run dev
```

### 构建生产环境
```bash
npm run build
```

## 🛠️ 技术栈 / Tech Stack

*   **前端框架**: [React 18](https://react.dev/) + TypeScript
*   **构建工具**: [Vite](https://vitejs.dev/)
*   **样式方案**: [Tailwind CSS](https://tailwindcss.com/)
*   **动画引擎**: [Motion/React](https://motion.dev/) (Framer Motion)
*   **图标库**: [Lucide React](https://lucide.dev/)

## 🤝 贡献 / Contributing

欢迎提出意见建议（Issues）或者提交代码修改（Pull Requests）！任何对于视觉美学题目的优化，或是对于某种 UITI 类型的极端特效增饰，都会让这个项目变得更有趣！

## 📄 许可协议 / License

本项目采用 [MIT License](LICENSE) 开源协议。
