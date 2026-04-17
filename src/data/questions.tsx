import React from 'react';
import { LayoutGrid, List, AlignLeft, BarChart3, CreditCard, Music, Coffee, Wallet, ShoppingBag, EyeOff, Play, Pause, Search, Home, Heart, User, Check, Sun, Moon, Sparkles, ChevronDown, Bell, MessageCircle, MoreHorizontal, Settings, ChevronRight, Plus, CheckCircle, X, Trash2 } from 'lucide-react';

export type Dimension = 'SO' | 'ME' | 'FD' | 'TK';
export type Pole = 'S' | 'O' | 'M' | 'E' | 'F' | 'D' | 'T' | 'K';

export interface Question {
  id: number;
  dimension: Dimension;
  type: 'text' | 'visual';
  scenario: string;
  optionA: {
    pole: Pole;
    text?: string;
    render?: () => React.ReactNode;
  };
  optionB: {
    pole: Pole;
    text?: string;
    render?: () => React.ReactNode;
  };
}

export const questions: Question[] = [
  // --- SO: Structured vs Organic ---
  {
    id: 1, dimension: 'SO', type: 'text',
    scenario: "当打开一款全新应用时，你最希望第一眼看到的内容布局是：",
    optionA: { pole: 'S', text: "各类信息被放置在大小统一或严格按比例缩放的矩形卡片中，分类明确，如同便当盒一样井然有序。" },
    optionB: { pole: 'O', text: "标题和图片错落有致，甚至存在轻微的重叠，打破常规的对齐方式，通过视觉张力引导我的视线。" }
  },
  {
    id: 2, dimension: 'SO', type: 'text',
    scenario: "在个人数字工作空间（如项目看板或笔记软件）中，你的默认整理习惯是：",
    optionA: { pole: 'S', text: "建立严格的栏目和层级列表，确保没有任何元素越界或未对齐，追求极致的条理性。" },
    optionB: { pole: 'O', text: "允许不同的组件在空白画布上自由散落，依靠大小和颜色标记来区分重要性，享受自由排版。" }
  },
  {
    id: 3, dimension: 'SO', type: 'text',
    scenario: "对于长篇距文本（如深度报告）的数字排版，你倾向于：",
    optionA: { pole: 'S', text: "严格的左对齐或两端对齐，统一的段落间距和边界留白，绝不容许版心被破坏。" },
    optionB: { pole: 'O', text: "支持流体排版，允许引用文字、配图突破传统的文本边界，以不对称的形式插入文中。" }
  },
  {
    id: 4, dimension: 'SO', type: 'text',
    scenario: "当面对一个包含多种数据图表的仪表盘时，你认为最专业的展示方式是：",
    optionA: { pole: 'S', text: "将所有图表限制在带有明显边框和底色的标准化栅格系统中。" },
    optionB: { pole: 'O', text: "移除所有卡片边框，让数据图表自然融入背景，依靠图表自身的形状来展现结构。" }
  },
  {
    id: 5, dimension: 'SO', type: 'text',
    scenario: "如果你需要在一个多步骤页面中填写信息，你期望表单的结构是：",
    optionA: { pole: 'S', text: "线性展开，每一步都在固定大小的输入框内完成，上下间距严格一致。" },
    optionB: { pole: 'O', text: "动态展开，当前填写的字段会放大并自由占据画布，其他字段退居背景的任意位置。" }
  },
  // Visual Questions
  {
    id: 6, dimension: 'SO', type: 'visual',
    scenario: "同样是在线作品集，你更喜欢哪种主页呈现方式？",
    optionA: { pole: 'S', render: () => (
      <div className="grid grid-cols-2 gap-3 p-4 bg-gray-50 h-full w-full">
        <div className="bg-gray-200 border border-gray-300 w-full h-full flex items-center justify-center text-gray-400 text-[10px] uppercase tracking-widest">Image</div>
        <div className="bg-gray-200 border border-gray-300 w-full h-full flex items-center justify-center text-gray-400 text-[10px] uppercase tracking-widest">Image</div>
        <div className="bg-gray-200 border border-gray-300 w-full h-full flex items-center justify-center text-gray-400 text-[10px] uppercase tracking-widest">Image</div>
        <div className="bg-gray-200 border border-gray-300 w-full h-full flex items-center justify-center text-gray-400 text-[10px] uppercase tracking-widest">Image</div>
      </div>
    )},
    optionB: { pole: 'O', render: () => (
      <div className="relative p-4 bg-[#f8f9fa] h-full w-full overflow-hidden flex items-center justify-center font-serif">
        <div className="absolute w-28 h-32 bg-blue-100 rounded-3xl -rotate-6 top-2 left-6 shadow-sm border border-blue-200/50"></div>
        <div className="absolute w-24 h-24 bg-pink-100 rounded-full rotate-12 bottom-6 right-4 flex items-center justify-center shadow-md border border-pink-200/50">
          <span className="text-pink-400 italic text-sm font-bold rotate-[-12deg]">Art.</span>
        </div>
        <div className="w-20 h-24 bg-amber-100 rounded-[2rem_1rem_3rem_0.5rem] rotate-12 absolute left-1/3 top-1/4 shadow-inner border border-amber-200/50"></div>
      </div>
    )}
  },
  {
    id: 7, dimension: 'SO', type: 'visual',
    scenario: "对于移动端应用的底部导航栏，你倾向于哪种设计？",
    optionA: { pole: 'S', render: () => (
      <div className="flex h-full w-full items-end p-2 bg-white border-t border-gray-100">
        <div className="flex w-full justify-around pt-3 border-t border-gray-200">
          <div className="flex flex-col items-center gap-1 text-blue-600"><Home className="w-5 h-5" /><div className="text-[8px]">Home</div></div>
          <div className="flex flex-col items-center gap-1 text-gray-400"><Search className="w-5 h-5" /><div className="text-[8px]">Search</div></div>
          <div className="flex flex-col items-center gap-1 text-gray-400"><Heart className="w-5 h-5" /><div className="text-[8px]">Likes</div></div>
          <div className="flex flex-col items-center gap-1 text-gray-400"><User className="w-5 h-5" /><div className="text-[8px]">Profile</div></div>
        </div>
      </div>
    )},
    optionB: { pole: 'O', render: () => (
      <div className="flex h-full w-full items-end justify-center p-4 bg-gray-50 border-t border-gray-100/50 relative overflow-hidden">
        <div className="absolute w-12 h-12 bg-green-200 rounded-full blur-xl bottom-6 right-8 opacity-50"></div>
        <div className="bg-white/80 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-white rounded-[2rem] w-auto px-6 py-3 flex gap-6 items-center z-10 bottom-4 relative">
           <Home className="w-5 h-5 text-gray-600" />
           <div className="w-12 h-12 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg -mt-8 translate-y-2">
              <Plus className="w-6 h-6" />
           </div>
           <User className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    )}
  },
  {
    id: 8, dimension: 'SO', type: 'visual',
    scenario: "面对待办事项应用，下面哪种任务列表结构更让你感到舒适？",
    optionA: { pole: 'S', render: () => (
      <div className="flex flex-col w-full h-full bg-white p-6 gap-4">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center"><Check className="w-3 h-3 text-transparent" /></div>
          <div className="flex-1 h-3 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
          <div className="flex-1 h-3 bg-gray-200 rounded opacity-40"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center"><Check className="w-3 h-3 text-transparent" /></div>
          <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
    )},
    optionB: { pole: 'O', render: () => (
      <div className="relative p-4 w-full h-full bg-[#fcfcfc] flex items-center justify-center overflow-hidden">
        <svg className="absolute w-full h-full inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <path d="M 60 60 Q 100 120 160 80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 160 80 Q 200 60 220 120" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </svg>
        <div className="w-20 h-20 rounded-[2rem_1rem_2rem_3rem] bg-yellow-100 border border-yellow-200 absolute left-4 top-4 flex items-center justify-center text-xs font-serif text-yellow-800 shadow-sm rotate-6 z-10">Ideate</div>
        <div className="w-16 h-16 rounded-full border-2 border-blue-400 bg-white absolute left-1/2 top-1/2 -ml-8 -mt-8 text-blue-500 flex items-center justify-center shadow-lg z-10">
          <Check className="w-6 h-6" />
        </div>
        <div className="w-24 h-16 rounded-[1rem_3rem_1rem_0.5rem] bg-green-50 border border-green-200 absolute right-4 bottom-6 flex items-center justify-center text-xs text-green-700 shadow-sm -rotate-3 z-10">Publish</div>
      </div>
    )}
  },
  {
    id: 9, dimension: 'SO', type: 'visual',
    scenario: "在浏览时尚电商时，你更容易被哪种商品详情页风格吸引？",
    optionA: { pole: 'S', render: () => (
      <div className="flex flex-row p-4 gap-4 w-full h-full bg-white items-center">
        <div className="w-1/2 bg-gray-100 h-full flex items-center justify-center text-gray-400">IMG</div>
        <div className="w-1/2 flex flex-col gap-2">
          <div className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Clothing</div>
          <div className="w-full h-4 bg-black rounded-sm mb-2"></div>
          <div className="w-3/4 h-2 bg-gray-300 rounded-sm"></div>
          <div className="w-1/2 h-2 bg-gray-300 rounded-sm"></div>
          <div className="mt-4 px-4 py-2 bg-black text-white text-xs text-center font-bold">ADD TO CART</div>
        </div>
      </div>
    )},
    optionB: { pole: 'O', render: () => (
      <div className="relative w-full h-full bg-stone-100 overflow-hidden font-serif">
        <div className="absolute inset-0 bg-stone-200 w-[120%] h-[120%] -rotate-6 transform origin-top-left -ml-10"></div>
        <div className="absolute top-6 left-6 text-2xl font-bold tracking-tighter text-stone-800 z-10">The<br/>Collection.</div>
        <div className="absolute bottom-6 right-6 bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-[10px] font-sans font-bold shadow-xl rotate-12 z-20">SHOP</div>
        <div className="absolute top-1/2 right-4 w-28 h-40 bg-white shadow-2xl origin-bottom -rotate-12 -translate-y-1/2 flex items-center justify-center text-stone-300 z-10">IMG</div>
      </div>
    )}
  },
  {
    id: 10, dimension: 'SO', type: 'visual',
    scenario: "收取系统通知时，你更偏爱哪种消息排版形式？",
    optionA: { pole: 'S', render: () => (
      <div className="flex flex-col p-4 gap-px w-full h-full bg-gray-100">
        <div className="bg-white p-3 shadow-sm border border-gray-100 flex gap-3 text-xs">
          <Bell className="w-4 h-4 text-blue-500 shrink-0" />
          <div><div className="font-bold mb-1">New Message</div><div className="text-gray-500 line-clamp-1">You have received a new...</div></div>
        </div>
        <div className="bg-white p-3 shadow-sm border border-gray-100 flex gap-3 text-xs">
          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
          <div><div className="font-bold mb-1">Task Complete</div><div className="text-gray-500 line-clamp-1">Project alpha is done.</div></div>
        </div>
      </div>
    )},
    optionB: { pole: 'O', render: () => (
      <div className="relative p-4 w-full h-full bg-slate-50 flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 right-8 bg-white/80 backdrop-blur shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white rounded-[2rem_2rem_0_2rem] p-4 text-xs max-w-[140px] rotate-2">
           <MessageCircle className="w-4 h-4 text-pink-500 mb-2" />
           <span className="font-medium">Hey! Long time no see!</span>
        </div>
        <div className="absolute bottom-6 left-6 bg-blue-600 text-white shadow-xl rounded-[2rem_2rem_2rem_0] p-4 text-xs max-w-[120px] -rotate-3">
           <Sparkles className="w-4 h-4 text-blue-200 mb-2" />
           <span className="font-semibold">Your daily streak is huge!</span>
        </div>
      </div>
    )}
  },

  // --- ME: Minimalist vs Expressive ---
  {
    id: 11, dimension: 'ME', type: 'text',
    scenario: "假设你要使用日常天气应用，你认为最理想的背景设定是：",
    optionA: { pole: 'M', text: "纯白或深灰色背景，有大量的留白，仅用最纤细的线条图标和极简无衬线字体显示温湿度。" },
    optionB: { pole: 'E', text: "充满细节的动态写实插画，或色彩对比极强的高饱和渐变色背景，数字字号巨大且字体独特。" }
  },
  {
    id: 12, dimension: 'ME', type: 'text',
    scenario: "对于品牌或应用中采用的主力字体，你更倾向于：",
    optionA: { pole: 'M', text: "极具辨识度且规整的无衬线字体（Sans-serif），易于快速阅读，本身无多余装饰。" },
    optionB: { pole: 'E', text: "充满复古感、带有装饰细节的定制衬线字体（Serif）或手写体，字体不仅是信息，更是情绪。" }
  },
  {
    id: 13, dimension: 'ME', type: 'text',
    scenario: "当浏览科技产品宣传网页时，以下哪种策略更能留住你？",
    optionA: { pole: 'M', text: "整个页面除了产品本身的高清图和几行核心参数外，再无其他任何视觉元素，极度克制。" },
    optionB: { pole: 'E', text: "页面中融合了3D图形、粗体大字、鲜艳对比色以及复杂数字噪点纹理，视觉信息扑面而来。" }
  },
  {
    id: 14, dimension: 'ME', type: 'text',
    scenario: "关于界面中的图标（Icon）设计，你认为最佳的标准是：",
    optionA: { pole: 'M', text: "统一的单色线框图标，去除所有内部细节，仅仅保留能被识别的最基本几何轮廓。" },
    optionB: { pole: 'E', text: "多彩的、带有丰富渐变和内部细节的插画风图标，甚至每个图标都有独立的配色方案。" }
  },
  {
    id: 15, dimension: 'ME', type: 'text',
    scenario: "在评价一款社交媒体应用的视觉外观时，你会更赞赏哪种倾向？",
    optionA: { pole: 'M', text: "界面尽可能隐形，让用户生成的内容成为唯一视觉焦点，UI本身几乎没有色彩。" },
    optionB: { pole: 'E', text: "UI本身极具品牌个性，运用大胆品牌色、粗犷分割线和极繁装饰性元素包裹内容。" }
  },
  {
    id: 16, dimension: 'ME', type: 'visual',
    scenario: "如果你在听播客或音乐，你会选择哪款界面的播放器？",
    optionA: { pole: 'M', render: () => (
      <div className="flex flex-col items-center justify-center p-6 bg-white w-full h-full font-mono">
        <div className="w-24 h-24 border-2 border-black flex items-center justify-center mb-6">
           <Music className="w-8 h-8 text-black" />
        </div>
        <div className="w-full max-w-[160px] h-1 bg-black"><div className="w-1/3 h-full bg-black relative"></div></div>
        <div className="text-[10px] uppercase font-bold mt-4 tracking-widest">Track 01</div>
      </div>
    )},
    optionB: { pole: 'E', render: () => (
      <div className="flex flex-col justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600 via-purple-700 to-indigo-900 w-full h-full text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        <div className="relative z-10 font-serif italic text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-300 drop-shadow-lg mb-6">Vibrations</div>
        <div className="w-24 h-24 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.5)] border-4 border-white/20 bg-gradient-to-tr from-pink-500 to-yellow-500 z-10 flex items-center justify-center blur-[1px]">
           <Play className="w-8 h-8 text-white fill-white" />
        </div>
      </div>
    )}
  },
  {
    id: 17, dimension: 'ME', type: 'visual',
    scenario: "饥肠辘辘打开外卖APP时，哪种点餐首页更合你意？",
    optionA: { pole: 'M', render: () => (
      <div className="p-6 bg-white w-full h-full flex flex-col font-sans">
        <div className="text-sm font-semibold text-black mb-4">Categories</div>
        <div className="flex flex-col gap-2">
           <div className="flex items-center justify-between border-b border-gray-200 pb-2"><span className="text-xs">Food</span><ChevronRight className="w-3 h-3 text-gray-400" /></div>
           <div className="flex items-center justify-between border-b border-gray-200 pb-2"><span className="text-xs">Drink</span><ChevronRight className="w-3 h-3 text-gray-400" /></div>
        </div>
      </div>
    )},
    optionB: { pole: 'E', render: () => (
      <div className="p-4 w-full h-full flex flex-col font-sans bg-yellow-400">
        <div className="text-sm font-black uppercase tracking-tight text-yellow-900 bg-white/50 w-full p-2 rounded-xl mb-4 text-center border-b-4 border-yellow-500">🔥 CRAVINGS 🔥</div>
        <div className="flex gap-3 justify-center">
           <div className="w-14 h-16 bg-red-500 rounded-xl shadow-[4px_4px_0_0_#991b1b] flex flex-col items-center justify-center border-2 border-black rotate-2 transition-transform hover:rotate-6">
              <span className="text-2xl drop-shadow-md">🍔</span>
           </div>
           <div className="w-14 h-16 bg-blue-500 rounded-xl shadow-[4px_4px_0_0_#1e3a8a] flex flex-col items-center justify-center border-2 border-black -rotate-2 transition-transform hover:-rotate-6">
              <span className="text-2xl drop-shadow-md">🥤</span>
           </div>
        </div>
      </div>
    )}
  },
  {
    id: 18, dimension: 'ME', type: 'visual',
    scenario: "查看个人财务或数据看板时，你更喜欢哪种视觉表现？",
    optionA: { pole: 'M', render: () => (
      <div className="flex flex-col p-6 bg-white w-full h-full border-t-[8px] border-black">
        <div className="flex justify-between items-center mb-6">
           <div className="text-[10px] text-gray-500 font-mono">BALANCE</div>
           <MoreHorizontal className="w-4 h-4 text-gray-300" />
        </div>
        <div className="text-3xl font-light tracking-tighter text-black">2,400<span className="text-gray-300">.00</span></div>
      </div>
    )},
    optionB: { pole: 'E', render: () => (
      <div className="flex flex-col p-6 bg-[#0f172a] w-full h-full text-white relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-600 rounded-full blur-[40px] opacity-60"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500 rounded-full blur-[40px] opacity-40"></div>
        <div className="text-[10px] font-bold text-fuchsia-300 z-10 font-mono tracking-widest uppercase mb-4 border border-fuchsia-500/30 bg-fuchsia-500/10 self-start px-2 py-1 rounded">Net Worth</div>
        <div className="text-3xl font-black z-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
           <span className="text-lg opacity-80 mr-1">$</span>2,400.00
        </div>
      </div>
    )}
  },
  {
    id: 19, dimension: 'ME', type: 'visual',
    scenario: "当页面没有内容（空状态）时，哪种设计更讨你喜欢？",
    optionA: { pole: 'M', render: () => (
      <div className="flex flex-col items-center justify-center w-full h-full bg-white border border-gray-100">
        <EyeOff className="w-5 h-5 text-gray-300 mb-2" />
        <div className="text-xs text-gray-400 font-medium">No results found.</div>
      </div>
    )},
    optionB: { pole: 'E', render: () => (
      <div className="flex flex-col items-center justify-center w-full h-full bg-indigo-50 border-4 border-dashed border-indigo-200 rounded-xl relative overflow-hidden">
        <div className="text-4xl drop-shadow-lg mb-2 z-10">🕵️‍♂️</div>
        <div className="text-[10px] font-black text-indigo-700 bg-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm border border-indigo-300">It's Empty Here!</div>
        <div className="absolute w-full h-full -top-1/2 left-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-white/60 to-transparent"></div>
      </div>
    )}
  },
  {
    id: 20, dimension: 'ME', type: 'visual',
    scenario: "浏览高端香水品牌商城时，哪种界面调性更吸引你？",
    optionA: { pole: 'M', render: () => (
      <div className="p-6 bg-[#fafafa] w-full h-full flex flex-col items-center justify-center">
         <div className="text-[9px] font-medium tracking-[0.3em] text-gray-400 uppercase mb-4">Essence</div>
         <div className="w-12 h-20 border border-gray-200 bg-white shadow-sm flex items-center justify-center"><div className="w-1 h-8 bg-gray-200"></div></div>
      </div>
    )},
    optionB: { pole: 'E', render: () => (
      <div className="p-6 bg-[#2d1b11] w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[#3a2012] opacity-50 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
         <div className="absolute -left-4 top-1/2 w-16 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
         <div className="text-3xl font-serif text-[#ffe4c4] z-10 italic shadow-xl mb-4 font-light">Noir.</div>
         <div className="text-[8px] text-[#ffe4c4] border border-[#ffe4c4]/40 px-2 py-1 z-10 bg-black/40 backdrop-blur-sm tracking-widest">DISCOVER</div>
      </div>
    )}
  },

  // --- FD: Flat vs Dimensional ---
  {
    id: 21, dimension: 'FD', type: 'text',
    scenario: "当你面对最重要的“主操作按钮”时，你期望它呈现何种质感？",
    optionA: { pole: 'F', text: "带有绝对清晰边界的二维色块，没有任何阴影或高光，与背景完全处于同一平面。" },
    optionB: { pole: 'D', text: "带有柔和的投影、微凸的物理质感，或者像磨砂玻璃一样能透出下层背景。" }
  },
  {
    id: 22, dimension: 'FD', type: 'text',
    scenario: "在使用多窗口重叠的界面时，你认为最佳的层级隔离方式是：",
    optionA: { pole: 'F', text: "通过1像素的硬边框实线或不同区域的实色对比来做最纯粹的二维切分。" },
    optionB: { pole: 'D', text: "利用底层窗口的实时背景模糊和顶层窗口的物理投影来构建Z轴深度关系。" }
  },
  {
    id: 23, dimension: 'FD', type: 'text',
    scenario: "关于界面元素的深度与空间关系，你更认同哪种哲学？",
    optionA: { pole: 'F', text: "数字世界不需要伪造空间。阴影和透视仅仅是对现实的低级模仿，纯扁平最高效。" },
    optionB: { pole: 'D', text: "通过材质和三维阴影构建层级，是对人类现实认知本能的顺应，能极大降低门槛。" }
  },
  {
    id: 24, dimension: 'FD', type: 'text',
    scenario: "如果你要定制一套系统主题，你会倾向于哪种图标风格？",
    optionA: { pole: 'F', text: "纯平面的矢量图形，只有几何线条和色块填充，无任何透视或光泽。" },
    optionB: { pole: 'D', text: "精心渲染的3D黏土风格、果冻风格，或逼真的具有光线反射的玻璃拟物图标。" }
  },
  {
    id: 25, dimension: 'FD', type: 'text',
    scenario: "在浏览弹出的浮动卡片（如通知中心）时，你的视觉倾向是：",
    optionA: { pole: 'F', text: "卡片是不透明的纯色实体，覆盖在内容之上，遮挡关系直接而绝对。" },
    optionB: { pole: 'D', text: "卡片有厚度，甚至采用半透明亚克力材质，能够隐约透射出底层界面的颜色或动态。" }
  },
  {
    id: 26, dimension: 'FD', type: 'visual',
    scenario: "绑定数字钱包信用卡时，你期望卡面呈现怎样的质感？",
    optionA: { pole: 'F', render: () => (
      <div className="flex items-center justify-center p-6 bg-slate-100 w-full h-full">
         <div className="w-48 h-28 bg-emerald-600 border-2 border-black flex flex-col justify-between p-3 text-white font-mono shadow-[6px_6px_0_0_#000] rotate-2 hover:translate-x-[2px] transition-transform">
           <div className="text-[10px] uppercase font-sans font-bold flex justify-between"><span>Bank</span><CreditCard className="w-4 h-4"/></div>
           <div className="text-sm tracking-widest bg-black text-emerald-400 w-max px-1">1234 5678</div>
         </div>
      </div>
    )},
    optionB: { pole: 'D', render: () => (
      <div className="flex items-center justify-center p-6 bg-gradient-to-tr from-indigo-100 to-purple-100 w-full h-full relative overflow-hidden">
         <div className="absolute w-32 h-32 bg-blue-300/40 rounded-full blur-2xl left-0 top-0"></div>
         <div className="absolute w-24 h-24 bg-pink-300/40 rounded-full blur-2xl right-0 bottom-0"></div>
         <div className="w-48 h-28 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] rounded-2xl flex flex-col justify-between p-4 text-slate-800 font-mono z-10 relative overflow-hidden group">
           <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/40 rounded-full blur-md"></div>
           <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5 rounded-2xl"></div>
           <div className="text-[10px] uppercase font-sans font-semibold flex justify-between z-10"><span>Premium</span><Sparkles className="w-3 h-3 text-white fill-white"/></div>
           <div className="text-sm tracking-widest z-10 text-shadow-md relative drop-shadow">1234 5678</div>
         </div>
      </div>
    )}
  },
  {
    id: 27, dimension: 'FD', type: 'visual',
    scenario: "日常使用小键盘或计算器时，你更喜欢按压哪种按键？",
    optionA: { pole: 'F', render: () => (
      <div className="flex items-center justify-center p-6 bg-white w-full h-full border border-gray-200">
         <div className="grid grid-cols-2 gap-px bg-black p-px w-24">
            <div className="bg-gray-100 aspeect-square flex items-center justify-center text-sm font-bold w-12 h-12 hover:bg-gray-200">7</div>
            <div className="bg-gray-100 flex items-center justify-center text-sm font-bold w-12 h-12 hover:bg-gray-200">8</div>
            <div className="bg-gray-100 flex items-center justify-center text-sm font-bold w-12 h-12 hover:bg-gray-200">4</div>
            <div className="bg-gray-100 flex items-center justify-center text-sm font-bold w-12 h-12 hover:bg-gray-200">5</div>
         </div>
      </div>
    )},
    optionB: { pole: 'D', render: () => (
      <div className="flex items-center justify-center p-6 bg-[#e0e5ec] w-full h-full">
         <div className="grid grid-cols-2 gap-4 w-28">
            <div className="bg-[#e0e5ec] rounded-2xl flex items-center justify-center text-sm font-bold text-gray-500 w-12 h-12 shadow-[5px_5px_10px_#b8bcc2,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#b8bcc2,inset_-5px_-5px_10px_#ffffff] transition-shadow duration-300">7</div>
            <div className="bg-[#e0e5ec] rounded-2xl flex items-center justify-center text-sm font-bold text-gray-500 w-12 h-12 shadow-[5px_5px_10px_#b8bcc2,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#b8bcc2,inset_-5px_-5px_10px_#ffffff] transition-shadow duration-300">8</div>
            <div className="bg-[#e0e5ec] rounded-2xl flex items-center justify-center text-sm font-bold text-gray-500 w-12 h-12 shadow-[5px_5px_10px_#b8bcc2,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#b8bcc2,inset_-5px_-5px_10px_#ffffff] transition-shadow duration-300">4</div>
            <div className="bg-[#e0e5ec] rounded-2xl flex items-center justify-center text-sm font-bold text-gray-500 w-12 h-12 shadow-[5px_5px_10px_#b8bcc2,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#b8bcc2,inset_-5px_-5px_10px_#ffffff] transition-shadow duration-300">5</div>
         </div>
      </div>
    )}
  },
  {
    id: 28, dimension: 'FD', type: 'visual',
    scenario: "控制智能家居的灯光亮度时，哪种滑块组件更让你想去拨动？",
    optionA: { pole: 'F', render: () => (
      <div className="flex items-center justify-center p-6 bg-white w-full h-full relative">
         <div className="w-3/4 h-px bg-black relative">
            <div className="w-5 h-5 bg-black absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-[2px]">
               <div className="w-3 h-px bg-white"></div>
               <div className="w-3 h-px bg-white"></div>
            </div>
         </div>
      </div>
    )},
    optionB: { pole: 'D', render: () => (
      <div className="flex items-center justify-center p-6 bg-slate-50 w-full h-full relative">
         <div className="w-3/4 h-6 bg-gray-200 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-gray-300/50 relative overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 w-2/3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]"></div>
         </div>
         <div className="w-8 h-8 rounded-full bg-white absolute top-1/2 left-[60%] -translate-y-1/2 shadow-[0_4px_10px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(0,0,0,0.05),inset_0_2px_4px_#fff] border border-gray-100 flex items-center justify-center z-10 cursor-pointer">
            <div className="w-4 h-4 bg-gray-100 rounded-full shadow-inner border border-gray-200/50"></div>
         </div>
      </div>
    )}
  },
  {
    id: 29, dimension: 'FD', type: 'visual',
    scenario: "点击展开下拉菜单时，你希望它具有怎样的视觉深度？",
    optionA: { pole: 'F', render: () => (
      <div className="p-6 bg-white w-full h-full relative flex items-start justify-center">
         <div className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold text-xs bg-white z-20">Menu <ChevronDown className="w-3 h-3"/></div>
         <div className="absolute top-[3.5rem] bg-white border-2 border-black p-2 text-xs w-32 z-10 flex flex-col shadow-[4px_4px_0_0_#000]">
            <div className="bg-black text-white p-2 font-bold">Option 1</div>
            <div className="p-2 hover:bg-gray-100 font-bold border-t border-gray-200">Option 2</div>
         </div>
      </div>
    )},
    optionB: { pole: 'D', render: () => (
      <div className="p-6 bg-[#f3f4f6] w-full h-full relative flex flex-col items-center pt-8">
         <div className="absolute w-20 h-20 bg-pink-200/60 rounded-full blur-xl top-6 left-1/4"></div>
         <div className="flex items-center gap-2 bg-white/80 backdrop-blur shadow-sm border border-white rounded-lg px-4 py-2 text-xs font-medium text-gray-700 z-20 hover:shadow-md transition-shadow relative">Menu <ChevronDown className="w-3 h-3"/></div>
         <div className="absolute top-[4rem] bg-white/70 backdrop-blur-xl border border-white p-1 text-xs w-32 z-10 flex flex-col rounded-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.5)_inset]">
            <div className="p-2 rounded-lg bg-white/80 shadow-sm border border-white/60 text-gray-800 font-medium">Option 1</div>
            <div className="p-2 text-gray-600 font-medium hover:bg-white/40 rounded-lg">Option 2</div>
         </div>
      </div>
    )}
  },
  {
    id: 30, dimension: 'FD', type: 'visual',
    scenario: "分析数据报表时，你更倾向于看哪种表现形式的柱状图？",
    optionA: { pole: 'F', render: () => (
      <div className="flex items-end justify-center p-6 bg-white w-full h-full border-b-2 border-black gap-2 pt-10">
         <div className="w-8 h-[40%] bg-black"></div>
         <div className="w-8 h-[80%] bg-black"></div>
         <div className="w-8 h-[60%] bg-black"></div>
      </div>
    )},
    optionB: { pole: 'D', render: () => (
      <div className="flex items-end justify-center p-6 bg-slate-50 w-full h-full gap-4 pt-4 border-b border-gray-200 shadow-[inset_0_-10px_10px_-10px_rgba(0,0,0,0.1)] relative" style={{ perspective: '800px' }}>
         <div className="w-8 h-[50%] bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_2px_0_4px_rgba(255,255,255,0.3)] transform rotateX-12 z-30 flex justify-center before:content-[''] before:absolute before:top-0 before:w-full before:h-2 before:bg-cyan-300 before:skew-x-[30deg] before:origin-bottom-left before:rounded-sm"></div>
         <div className="w-8 h-[80%] bg-gradient-to-t from-indigo-600 to-blue-500 rounded-t shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_2px_0_4px_rgba(255,255,255,0.3)] transform rotateX-12 z-20 flex justify-center before:content-[''] before:absolute before:top-0 before:w-full before:h-2 before:bg-blue-400 before:skew-x-[30deg] before:origin-bottom-left before:rounded-sm" style={{ transform: 'translateZ(-10px)' }}></div>
         <div className="w-8 h-[60%] bg-gradient-to-t from-purple-600 to-indigo-400 rounded-t shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_2px_0_4px_rgba(255,255,255,0.3)] transform rotateX-12 z-10 flex justify-center before:content-[''] before:absolute before:top-0 before:w-full before:h-2 before:bg-indigo-300 before:skew-x-[30deg] before:origin-bottom-left before:rounded-sm" style={{ transform: 'translateZ(-20px)' }}></div>
      </div>
    )}
  },

  // --- TK: Tranquil vs Kinetic ---
  {
    id: 31, dimension: 'TK', type: 'text',
    scenario: "在电商APP中点击“确认购买”后，最满意的系统反馈是：",
    optionA: { pole: 'T', text: "按钮文字瞬间变为“成功”，或画面立即切换，不使用形状变形或进度动画拖延时间以保证最高效。" },
    optionB: { pole: 'K', text: "按钮逐渐收缩圆滑化作进度动画，随后平滑扩展弹跳出成功的对号，用丰富的微动效安抚等待时间。" }
  },
  {
    id: 32, dimension: 'TK', type: 'text',
    scenario: "关于页面之间的跳转过渡，你通常的观点是：",
    optionA: { pole: 'T', text: "不要用复杂的滑动或遮罩展开效果，宁愿瞬间硬切，哪怕中间有零点几秒的白屏，也不要花哨动画。" },
    optionB: { pole: 'K', text: "非常享受丝滑的页面滑入、缩放以及共享元素无缝过渡等效果，这让我感觉整个系统是一个有机的整体。" }
  },
  {
    id: 33, dimension: 'TK', type: 'text',
    scenario: "阅读长文章滚动页面时，期望顶部导航栏如何表现？",
    optionA: { pole: 'T', text: "完全静止，或者直接随页面滚出视野，不要做任何多余的形状改变、模糊或透明度渐变。" },
    optionB: { pole: 'K', text: "根据滚动方向平滑收缩或展开，背景产生毛玻璃渐变以响应滚动进度，标题随之缩放。" }
  },
  {
    id: 34, dimension: 'TK', type: 'text',
    scenario: "遇到输入错误（如“密码错误”）时，你倾向于：",
    optionA: { pole: 'T', text: "文本框下方瞬间出现红色的静态文字提示，直接高效且不干扰注意力。" },
    optionB: { pole: 'K', text: "文本框本身产生模拟物理阻力的左右震动动画效果，提示红字随抖动滑入视野以吸引防呆警示。" }
  },
  {
    id: 35, dimension: 'TK', type: 'text',
    scenario: "当网络加载未完成导致内容无法瞬间显示时，更愿意看到：",
    optionA: { pole: 'T', text: "一个普通的静态“加载中”文本或最基本的转圈骨架，界面安静。" },
    optionB: { pole: 'K', text: "具有连续光波闪烁效果的精致骨架屏，或充满趣味与弹性的品牌定制加载动效以消磨无聊感。" }
  },
  {
    id: 36, dimension: 'TK', type: 'visual',
    scenario: "将鼠标悬停在按钮上（可交互试试），你喜欢哪种反馈效果？",
    optionA: { pole: 'T', render: () => (
      <div className="flex items-center justify-center p-6 bg-white w-full h-full group">
          <div className="px-6 py-3 bg-gray-100 border border-black text-sm font-bold group-hover:bg-black group-hover:text-white transition-none cursor-pointer">Hover Trigger</div>
      </div>
    )},
    optionB: { pole: 'K', render: () => (
      <div className="flex items-center justify-center p-6 bg-slate-50 w-full h-full group">
          <div className="px-6 py-3 bg-white shadow-sm border border-gray-200 rounded-xl text-sm font-bold text-gray-700 cursor-pointer 
                          group-hover:scale-[1.15] group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] 
                          group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 group-hover:text-white group-hover:border-transparent
                          transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden">
              <span className="relative z-10 transition-colors duration-300">Hover Trigger</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[progress_1s_ease-in-out_infinite] skew-x-12"></div>
          </div>
      </div>
    )}
  },
  {
    id: 37, dimension: 'TK', type: 'visual',
    scenario: "在不同底部标签之间切换时，你更喜欢哪种过渡动效？",
    optionA: { pole: 'T', render: () => (
      <div className="flex flex-col items-center justify-end p-4 bg-gray-50 w-full h-full group cursor-pointer">
          <div className="flex gap-8 border-t-2 border-transparent w-full justify-center pt-3 mt-auto">
             <div className="flex items-center justify-center border-t-2 border-black w-10 -mt-[14px] transition-none group-hover:border-transparent"><Home className="w-5 h-5"/></div>
             <div className="flex items-center justify-center border-t-2 border-transparent text-gray-400 w-10 -mt-[14px] transition-none group-hover:border-black group-hover:text-black"><User className="w-5 h-5"/></div>
          </div>
      </div>
    )},
    optionB: { pole: 'K', render: () => (
      <div className="flex flex-col items-center justify-end p-4 bg-white w-full h-full group cursor-pointer relative overflow-hidden">
          <div className="flex gap-12 w-full justify-center pt-3 relative z-10 mt-auto">
             <div className="flex flex-col items-center gap-1 transition-all duration-500 group-hover:opacity-40 group-hover:scale-90 group-hover:translate-y-2"><Home className="w-5 h-5  text-indigo-600"/><div className="w-1.5 h-1.5 rounded-full bg-indigo-600 transition-opacity duration-300 group-hover:opacity-0"></div></div>
             <div className="flex flex-col items-center gap-1 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] text-gray-400 opacity-40 scale-90 translate-y-2 group-hover:opacity-100 group-hover:scale-110 group-hover:translate-y-0 group-hover:text-indigo-600"><User className="w-5 h-5"/>
               <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100 scale-0 group-hover:scale-100"></div>
             </div>
          </div>
          <div className="absolute top-0 w-full h-full bg-indigo-50/50 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-700 ease-in-out pointer-events-none rounded-t-3xl"></div>
      </div>
    )}
  },
  {
    id: 38, dimension: 'TK', type: 'visual',
    scenario: "当你点赞或收藏时，你更期待看到怎样的微交互反馈？",
    optionA: { pole: 'T', render: () => (
      <div className="flex items-center justify-center p-6 bg-white w-full h-full group">
          <Heart className="w-10 h-10 text-gray-300 group-hover:text-red-600 group-hover:fill-red-600 transition-none" strokeWidth={1.5} />
      </div>
    )},
    optionB: { pole: 'K', render: () => (
      <div className="flex items-center justify-center p-6 bg-white w-full h-full group relative">
          <div className="absolute w-16 h-16 bg-pink-100 rounded-full scale-0 opacity-100 group-hover:scale-[2] group-hover:opacity-0 transition-all duration-700 ease-out z-0"></div>
          <Heart className="w-10 h-10 text-gray-300 group-hover:text-pink-500 group-hover:fill-pink-500 group-hover:scale-[1.4] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10" strokeWidth={2} />
          {/* Simulated particles jumping out strictly visible on hover via scale animation */}
          <div className="absolute top-[40%] left-1/2 w-1.5 h-1.5 rounded-full bg-red-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 group-hover:-translate-x-6 transition-all duration-500"></div>
          <div className="absolute top-[40%] left-1/2 w-2 h-2 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 group-hover:translate-x-6 transition-all duration-500 delay-75"></div>
      </div>
    )}
  },
  {
    id: 39, dimension: 'TK', type: 'visual',
    scenario: "在列表中滑动删除一项内容时，哪种动画节奏更让你满意？",
    optionA: { pole: 'T', render: () => (
      <div className="flex flex-col p-6 bg-gray-100 w-full h-full group gap-[2px]">
          <div className="bg-white p-3 text-sm font-semibold border-l-4 border-red-500 flex justify-between shadow-sm group-hover:hidden transition-none"><span>Target Item</span> <X className="w-4 h-4 text-red-500"/></div>
          <div className="bg-white p-3 text-sm font-semibold border-l-4 border-gray-300 shadow-sm transition-none group-hover:-translate-y-[46px]">Remaining Item</div>
      </div>
    )},
    optionB: { pole: 'K', render: () => (
      <div className="flex flex-col p-6 bg-slate-50 w-full h-full group gap-2 overflow-hidden">
          <div className="bg-white p-3 text-sm font-semibold rounded-xl flex justify-between shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-red-100 
                          group-hover:-translate-x-full group-hover:opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:h-0 group-hover:p-0 group-hover:mt-0 group-hover:border-0 overflow-hidden relative">
             <span className="relative z-10 text-red-600">Target Item</span>
             <Trash2 className="w-4 h-4 text-red-400 relative z-10"/>
             <div className="absolute inset-0 bg-red-50 w-full h-full origin-left group-hover:scale-x-0 transition-transform duration-500 delay-100"></div>
          </div>
          <div className="bg-white p-3 text-sm font-medium rounded-xl shadow-[0_2px_5px_rgba(0,0,0,0.02)] border border-gray-100 
                          transition-all duration-700 delay-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[4px]">Remaining Item</div>
      </div>
    )}
  },
  {
    id: 40, dimension: 'TK', type: 'visual',
    scenario: "等待一段较长的加载过程时，哪种进度条表现更让你感到放松？",
    optionA: { pole: 'T', render: () => (
      <div className="flex items-center justify-center p-6 bg-white w-full h-full group border border-gray-100">
          <div className="w-full h-4 border-2 border-black p-0.5 bg-gray-50 flex items-center">
             <div className="h-full bg-black w-[20%] group-hover:w-[100%] transition-none"></div>
          </div>
      </div>
    )},
    optionB: { pole: 'K', render: () => (
      <div className="flex items-center justify-center p-6 bg-white w-full h-full group">
          <div className="w-full h-6 bg-slate-100 rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] relative p-1">
             <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[20%] group-hover:w-full transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-full relative overflow-hidden shadow-sm">
                {/* Simulated light sweep across the bar continuously */}
                <div className="absolute top-0 left-0 w-[50px] h-full bg-white/30 skew-x-[45deg] animate-[progress_1.5s_ease-in-out_infinite]"></div>
             </div>
          </div>
      </div>
    )}
  }
];
