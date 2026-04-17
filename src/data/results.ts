export interface UITIResult {
  code: string;
  name: string;
  description: string;
  examples: string;
}

export const uitiResults: Record<string, UITIResult> = {
  // SM (Structured + Minimalist)
  SMFT: {
    code: "SMFT",
    name: "绝对效率师 (Absolute Efficiency Master)",
    description: "便当网格、大留白、绝对扁平、无动效干扰。您排斥任何可能导致页面加载延迟或分散注意力的视觉元素，追求极致的信息获取效率。",
    examples: "高频专业生产力工具、数据库后台、维基百科、彭博金融终端。"
  },
  SMFK: {
    code: "SMFK",
    name: "敏捷操作者 (Agile Operator)",
    description: "模块化网格、清爽极简、扁平设计，但依赖微交互。您需要动效作为操作的确认反馈，以消除盲操带来的不确定感。",
    examples: "现代SaaS任务管理平台如Trello、Notion。"
  },
  SMDT: {
    code: "SMDT",
    name: "深度秩序者 (Deep Order Seeker)",
    description: "严谨的排版、克制的色彩，但需要拟态卡片和阴影层级。您偏好通过Z轴的物理深度来区分复杂的信息主次，而非增加颜色或边框。",
    examples: "银行财务资产概览界面、苹果系统偏好设置面板。"
  },
  SMDK: {
    code: "SMDK",
    name: "现代实用派 (Modern Pragmatist)",
    description: "Bento Grid结合玻璃拟态、空间感与流畅动效。这代表了当前科技巨头生态系统的标准审美，兼顾了逻辑秩序、视觉克制、空间深度与动态反馈。",
    examples: "iOS控制中心、微软Fluent Design系统。"
  },

  // SE (Structured + Expressive)
  SEFT: {
    code: "SEFT",
    name: "像素波普客 (Pixel Pop Artist)",
    description: "粗野网格、高对比度碰撞色彩、复古扁平、静态呈现。偏好纯粹的二维强力视觉冲击，类似高信息密度的数字波普海报。",
    examples: "“新粗野主义”风格的先锋设计网站、潮流品牌宣传页。"
  },
  SEFK: {
    code: "SEFK",
    name: "动态潮波客 (Dynamic Wave Rider)",
    description: "强力色彩、网格排版、二维插图结合高频动效反馈。界面像游戏机一样响应，在有序框架内制造动态惊喜。",
    examples: "获奖的数字营销活动页面、在线潮玩抢购APP。"
  },
  SEDT: {
    code: "SEDT",
    name: "橱窗策展人 (Window Curator)",
    description: "结构严谨但布满3D渲染元素、高清材质，呈现高视觉密度。犹如高级百货公司的橱窗陈列，静态但极度华丽且信息丰富。",
    examples: "苹果硬件产品的深度展示页、高端汽车官网配置器。"
  },
  SEDK: {
    code: "SEDK",
    name: "沉浸体验官 (Immersive Experience Officer)",
    description: "3D交互卡片、玻璃拟态层级叠加、繁复的视觉材质与全效动画。追求一种将逻辑网格与华丽三维动态结合到极致的准游戏化体验。",
    examples: "主机游戏机主控UI系统、重度交互式产品推介网站。"
  },

  // OM (Organic + Minimalist)
  OMFT: {
    code: "OMFT",
    name: "禅意隐士 (Zen Hermit)",
    description: "不对称排版、极端大留白、超细字体、绝对扁平且静谧无动效。摒弃一切多余的感官刺激，将界面视为纯粹二维的极简诗篇。",
    examples: "高端独立艺术杂志官网、追求绝对静止与极简美学的线上画廊主页。"
  },
  OMFK: {
    code: "OMFK",
    name: "灵动诗人 (Agile Poet)",
    description: "自由的流体排版、二维扁平视觉，融入丝滑的滚动加载与指向性微动效。通过动态微交互为冰冷的极简数字空间赋予呼吸感和生命力。",
    examples: "顶级设计师个人作品集网站、高端建筑事务所官网。"
  },
  OMDT: {
    code: "OMDT",
    name: "光影雕塑家 (Light&Shadow Sculptor)",
    description: "有机的不规则形体、新拟态光影、克制的素雅色彩、静态呈现。偏好柔和的物理弧度和浮雕质感，如同在数字空间中雕刻大理石。",
    examples: "环境冥想体验的心理健康应用、智能家居壁挂式触控面板。"
  },
  OMDK: {
    code: "OMDK",
    name: "空间织梦者 (Space Dreamweaver)",
    description: "空间自由层级、多层毛玻璃叠加、微缩放动效、非线性布局。界面元素如同漂浮在三维空间中的半透明云雾，随操作产生轻微的呼吸位移。",
    examples: "空间计算设备(如VisionOS)中的沉浸式系统、未来主义前沿科技概念演示。"
  },

  // OE (Organic + Expressive)
  OEFT: {
    code: "OEFT",
    name: "拼贴反叛者 (Collage Rebel)",
    description: "数字涂鸦、废土拼贴、错位叠加排版、高饱和对比、摒弃纵深与动态。展现出一种极其原始、生猛、无视一切对齐规则的静态艺术张力。",
    examples: "地下音乐文化社区、先锋独立音乐节官网、街头服饰品牌应用。"
  },
  OEFK: {
    code: "OEFK",
    name: "幻觉漫游者 (Illusion Wanderer)",
    description: "迷幻的高饱和色彩渐变、无规则流动排版、全屏视差动效与复杂的交互式光标响应。试图通过强烈的视觉扰动让用户在探索中产生沉醉感。",
    examples: "创新型数字创意机构宣传页、互动式流媒体宣发活动页面。"
  },
  OEDT: {
    code: "OEDT",
    name: "质感收藏家 (Texture Collector)",
    description: "3D超现实拼贴、复杂肌理碰撞、错落有致的极繁装饰、无规律的空间深度。即便没有繁复的动效，其呈现的静态材质细节与信息量也极其庞大。",
    examples: "聚焦数字艺术原画的高级NFT陈列室、具有复杂世界观的互动绘本设定集。"
  },
  OEDK: {
    code: "OEDK",
    name: "全域构建者 (Omni-Builder)",
    description: "彻底打破2D页面概念，使用全3D场景建构界面，极致的色彩与物理引擎动态交互相结合。这是UITI中最具视觉爆炸力和感官消耗的巅峰类型。",
    examples: "Web3.0沉浸式元宇宙大厅、重度互动剧情大作的主UI枢纽系统。"
  }
};
