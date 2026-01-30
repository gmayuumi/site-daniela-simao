import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  ArrowUpRight, 
  ChevronRight, 
  Scale, 
  Users, 
  Briefcase, 
  MessageCircle, 
  ExternalLink,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Zap,
  Quote,
  Clock,
  Sparkles
} from 'lucide-react';

const config = {
  colors: {
    primary: '#322A26',
    secondary: '#A68966',
    accent: '#1A1A1A',
    background: '#F9F7F2',
    surface: '#EFECE6',
  },
  fonts: {
    serif: "'Playfair Display', serif",
    sans: "'Inter', sans-serif"
  }
};

const InfiniteBanner = ({ text }) => (
  <div className="overflow-hidden whitespace-nowrap bg-[#322A26] py-4 md:py-6 border-y border-[#A68966]/20 select-none">
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      {[...Array(12)].map((_, i) => (
        <span key={i} className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.8em] text-[#A68966] mx-6 md:mx-12 font-light">
          {text} •
        </span>
      ))}
    </motion.div>
  </div>
);

const Heading = ({ subtitle, title, centered = false, color }) => (
  <div className={`mb-10 md:mb-16 ${centered ? 'text-center mx-auto' : 'text-left'}`}>
    <motion.span 
      initial={{ opacity: 0, letterSpacing: '0.2em' }}
      whileInView={{ opacity: 0.8, letterSpacing: '0.4em' }}
      transition={{ duration: 1.5 }}
      className="text-[8px] md:text-[9px] uppercase text-[#A68966] font-bold block mb-4 md:mb-6"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ fontFamily: config.fonts.serif, color: color || config.colors.primary }} 
      className="text-3xl md:text-5xl lg:text-7xl font-light italic leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

const LocationMap = () => {
  const [activeTab, setActiveTab] = useState('sp');
  const viewports = {
    sp: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.56847427289!2d-46.68972175!3d-23.572338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744e2eb20d5%3A0x63901869e57827e8!2sItaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
    tatui: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.402447146524!2d-47.854897!3d-23.351664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5d9a9f9f9f9f9%3A0x9f9f9f9f9f9f9f9f!2zVGF0dcOtLCBTUA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
  };

  return (
    <div className="w-full h-full min-h-[350px] relative overflow-hidden rounded-sm shadow-2xl border border-[#322A26]/5">
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 flex flex-col space-y-2">
        <button onClick={() => setActiveTab('sp')} className={`px-4 py-2 md:px-6 md:py-3 text-[8px] uppercase tracking-widest border transition-all duration-500 ${activeTab === 'sp' ? 'bg-[#322A26] text-white' : 'bg-white/90 text-[#322A26] border-white/20 hover:bg-white'}`}>São Paulo</button>
        <button onClick={() => setActiveTab('tatui')} className={`px-4 py-2 md:px-6 md:py-3 text-[8px] uppercase tracking-widest border transition-all duration-500 ${activeTab === 'tatui' ? 'bg-[#322A26] text-white' : 'bg-white/90 text-[#322A26] border-white/20 hover:bg-white'}`}>Tatuí</button>
      </div>
      <iframe src={viewports[activeTab]} className="w-full h-full grayscale opacity-70 contrast-125 brightness-90 saturate-0" loading="lazy"></iframe>
    </div>
  );
};

const HomeView = ({ onNavigate }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <div ref={container} className="flex flex-col bg-[#F9F7F2]">
      <section className="min-h-screen flex items-center px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full -z-10">
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 100]) }} className="w-full h-full relative">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover opacity-50 mix-blend-multiply" alt="Daniela Simão" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F9F7F2]/60 to-[#F9F7F2]"></div>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full pt-20 md:pt-32 pb-12">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8 }} className="max-w-5xl">
            <div className="h-[1px] w-[60px] md:w-[100px] bg-[#A68966] mb-8 md:mb-12"></div>
            <h1 style={{ fontFamily: config.fonts.serif }} className="text-5xl md:text-8xl lg:text-[10rem] text-[#322A26] leading-[1.1] md:leading-[0.85] font-light mb-12 select-none">
              Rigor técnico. <br />
              <span className="italic text-[#A68966]">Identidade</span>.
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0 md:space-x-20">
              <button onClick={() => onNavigate('contact')} className="w-full md:w-auto group relative px-10 py-6 md:px-14 md:py-7 bg-[#322A26] text-[#F9F7F2] text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] overflow-hidden shadow-2xl">
                <motion.div className="absolute inset-0 bg-[#A68966] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></motion.div>
                <span className="relative z-10">Agendar Reunião Privada</span>
              </button>
              <div className="max-w-[320px] border-l border-[#A68966]/30 pl-6 md:pl-8">
                 <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-light text-[#322A26]/60 leading-relaxed italic text-balance">
                   Advocacia boutique estratégica em São Paulo e Tatuí. Foco absoluto em Direito Cível, Família e Trabalhista.
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <InfiniteBanner text="SÃO PAULO • TATUÍ • ESTRATÉGIA • SIGILO • RIGOR • EXCLUSIVIDADE • DANIELA SIMÃO" />

      <section className="py-24 md:py-40 lg:py-60 px-6 bg-white">
         <div className="max-w-4xl mx-auto text-center">
            <Heading subtitle="Propósito" title="A precisão que seu legado exige." centered />
            <p className="text-xl md:text-3xl lg:text-4xl font-serif italic text-[#322A26] font-light leading-relaxed mb-12 md:mb-20">
              "No escritório Daniela Simão, cada caso é uma biografia. Rejeitamos a advocacia de massa para entregar uma estratégia autoral."
            </p>
            <div className="w-px h-16 md:h-24 bg-[#A68966]/20 mx-auto"></div>
         </div>
      </section>

      <section className="py-24 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto w-full">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 border-b border-[#322A26]/10 pb-12">
            <Heading subtitle="Especialidades" title="Áreas de Atuação" />
            <button onClick={() => onNavigate('expertise')} className="mt-4 md:mb-12 flex items-center space-x-4 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#A68966] group">
              <span>Ver Portfólio Completo</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-all" />
            </button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { label: "Direito Cível", Icon: Scale, d: "Proteção de ativos e contratos estratégicos.", num: "I" },
              { label: "Direito de Família", Icon: Users, d: "Sucessões, inventários e gestão humanizada.", num: "II" },
              { label: "Trabalhista", Icon: Briefcase, d: "Consultoria corporativa e defesa de interesses.", num: "III" }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="relative bg-[#EFECE6]/30 p-8 md:p-12 group cursor-pointer border-t border-transparent hover:border-[#A68966] transition-all" onClick={() => onNavigate('expertise')}>
                <span className="text-[10px] text-[#A68966] font-bold mb-8 md:mb-12 block tracking-widest">{item.num}</span>
                <item.Icon size={32} strokeWidth={1} className="text-[#322A26] mb-6 md:mb-8 opacity-60 group-hover:opacity-100" />
                <h3 style={{ fontFamily: config.fonts.serif }} className="text-xl md:text-2xl text-[#322A26] mb-4 md:mb-6 font-light group-hover:italic transition-all">{item.label}</h3>
                <p className="text-xs md:text-sm font-light text-[#322A26]/50 leading-relaxed mb-8 md:mb-12 md:h-16">{item.d}</p>
                <div className="flex items-center space-x-2 text-[8px] md:text-[9px] uppercase tracking-widest text-[#A68966] md:opacity-0 group-hover:opacity-100 transition-all">
                   <span>Saiba Mais</span>
                   <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      <section className="py-24 md:py-40 bg-[#322A26] text-[#F9F7F2] relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-6 md:grid-cols-12 h-full w-full">
               {[...Array(12)].map((_, i) => (
                 <div key={i} className="border-r border-white h-full"></div>
               ))}
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center relative z-10">
            <div className="lg:col-span-6 relative">
               <motion.div initial={{ scale: 1.05, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="aspect-[4/5] overflow-hidden shadow-2xl relative z-10">
                  <img src="https://i.ibb.co/nsQ6Msv0/ceo1.jpg" alt="Daniela Simão" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#322A26]/60 to-transparent"></div>
               </motion.div>
               <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border-b border-r border-[#A68966]/40 z-0"></div>
            </div>
            <div className="lg:col-span-6">
               <Heading subtitle="Fundadora" title="Estratégia jurídica autoral." dark color="#F9F7F2" />
               <p className="text-lg md:text-xl font-light text-[#F9F7F2]/80 leading-relaxed mb-8 md:mb-10 font-serif italic">"O Direito boutique é o equilíbrio entre o rigor da lei e a sensibilidade do contexto humano."</p>
               <p className="text-sm md:text-base font-light text-[#F9F7F2]/60 leading-relaxed mb-10 md:mb-12">Daniela Simão consolidou sua trajetória na intersecção entre o rigor acadêmico e a prática ágil. Sua atuação nas regiões de São Paulo e Tatuí é pautada pela entrega de resultados de alta precisão técnica.</p>
               <button onClick={() => onNavigate('profile')} className="group flex items-center space-x-6 text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#A68966]">
                 <span>Explorar Trajetória</span>
                 <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
               </button>
            </div>
         </div>
      </section>

      <section className="py-32 md:py-48 bg-[#EFECE6] text-[#322A26] relative">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <Quote size={40} className="mx-auto mb-10 md:mb-16 text-[#A68966] opacity-40 md:w-12 md:h-12" strokeWidth={1} />
            <h2 style={{ fontFamily: config.fonts.serif }} className="text-2xl md:text-4xl lg:text-5xl font-light italic leading-tight mb-12 md:mb-16">
               "Não se trata apenas de vencer um processo, trata-se de arquitetar o cenário jurídico ideal para sua prosperidade."
            </h2>
            <div className="w-16 md:w-20 h-px bg-[#A68966] mx-auto opacity-40"></div>
         </div>
      </section>

      <section className="py-24 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto w-full">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-5">
               <Heading subtitle="Presença" title="São Paulo & Tatuí" />
               <p className="text-base md:text-lg font-light text-[#322A26]/70 leading-relaxed mb-10 md:mb-12">Atendimento seletivo em centros empresariais estratégicos e consultoria digital.</p>
               <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center space-x-4 md:space-x-6 group">
                     <div className="w-12 h-12 md:w-14 md:h-14 bg-[#322A26] flex items-center justify-center text-[#A68966] shrink-0">
                        <MapPin size={22} strokeWidth={1} />
                     </div>
                     <div>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#A68966] font-bold mb-1">Capital</p>
                        <p className="text-sm md:text-base font-light opacity-80 uppercase tracking-widest text-[11px] md:text-[12px]">Itaim Bibi — SP</p>
                     </div>
                  </div>
                  <div className="flex items-center space-x-4 md:space-x-6 group">
                     <div className="w-12 h-12 md:w-14 md:h-14 bg-[#322A26] flex items-center justify-center text-[#A68966] shrink-0">
                        <MapPin size={22} strokeWidth={1} />
                     </div>
                     <div>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#A68966] font-bold mb-1">Interior</p>
                        <p className="text-sm md:text-base font-light opacity-80 uppercase tracking-widest text-[11px] md:text-[12px]">Tatuí — SP</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-7 h-[400px] md:h-[500px] lg:h-[600px] relative">
               <LocationMap />
            </div>
         </div>
      </section>

      <section className="py-32 md:py-48 lg:py-60 text-center px-6 bg-[#A68966] text-[#F9F7F2] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
            <img src="https://images.unsplash.com/photo-1450175804616-784425583b16?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Jurídico" />
         </div>
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-4xl mx-auto">
            <Heading subtitle="Contato" title="Proteja o seu futuro agora." centered color="#F9F7F2" />
            <button onClick={() => onNavigate('contact')} className="w-full md:w-auto px-16 py-7 md:px-24 md:py-8 bg-[#322A26] text-[#F9F7F2] text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold hover:bg-[#F9F7F2] hover:text-[#322A26] transition-all duration-700 shadow-2xl">
              Iniciar Conversa Estratégica
            </button>
         </motion.div>
      </section>
    </div>
  );
};

const ContactFormView = () => (
  <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-6 lg:px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
      <div className="lg:col-span-5">
        <Heading subtitle="Contato" title="Inicie sua Consulta." />
        <div className="space-y-10 md:space-y-16 mt-10 md:mt-20">
          <div className="flex items-start space-x-6 md:space-x-8">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#322A26] flex items-center justify-center text-[#A68966] shrink-0">
               <Phone size={22} strokeWidth={1} />
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#A68966] font-bold mb-2 md:mb-4">Directo</p>
              <a href="tel:+5511966020206" className="text-xl md:text-2xl font-light text-[#322A26] tracking-widest hover:text-[#A68966] transition-colors">+55 11 96602-0206</a>
            </div>
          </div>
          <div className="flex items-start space-x-6 md:space-x-8">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#322A26] flex items-center justify-center text-[#A68966] shrink-0">
               <Mail size={22} strokeWidth={1} />
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#A68966] font-bold mb-2 md:mb-4">Canal Oficial</p>
              <p className="text-lg md:text-2xl font-light text-[#322A26] break-all">contato@danielasimao.adv.br</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7 bg-white p-8 md:p-16 lg:p-24 shadow-2xl border border-[#322A26]/5">
        <form className="space-y-10 md:space-y-16" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="flex flex-col">
              <label className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#A68966] font-bold mb-2">Identificação</label>
              <input type="text" placeholder="Nome Completo" className="w-full border-b border-[#322A26]/20 py-2 md:py-4 focus:border-[#A68966] outline-none bg-transparent font-medium text-[10px] md:text-[11px] uppercase tracking-widest text-[#322A26] placeholder:text-[#322A26]/40 transition-all" />
            </div>
            <div className="flex flex-col">
              <label className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#A68966] font-bold mb-2">Comunicação</label>
              <input type="email" placeholder="Email Profissional" className="w-full border-b border-[#322A26]/20 py-2 md:py-4 focus:border-[#A68966] outline-none bg-transparent font-medium text-[10px] md:text-[11px] uppercase tracking-widest text-[#322A26] placeholder:text-[#322A26]/40 transition-all" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#A68966] font-bold mb-2">Resumo da Demanda</label>
            <textarea rows="4" placeholder="Descreva brevemente sua demanda..." className="w-full border-b border-[#322A26]/20 py-2 md:py-4 focus:border-[#A68966] outline-none bg-transparent font-medium text-[10px] md:text-[11px] uppercase tracking-widest text-[#322A26] resize-none placeholder:text-[#322A26]/40 transition-all"></textarea>
          </div>
          <button className="w-full py-6 md:py-8 bg-[#322A26] text-[#F9F7F2] text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold hover:bg-[#A68966] transition-all duration-1000 shadow-xl">Enviar Solicitação Privada</button>
        </form>
      </div>
    </div>
  </section>
);

const Navbar = ({ current, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const menu = [
    { label: 'Início', id: 'home' },
    { label: 'Escritório', id: 'about' },
    { label: 'Atuação', id: 'expertise' },
    { label: 'Perfil', id: 'profile' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[200] transition-all duration-1000 ${scrolled ? 'bg-[#F9F7F2]/95 backdrop-blur-md py-4 md:py-6 shadow-sm' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="cursor-pointer group" onClick={() => onNavigate('home')}>
          <h1 style={{ fontFamily: config.fonts.serif }} className="text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] font-light text-[#322A26] uppercase">Daniela Simão</h1>
          <div className="h-[1px] w-0 group-hover:w-full bg-[#A68966] transition-all"></div>
        </div>
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {menu.map((item) => (
            <button key={item.id} onClick={() => onNavigate(item.id)} className={`text-[8px] lg:text-[9px] uppercase tracking-[0.3em] lg:tracking-[0.4em] font-medium transition-all ${current === item.id ? 'text-[#A68966]' : 'text-[#322A26]/60 hover:text-[#A68966]'}`}>
              {item.label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-[#322A26] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 bg-[#F9F7F2] z-[250] p-8 md:p-12 flex flex-col justify-center space-y-10 md:space-y-12 md:hidden">
            <button className="absolute top-6 right-6 md:top-10 md:right-10 p-2" onClick={() => setIsOpen(false)}><X size={32}/></button>
            {menu.map((item) => (
              <button key={item.id} onClick={() => { onNavigate(item.id); setIsOpen(false); }} className="text-4xl md:text-5xl font-serif italic text-[#322A26] text-left">{item.label}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ onNavigate }) => (
  <footer className="bg-[#322A26] text-[#F9F7F2] pt-24 md:pt-40 pb-16 md:pb-20 px-6 lg:px-12 text-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16 md:mb-32">
        <h1 style={{ fontFamily: config.fonts.serif }} className="text-3xl md:text-8xl font-light tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-12 uppercase text-white">Daniela Simão</h1>
        <div className="flex items-center justify-center space-x-6 md:space-x-12 opacity-40">
           <div className="h-px w-12 md:w-24 bg-white"></div>
           <p className="text-[8px] md:text-[10px] uppercase tracking-[0.8em] md:tracking-[1em] font-bold text-white">Advocacia Autoral</p>
           <div className="h-px w-12 md:w-24 bg-white"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 border-t border-white/10 py-16 md:py-32 w-full text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-light text-white/40">
        <div className="flex flex-col items-center">
           <h4 className="mb-8 md:mb-12 text-[#A68966] font-bold uppercase tracking-widest">Navegação</h4>
           <ul className="space-y-6 md:space-y-8">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Escritório</button></li>
              <li><button onClick={() => onNavigate('expertise')} className="hover:text-white transition-colors">Especialidades</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contato Privado</button></li>
           </ul>
        </div>
        <div className="flex flex-col items-center">
           <h4 className="mb-8 md:mb-12 text-[#A68966] font-bold uppercase tracking-widest">Regiões</h4>
           <ul className="space-y-6 md:space-y-8">
              <li>São Paulo / Capital</li>
              <li>Tatuí / Interior</li>
              <li>Estado de São Paulo</li>
           </ul>
        </div>
        <div className="flex flex-col items-center">
           <h4 className="mb-8 md:mb-12 text-[#A68966] font-bold uppercase tracking-widest">Conectar</h4>
           <div className="flex space-x-12 md:space-x-16 mt-4">
              <Instagram size={20} className="hover:text-white cursor-pointer transition-all" />
              <Linkedin size={20} className="hover:text-white cursor-pointer transition-all" />
              <a href="https://wa.me/5511966020206" target="_blank" rel="noreferrer" className="hover:text-white transition-all"><ExternalLink size={20} /></a>
           </div>
        </div>
      </div>

      <div className="pt-12 md:pt-20 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center text-[7px] md:text-[9px] uppercase tracking-[0.6em] md:tracking-[0.8em] text-white/20">
        <p className="mb-6 md:mb-0">© 2026 Daniela Simão Advocacia. Direitos Reservados.</p>
        <p className="italic font-serif text-[11px] md:text-[14px] normal-case tracking-normal text-[#A68966]/60 font-light italic">"Precisão Jurídica. Sigilo Absoluto."</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen selection:bg-[#A68966]/40 font-sans" style={{ backgroundColor: config.colors.background, color: config.colors.primary }}>
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700&family=Playfair+Display:ital,wght@0,300;0,400;1,300&display=swap');
          body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: #F9F7F2; overflow-x: hidden; }
          ::-webkit-scrollbar { width: 3px; }
          ::-webkit-scrollbar-track { background: #F9F7F2; }
          ::-webkit-scrollbar-thumb { background: #322A2620; }
          input::placeholder, textarea::placeholder { color: #322A26 !important; opacity: 0.4 !important; font-weight: 500; text-transform: uppercase; font-size: 8px; letter-spacing: 0.1em; }
          @media (min-width: 768px) {
            input::placeholder, textarea::placeholder { font-size: 9px; }
          }
      `}</style>

      <Navbar current={view} onNavigate={setView} />
      <main className="overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={view} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            {view === 'home' && <HomeView onNavigate={setView} />}
            {view === 'contact' && <ContactFormView />}
            {(view === 'about' || view === 'expertise' || view === 'profile') && (
              <div className="pt-32 md:pt-60 pb-24 md:pb-40 text-center px-6 md:px-12 max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center items-center">
                <Heading subtitle="Manutenção" title="Conteúdo em revisão editorial." centered />
                <button onClick={() => setView('home')} className="mt-12 md:mt-20 text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#A68966] border-b border-[#A68966] pb-2 transition-all hover:opacity-70">Voltar à Página Principal</button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={setView} />
    </div>
  );
}