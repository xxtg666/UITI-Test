import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions, Dimension, Pole, Question } from './data/questions';
import { uitiResults } from './data/results';
import { 
  ChevronRight, ArrowLeft, RefreshCw, Layers, Github, BookOpen
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Answers = Record<number, Pole>;

export default function App() {
  const [answers, setAnswers] = useState<Answers>(() => {
    try {
      const saved = localStorage.getItem('uiti-answers');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  
  type ViewState = 'home'|'quiz'|'result'|'types'|'type-detail';
  const [currentView, setCurrentView] = useState<ViewState>(() => {
    return (localStorage.getItem('uiti-view') as ViewState) || 'home';
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem('uiti-index');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [viewedType, setViewedType] = useState<string | null>(() => {
    return localStorage.getItem('uiti-viewed-type') || null;
  });

  useEffect(() => {
    localStorage.setItem('uiti-answers', JSON.stringify(answers));
    localStorage.setItem('uiti-view', currentView);
    localStorage.setItem('uiti-index', currentIndex.toString());
    if (viewedType) localStorage.setItem('uiti-viewed-type', viewedType);
  }, [answers, currentView, currentIndex, viewedType]);

  // Compute accumulated scores from answers
  const rawScores = useMemo(() => {
    const calcScore = (dim: Dimension, pole: Pole) => {
      const relevantAnswers = questions.filter(q => q.dimension === dim).map(q => answers[q.id]).filter(Boolean);
      if (relevantAnswers.length === 0) return 0.5;
      return relevantAnswers.filter(a => a === pole).length / relevantAnswers.length;
    };
    return {
      o: calcScore('SO', 'O'), // 0 = S, 1 = O
      e: calcScore('ME', 'E'), // 0 = M, 1 = E
      d: calcScore('FD', 'D'), // 0 = F, 1 = D
      k: calcScore('TK', 'K'), // 0 = T, 1 = K
    };
  }, [answers]);

  const getResultCodeRaw = () => {
    const s1 = rawScores.o > 0.5 ? 'O' : 'S';
    const s2 = rawScores.e > 0.5 ? 'E' : 'M';
    const s3 = rawScores.d > 0.5 ? 'D' : 'F';
    const s4 = rawScores.k > 0.5 ? 'K' : 'T';
    return `${s1}${s2}${s3}${s4}`;
  };

  // Switch display scores based on current view to perfectly match the personality
  const displayScores = useMemo(() => {
    const getScoresFromCode = (code: string) => ({
      o: code[0] === 'O' ? 1 : 0,
      e: code[1] === 'E' ? 1 : 0,
      d: code[2] === 'D' ? 1 : 0,
      k: code[3] === 'K' ? 1 : 0,
    });
    
    if (currentView === 'result') {
      return getScoresFromCode(getResultCodeRaw());
    }
    if (currentView === 'type-detail' && viewedType) {
      return getScoresFromCode(viewedType);
    }
    return rawScores;
  }, [currentView, viewedType, rawScores]);

  // Deep Dynamic Styling Map
  const dynamicStyles = useMemo(() => {
    const { o, e, d, k } = displayScores;

    const quad = e < 0.5 ? (d < 0.5 ? 'MF' : 'MD') : (d < 0.5 ? 'EF' : 'ED');
    let uiBgColor, uiBg, cardBg, textColor, borderColor, shadow, font, blur;

    const rInt = o * (quad === 'EF' ? 24 : 48); 
    let radius = `${rInt}px`;
    
    // Extreme Morphing when O is high and E is high
    if (o > 0.6 && e >= 0.5) radius = `${rInt}px ${rInt*2}px ${rInt*1.5}px ${rInt*0.8}px`;

    font = e > 0.5 ? '"Playfair Display", serif' : (e < 0.5 && d < 0.5 ? '"JetBrains Mono", Courier, monospace' : '"Inter", sans-serif');
    blur = 'none';

    // Theme hue based on organic and kinetic traits
    const h = Math.floor(o * 100 + k * 80);

    if (quad === 'MF') { // Brutalist Minimal (e.g. SMFT)
      uiBgColor = '#ffffff';
      uiBg = '#ffffff';
      cardBg = '#ffffff';
      textColor = '#000000';
      borderColor = 'rgba(0,0,0,1)';
      shadow = o < 0.5 ? `8px 8px 0 0 #000000` : `12px 12px 0 0 rgba(0,0,0,0.15)`; 
    } else if (quad === 'MD') { // Neumorphism Clean (e.g. SMDT)
      uiBgColor = '#f1f5f9';
      uiBg = '#f1f5f9';
      cardBg = '#ffffff';
      textColor = '#0f172a';
      borderColor = 'rgba(255,255,255,0.7)';
      shadow = `0 ${d*20+10}px ${d*40+20}px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.02)`;
    } else if (quad === 'EF') { // Neo-Brutalism Pop-Art (e.g. OEFT)
      uiBgColor = `hsl(${h}, 90%, 85%)`;
      uiBg = `linear-gradient(135deg, hsl(${h}, 100%, 80%) 0%, hsl(${(h+40)%360}, 100%, 85%) 100%)`;
      cardBg = `hsl(${(h+180)%360}, 60%, 95%)`;
      textColor = '#020617';
      borderColor = '#020617';
      shadow = `${e*10+4}px ${e*10+4}px 0 0 #020617`;
    } else { // Glassmorphism Cyber/Aurora (e.g. OEDK)
      uiBgColor = '#0b0f19';
      uiBg = `radial-gradient(circle at 100% 0%, hsl(${h}, 80%, 20%), hsl(${(h+80)%360}, 90%, 10%))`;
      cardBg = 'rgba(255, 255, 255, 0.05)';
      textColor = '#f8fafc';
      borderColor = 'rgba(255,255,255,0.15)';
      shadow = `0 ${d*30}px ${d*60}px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.2)`;
      blur = 'blur(20px)';
    }

    const t = 0.1 + k * 0.9;
    const transition = `all ${t}s ${k > 0.5 ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-out'}`;

    return {
      '--ui-radius': radius,
      '--ui-border': `2px solid ${borderColor}`,
      '--ui-bg': uiBg,
      '--ui-bg-color': uiBgColor,
      '--ui-card-bg': cardBg,
      '--ui-color': textColor,
      '--ui-color-muted': e > 0.5 && d > 0.5 ? '#94a3b8' : '#64748b',
      '--ui-shadow': shadow,
      '--ui-blur': blur,
      '--ui-font': font,
      '--ui-transition': transition,
    } as React.CSSProperties;
  }, [displayScores]);

  const handleAnswer = (pole: Pole) => {
    setAnswers(prev => ({ ...prev, [questions[currentIndex].id]: pole }));
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentView('result');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const restartText = Object.keys(answers).length > 0 ? "继续测试 (Resume)" : "开始测试";

  const getResultCode = () => {
    return getResultCodeRaw();
  };

  const renderTraitBars = () => {
    // Show actual real percentages in result view to reflect the exact choices.
    // Use the polarized extreme scores only when previewing from the types directory.
    const scores = currentView === 'result' ? rawScores : displayScores;
    const S = Math.round((1 - scores.o) * 100);
    const O = Math.round(scores.o * 100);
    const M = Math.round((1 - scores.e) * 100);
    const E = Math.round(scores.e * 100);
    const F = Math.round((1 - scores.d) * 100);
    const D = Math.round(scores.d * 100);
    const T = Math.round((1 - scores.k) * 100);
    const K = Math.round(scores.k * 100);

    const renderBar = (lblL: string, symL: string, valL: number, valR: number, symR: string, lblR: string) => (
      <div className="flex flex-col w-full text-xs font-bold mb-5">
         <div className="flex justify-between mb-2 uppercase tracking-widest opacity-80" style={{fontFamily: '"Inter", sans-serif'}}>
            <span>{symL} - {lblL}</span>
            <span>{lblR} - {symR}</span>
         </div>
         <div className="w-full h-5 rounded-full overflow-hidden flex relative" style={{ backgroundColor: dynamicStyles['--ui-color'], opacity: 0.1 }}></div>
         <div className="w-full h-5 rounded-full overflow-hidden flex relative -mt-5">
            <div className="h-full flex items-center px-2 text-[10px] transition-all duration-1000" style={{ width: `${valL}%`, backgroundColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-bg-color'], justifyContent: 'flex-start' }}>
               {valL >= 10 && `${valL}%`}
            </div>
            <div className="h-full flex items-center px-2 text-[10px] transition-all duration-1000" style={{ width: `${valR}%`, backgroundColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-bg-color'], justifyContent: 'flex-end' }}>
               {valR >= 10 && `${valR}%`}
            </div>
         </div>
      </div>
    );

    return (
      <div className="w-full max-w-xl mx-auto my-12 p-6 md:p-8 rounded-3xl" style={{ backgroundColor: 'var(--ui-card-bg)', border: 'var(--ui-border)', backdropFilter: 'var(--ui-blur)' }}>
         {renderBar('结构', 'S', S, O, 'O', '有机')}
         {renderBar('极简', 'M', M, E, 'E', '表现')}
         {renderBar('扁平', 'F', F, D, 'D', '立体')}
         {renderBar('安静', 'T', T, K, 'K', '动感')}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative transition-all overflow-hidden" style={{ ...dynamicStyles, background: dynamicStyles['--ui-bg'], color: dynamicStyles['--ui-color'], fontFamily: dynamicStyles['--ui-font'] } as React.CSSProperties}>
      {/* Morphing overlay behind everything to smooth dark/light transitions */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-1000 z-0" style={{ background: dynamicStyles['--ui-bg'] }} />

      <header className="w-full flex justify-between items-center p-6 relative z-50">
        <button onClick={() => setCurrentView('home')} className="font-bold tracking-widest uppercase text-sm hover:opacity-70 transition-opacity">UITI Test</button>
        <div className="flex gap-4 items-center">
           {currentView !== 'types' && (
             <button onClick={() => setCurrentView('types')} className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity">
               <Layers className="w-4 h-4"/> 16款人格
             </button>
           )}
           <a href="https://github.com/your-username/uiti-assessment" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity">
              <Github className="w-4 h-4" /> GitHub
           </a>
        </div>
      </header>

      <div className="flex-1 flex flex-col w-full relative z-10">
      <AnimatePresence mode="wait">
        
        {/* HOMEPAGE */}
        {currentView === 'home' && (
           <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="m-auto max-w-3xl text-center px-6">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6" style={{ transition: 'var(--ui-transition)' }}>用户界面类型指标</h1>
              <h2 className="text-2xl md:text-3xl opacity-80 mb-8 font-serif italic">The UITI Assessment</h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12 opacity-80" style={{ fontFamily: '"Inter", sans-serif' }}>
                 发现你的数字美学人格碎片。每一次偏好选择，界面的外观、材质、动态和排版都将实时发生<b>形态演变</b>，直至呈现出你潜意识中最真实的UI世界。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button onClick={() => setCurrentView('quiz')} className="px-10 py-4 font-bold text-lg rounded-full flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all" style={{ backgroundColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-bg-color'] }}>
                    {restartText} <ChevronRight className="w-5 h-5"/>
                 </button>
                 {Object.keys(answers).length > 0 && (
                   <button onClick={() => { setAnswers({}); setCurrentIndex(0); }} className="px-6 py-4 font-bold text-sm rounded-full flex items-center gap-2 hover:opacity-100 transition-colors opacity-70" style={{ backgroundColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-bg-color'] }}>
                      <RefreshCw className="w-4 h-4"/> 重新开始
                   </button>
                 )}
              </div>
           </motion.div>
        )}

        {/* QUIZ VIEW */}
        {currentView === 'quiz' && (
           <motion.div key={`quiz-${currentIndex}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20, transition: {duration: 0.1} }} className="w-full max-w-5xl mx-auto flex flex-col px-6 pb-12 mt-4 md:mt-12 flex-1">
              <div className="flex justify-between items-center mb-8 sm:mb-16">
                 <button onClick={handlePrev} disabled={currentIndex === 0} className="flex items-center gap-2 font-bold hover:opacity-70 disabled:opacity-30 transition-opacity">
                    <ArrowLeft className="w-5 h-5" /> 上一题 <span className="hidden sm:inline"> (Prev)</span>
                 </button>
                 <div className="flex flex-col items-end">
                    <div className="text-sm font-bold tracking-widest font-mono mb-2">{currentIndex + 1} / 40</div>
                    <div className="w-32 h-1 bg-current/20 overflow-hidden" style={{ borderRadius: 'var(--ui-radius)' }}>
                       <div className="h-full bg-current transition-all duration-300" style={{ width: `${((currentIndex+1)/40)*100}%` }}></div>
                    </div>
                 </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-16 text-center leading-tight max-w-4xl mx-auto" style={{ transition: 'var(--ui-transition)' }}>
                {questions[currentIndex].scenario}
              </h2>

              <div className={cn("grid gap-6 flex-1 items-stretch", questions[currentIndex].type === 'visual' ? 'lg:grid-cols-2 lg:h-[420px]' : 'lg:grid-cols-2 lg:h-auto')}>
                 <OptionCard pole={questions[currentIndex].optionA.pole} opt={questions[currentIndex].optionA} type={questions[currentIndex].type} onClick={() => handleAnswer(questions[currentIndex].optionA.pole)} />
                 <OptionCard pole={questions[currentIndex].optionB.pole} opt={questions[currentIndex].optionB} type={questions[currentIndex].type} onClick={() => handleAnswer(questions[currentIndex].optionB.pole)} />
              </div>
           </motion.div>
        )}

        {/* RESULT VIEW */}
        {currentView === 'result' && (
           <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="m-auto max-w-4xl w-full px-6">
              <div className="p-8 md:p-16 flex flex-col items-center text-center overflow-hidden relative" style={{ backgroundColor: 'var(--ui-card-bg)', border: 'var(--ui-border)', borderRadius: 'var(--ui-radius)', boxShadow: 'var(--ui-shadow)', backdropFilter: 'var(--ui-blur)' }}>
                 <div className="absolute top-0 left-0 w-full h-3" style={{ background: 'linear-gradient(90deg, #ff007f, #7928ca, #00d4ff)' }}></div>
                 <h3 className="text-xs uppercase tracking-[0.4em] font-bold opacity-60 mb-8 mt-4">您的核心 UITI 美学代码</h3>
                 <h1 className="text-[5rem] md:text-[8rem] font-black mb-2 leading-none tracking-tighter" style={{ fontFamily: 'var(--ui-font)' }}>
                    {getResultCode()}
                 </h1>
                 <h2 className="text-2xl md:text-3xl font-serif italic font-bold opacity-90 mb-8">{uitiResults[getResultCode()]?.name}</h2>
                 
                 <div className="w-16 h-1 opacity-20 bg-current mb-8"></div>
                 
                 <p className="text-lg md:text-xl leading-relaxed max-w-2xl opacity-90" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {uitiResults[getResultCode()]?.description}
                 </p>

                 {renderTraitBars()}

                 <div className="p-6 rounded-2xl w-full max-w-2xl mb-12 border border-current/10" style={{ backgroundColor: 'rgba(128,128,128,0.05)' }}>
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-3">最佳适用场景与案例</h4>
                    <p className="font-medium opacity-90">{uitiResults[getResultCode()]?.examples}</p>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button onClick={() => { setAnswers({}); setCurrentIndex(0); setCurrentView('home'); }} className="px-8 py-4 font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all" style={{ backgroundColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-bg-color'] }}>
                       <RefreshCw className="w-4 h-4"/> 重新测试
                    </button>
                    <button onClick={() => setCurrentView('types')} className="px-8 py-4 border-2 outline-none font-bold rounded-full flex items-center justify-center gap-2 hover:opacity-70 transition-colors" style={{ borderColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-color'] }}>
                       <BookOpen className="w-4 h-4"/> 浏览16种人格
                    </button>
                 </div>
              </div>
           </motion.div>
        )}

        {/* 16 TYPES VIEW */}
        {currentView === 'types' && (
           <motion.div key="types" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto w-full px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                 <button onClick={() => setCurrentView('home')} className="flex items-center gap-2 font-bold hover:opacity-70 transition-opacity">
                    <ArrowLeft className="w-5 h-5"/> 返回
                 </button>
                 <h1 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ fontFamily: 'var(--ui-font)' }}>16 款界面美学人格</h1>
                 <button onClick={() => setCurrentView('quiz')} className="px-6 py-2 font-bold rounded-full hover:scale-105 transition-transform hidden md:block" style={{ backgroundColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-bg-color'] }}>
                    {restartText}
                 </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pb-20">
                 {Object.values(uitiResults).map((res) => (
                    <div key={res.code} onClick={() => { setViewedType(res.code); setCurrentView('type-detail'); }} className="flex flex-col p-8 text-center group hover:-translate-y-2 relative overflow-hidden cursor-pointer" style={{ backgroundColor: 'var(--ui-card-bg)', border: 'var(--ui-border)', borderRadius: 'var(--ui-radius)', boxShadow: 'var(--ui-shadow)', backdropFilter: 'var(--ui-blur)', transition: 'var(--ui-transition)' }}>
                       <div className="absolute top-0 left-0 w-full h-1 opacity-10 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: dynamicStyles['--ui-color'] }}></div>
                       <h2 className="text-4xl font-black mb-2 tracking-tighter" style={{ fontFamily: 'var(--ui-font)' }}>{res.code}</h2>
                       <h3 className="text-base font-serif italic font-bold opacity-90 mb-4">{res.name}</h3>
                       <p className="text-sm opacity-80 mb-6 flex-1 text-left leading-relaxed">{res.description}</p>
                       <div className="text-[10px] uppercase font-bold tracking-widest text-left opacity-50 mb-1">EXAMPLES</div>
                       <div className="text-xs opacity-80 text-left font-medium p-3 rounded-lg w-full mb-4" style={{ backgroundColor: 'rgba(128,128,128,0.1)' }}>{res.examples}</div>
                       <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-sm font-bold gap-1" style={{ color: dynamicStyles['--ui-color'] }}>查看专属美学 <ChevronRight className="w-4 h-4"/></div>
                    </div>
                 ))}
                 <button onClick={() => setCurrentView('quiz')} className="md:hidden mt-6 px-6 py-4 w-full font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center shadow-2xl sticky bottom-6 z-50" style={{ backgroundColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-bg-color'] }}>
                    {restartText} <ChevronRight className="w-5 h-5" />
                 </button>
              </div>
           </motion.div>
        )}

        {/* TYPE DETAIL VIEW */}
        {currentView === 'type-detail' && viewedType && (
           <motion.div key="type-detail" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="m-auto max-w-4xl w-full px-6 pb-20">
              <button 
                onClick={() => setCurrentView('types')} 
                className="flex items-center gap-2 font-bold hover:opacity-70 transition-opacity mb-8"
              >
                <ArrowLeft className="w-5 h-5"/> 返回图鉴
              </button>
              
              <div className="p-8 md:p-16 flex flex-col items-center text-center overflow-hidden relative" style={{ backgroundColor: 'var(--ui-card-bg)', border: 'var(--ui-border)', borderRadius: 'var(--ui-radius)', boxShadow: 'var(--ui-shadow)', backdropFilter: 'var(--ui-blur)' }}>
                 <div className="absolute top-0 left-0 w-full h-3" style={{ background: 'linear-gradient(90deg, #ff007f, #7928ca, #00d4ff)' }}></div>
                 <h3 className="text-xs uppercase tracking-[0.4em] font-bold opacity-60 mb-8 mt-4">UITI 美学代码详解</h3>
                 <h1 className="text-[5rem] md:text-[8rem] font-black mb-2 leading-none tracking-tighter" style={{ fontFamily: 'var(--ui-font)' }}>
                    {viewedType}
                 </h1>
                 <h2 className="text-2xl md:text-3xl font-serif italic font-bold opacity-90 mb-8">{uitiResults[viewedType]?.name}</h2>
                 
                 <div className="w-16 h-1 opacity-20 mb-8" style={{ backgroundColor: dynamicStyles['--ui-color'] }}></div>
                 
                 <p className="text-lg md:text-xl leading-relaxed max-w-2xl opacity-90" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {uitiResults[viewedType]?.description}
                 </p>

                 {renderTraitBars()}

                 <div className="p-6 rounded-2xl w-full max-w-2xl mb-12 border border-current/10" style={{ backgroundColor: 'rgba(128,128,128,0.05)' }}>
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-3">最佳适用场景与案例</h4>
                    <p className="font-medium opacity-90">{uitiResults[viewedType]?.examples}</p>
                 </div>

                 <button onClick={() => setCurrentView('quiz')} className="px-8 py-4 font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all" style={{ backgroundColor: dynamicStyles['--ui-color'], color: dynamicStyles['--ui-bg-color'] }}>
                    {restartText}
                 </button>
              </div>
           </motion.div>
        )}
      </AnimatePresence>
      </div>

    </div>
  );
}

// Reusable Option Card for the Quiz
const OptionCard = ({ onClick, opt, type }: { onClick: () => void, opt: any, type: string }) => {
  return (
     <button 
        onClick={onClick} 
        className="relative flex flex-col items-center justify-center text-left p-6 md:p-10 overflow-hidden group hover:scale-[1.01] focus:scale-[1.01] focus:ring-4 outline-none w-full h-full min-h-[220px]"
        style={{ 
           backgroundColor: 'var(--ui-card-bg)', 
           border: 'var(--ui-border)', 
           borderRadius: 'var(--ui-radius)', 
           boxShadow: 'var(--ui-shadow)', 
           backdropFilter: 'var(--ui-blur)', 
           transition: 'var(--ui-transition)',
           color: 'var(--ui-color)'
        }}
     >
        {type === 'text' ? (
           <p className="text-lg md:text-2xl font-medium leading-relaxed z-10 w-full" style={{ fontFamily: 'var(--ui-font)', transition: 'var(--ui-transition)' }}>
             {opt.text}
           </p>
        ) : (
           <div className="absolute inset-0 w-full h-full md:p-6 p-2 pointer-events-none flex items-center justify-center">
              <div className="w-full h-full relative" style={{ transition: 'none' }}>
                 {/* Visual tests use hardcoded tailwind to guarantee fidelity regardless of global dynamic state */}
                 {opt.render?.()}
              </div>
           </div>
        )}
     </button>
  )
}
