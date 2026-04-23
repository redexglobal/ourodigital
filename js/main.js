/* Ouro Digital — main.js v2 Ultra Tech */

/* ── TRANSLATIONS ── */
const T = {
  pt: {
    nav_sol:'Soluções', nav_port:'Portfólio', nav_plans:'Planos',
    nav_about:'Sobre', nav_cta:'Criar meu site agora',
    hero_pill:'Agência Digital · Goiânia · Desde 2018',
    hero_h1:'Sua empresa em <em>primeiro lugar</em> no digital.',
    hero_sub:'Marketing, tráfego pago, sites e automações de IA.<br/>Entrega em até <strong>3 dias úteis</strong>.',
    hero_cta1:'Solicitar avaliação gratuita',
    hero_cta2:'Ver portfólio ↓',
    stat1:'empresas atendidas', stat2_unit:'anos', stat2:'de mercado',
    stat3_unit:'dias', stat3:'prazo de entrega', stat4:'automação com IA',
    sol_label:'O que fazemos',
    sol_h2:'Soluções que <em>geram resultado</em>',
    sol1_h:'Tráfego Pago',
    sol1_p:'Google, Meta e TikTok Ads. Campanhas que colocam sua marca no topo e geram clientes reais.',
    sol2_h:'Sites & Landing Pages',
    sol2_p:'Do painel de preços para TV ao e-commerce de luxo. Entrega em até 3 dias úteis.',
    sol3_h:'Automação de IA',
    sol3_p:'Atendimento inteligente no WhatsApp 24h por dia, 7 dias por semana.',
    sol4_h:'Social Media IA',
    sol4_p:'90 posts mensais no Instagram com inteligência artificial. Presença constante.',
    sol5_h:'Filmmaker & Conteúdo',
    sol5_p:'Equipe criativa para vídeos, fotos e campanhas que convertem.',
    sol6_h:'Software Sob Medida',
    sol6_p:'Sistemas personalizados para qualquer porte — do açougue à clínica odontológica.',
    port_label:'Portfólio', port_h2:'Sites que já <em>entregamos</em>',
    port_sub:'Cada projeto foi construído do zero, com identidade própria, copy, design e integração completa.',
    port1_desc:'Site de e-commerce de luxo para venda de iPhones e Apple Watches banhados a ouro 24 quilates. Empresa brasileira com entrega em todo o país e operação internacional voltada ao mercado árabe.',
    port2_desc:'E-commerce especializado em produtos para crescimento de barba e cabelo. Layout focado em conversão com depoimentos, seção de benefícios e integração direta com WhatsApp para vendas.',
    port3_desc:'Site institucional para ONG comunitária de solidariedade em Goiânia. Foco em captação de voluntários, doações e divulgação das ações sociais da organização para ampliar o alcance da missão.',
    port4_desc:'Site completo para açougue premium com catálogo de cortes nobres, frutaria, verdurão, bebidas e temperos. Sistema de pedidos integrado ao WhatsApp com seleção de produtos e envio automático do carrinho.',
    port5_desc:'Site premium para barbearia masculina com galeria de cortes, serviços disponíveis e agendamento via WhatsApp. Identidade visual forte que transmite profissionalismo e exclusividade ao cliente.',
    port6_desc:'Painel de preços dinâmico desenvolvido para exibição em televisão dentro do supermercado. Atualização de preços em tempo real, categorias customizáveis e layout otimizado para telas grandes.',
    port7_desc:'Site institucional para projeto social em Goiânia. Apresenta a missão, equipe, galeria de eventos e formulário de adesão para voluntários e parceiros que desejam apoiar a causa.',
    port8_desc:'Site institucional de agência de marketing digital com apresentação completa de serviços, portfólio de clientes, depoimentos e captação de leads via WhatsApp. Identidade de marca forte e moderna.',
    port_btn:'Ver site →',
    port_cta_h:'Quer um site como esses<br/>para o seu negócio?',
    port_cta_sub:'Entregamos em até 3 dias úteis. Avaliação gratuita.',
    port_cta_btn:'Criar meu site agora →',
    plans_label:'Investimento',
    plans_h2:'Planos que <em>fazem sua empresa crescer</em>',
    plans_sub:'A partir de R$ 1.000/mês. Tudo incluso.',
    plan_from:'a partir de', plan_month:'/mês', plan_start:'Começar agora',
    plan_best:'Mais escolhido',
    plan1_name:'Essencial', plan1_f1:'90 posts mensais no Instagram',
    plan1_f2:'Gestão com IA automatizada', plan1_f3:'Identidade visual',
    plan1_f4:'Relatório mensal', plan1_f5:'Suporte via WhatsApp',
    plan2_name:'Profissional', plan2_f1:'Tudo do plano Essencial',
    plan2_f2:'Tráfego pago Google + Meta', plan2_f3:'Site profissional incluso',
    plan2_f4:'Automação WhatsApp IA', plan2_f5:'Filmmaker — 1 vídeo/mês',
    plan2_f6:'Entrega em 3 dias úteis',
    plan3_name:'Enterprise', plan3_consult:'sob consulta', plan3_custom:'Personalizado',
    plan3_f1:'Tudo do plano Profissional', plan3_f2:'Software sob medida',
    plan3_f3:'IA 24/7 multicanal', plan3_f4:'Equipe dedicada',
    plan3_f5:'Reuniões estratégicas', plan3_f6:'SLA garantido',
    plan3_talk:'Falar com especialista',
    about_label:'Quem somos',
    about_h2:'A agência que <em>Conecta Riquezas</em>',
    about_p1:'Fundada em 2018, a Ouro Digital nasceu com um propósito claro: alavancar empresas de todos os portes com estratégias digitais de alto impacto.',
    about_p2:'Com escritório próprio no <strong>centro de Goiânia</strong> e mais de <strong>5.000 empresas atendidas</strong> em todo o Brasil.',
    about_tag1:'🏢 Centro de Goiânia', about_tag2:'⚡ 3 dias úteis',
    about_tag3:'🤖 IA Real', about_tag4:'📊 Resultados',
    about_cta:'Falar com a equipe →',
    about_since:'Desde 2018 · Goiânia · Todo o Brasil',
    about_founded:'Fundação', about_companies:'Empresas', about_city:'Goiânia',
    cta_label:'Pronto para crescer?',
    cta_h2:'Crie o seu site conosco agora,<br/><em>em minutos.</em>',
    cta_p:'Solicite sua avaliação gratuita. Nossa equipe analisa o seu negócio e monta a estratégia personalizada.',
    cta_btn:'📲 Solicitar avaliação gratuita',
    cta_note:'Vagas limitadas · Atendemos Brasil todo',
    nav_founders:'Fundadores',
    found_label:'Liderança', found_h2:'Os <em>CEOs</em> por trás da Ouro Digital',
    found_sub:'Combinamos décadas de experiência em vendas, tecnologia, educação e empreendedorismo para entregar resultados reais.',
    vilson_title:'Especialista em Vendas · IA & Tech · Corretor',
    vilson_bio:'Vendedor nato com presença em mais de 20 estados brasileiros. Ex-consultor da Porto Seguro Seguradora, corretor de imóveis em Goiânia e pioneiro em tecnologia DeFi na região. Certificado pela Anthropic — criadora do Claude Code — em IA aplicada e educação digital. Membro do time de elite do Cultura Builder.',
    vilson_team_label:'Time de elite:',
    max_title:'Especialista em Educação · Empreendedor · Palestrante',
    max_bio:'Empreendedor com trajetória construída na transformação de vidas. Instrutor de cursos de barbearia há anos, formando profissionais em todo o Brasil. Palestrante reconhecido com experiência em palcos corporativos e eventos de empreendedorismo. Traz à Ouro Digital a visão prática de quem entende pessoas, equipes e resultados.',
    footer_desc:'Agência de marketing digital fundada em 2018. Conectando riquezas em todo o Brasil.',
    footer_nav:'Navegação', footer_services:'Serviços', footer_contact:'Contato',
    footer_tagline:'Conectando Riquezas · Goiânia, GO',
  },
  en: {
    nav_sol:'Solutions', nav_port:'Portfolio', nav_plans:'Plans',
    nav_about:'About', nav_cta:'Create my site now',
    hero_pill:'Digital Agency · Goiânia · Since 2018',
    hero_h1:'Your business in <em>first place</em> digitally.',
    hero_sub:'Marketing, paid traffic, websites and AI automation.<br/>Delivery in <strong>3 business days</strong>.',
    hero_cta1:'Request free evaluation',
    hero_cta2:'View portfolio ↓',
    stat1:'companies served', stat2_unit:'years', stat2:'in the market',
    stat3_unit:'days', stat3:'delivery time', stat4:'AI automation 24/7',
    sol_label:'What we do',
    sol_h2:'Solutions that <em>generate results</em>',
    sol1_h:'Paid Traffic',
    sol1_p:'Google, Meta and TikTok Ads. Campaigns that put your brand at the top and generate real customers.',
    sol2_h:'Websites & Landing Pages',
    sol2_p:'From TV price boards to luxury e-commerce. Delivery in up to 3 business days.',
    sol3_h:'AI Automation',
    sol3_p:'Smart WhatsApp customer service 24 hours a day, 7 days a week.',
    sol4_h:'AI Social Media',
    sol4_p:'90 monthly posts on Instagram managed by artificial intelligence.',
    sol5_h:'Filmmaker & Content',
    sol5_p:'Creative team for videos, photos and campaigns that convert.',
    sol6_h:'Custom Software',
    sol6_p:'Personalized systems for any size business.',
    port_label:'Portfolio', port_h2:'Sites we have <em>delivered</em>',
    port_sub:'Each project was built from scratch with its own identity, copy, design and full integration.',
    port1_desc:'Luxury e-commerce for selling iPhones and Apple Watches plated in 24-karat gold. Brazilian company delivering nationwide with international operations targeting the Arab market.',
    port2_desc:'E-commerce specializing in beard and hair growth products. Conversion-focused layout with testimonials, benefits section and direct WhatsApp integration for sales.',
    port3_desc:'Institutional site for a community solidarity NGO in Goiânia. Focused on recruiting volunteers, donations and spreading the organization\'s social activities to expand mission reach.',
    port4_desc:'Complete site for a premium butcher shop with catalog of noble cuts, fruit, greengrocer, beverages and seasonings. WhatsApp-integrated order system with product selection and automatic cart delivery.',
    port5_desc:'Premium site for a men\'s barbershop with haircut gallery, available services and WhatsApp scheduling. Strong visual identity conveying professionalism and exclusivity.',
    port6_desc:'Dynamic price panel built for in-store television display. Real-time price updates, customizable categories and layout optimized for large screens.',
    port7_desc:'Institutional site for a social project in Goiânia. Presents the mission, team, event gallery and sign-up form for volunteers and partners who want to support the cause.',
    port8_desc:'Institutional site for a digital marketing agency with full service presentation, client portfolio, testimonials and lead capture via WhatsApp. Strong, modern brand identity.',
    port_btn:'View site →',
    port_cta_h:'Want a site like these<br/>for your business?',
    port_cta_sub:'Delivered in up to 3 business days. Free evaluation.',
    port_cta_btn:'Create my site now →',
    plans_label:'Investment',
    plans_h2:'Plans that <em>grow your business</em>',
    plans_sub:'From R$ 1,000/month. Everything included.',
    plan_from:'starting at', plan_month:'/month', plan_start:'Start now',
    plan_best:'Most chosen',
    plan1_name:'Essential', plan1_f1:'90 monthly Instagram posts',
    plan1_f2:'AI-automated management', plan1_f3:'Visual identity',
    plan1_f4:'Monthly report', plan1_f5:'WhatsApp support',
    plan2_name:'Professional', plan2_f1:'Everything in Essential',
    plan2_f2:'Paid traffic Google + Meta', plan2_f3:'Professional website included',
    plan2_f4:'WhatsApp AI automation', plan2_f5:'Filmmaker — 1 video/month',
    plan2_f6:'Delivery in 3 business days',
    plan3_name:'Enterprise', plan3_consult:'by quote', plan3_custom:'Custom',
    plan3_f1:'Everything in Professional', plan3_f2:'Custom software',
    plan3_f3:'24/7 multichannel AI', plan3_f4:'Dedicated team',
    plan3_f5:'Strategy meetings', plan3_f6:'Guaranteed SLA',
    plan3_talk:'Talk to a specialist',
    about_label:'Who we are',
    about_h2:'The agency that <em>Connects Wealth</em>',
    about_p1:'Founded in 2018, Ouro Digital was born with a clear purpose: to leverage businesses of all sizes with high-impact digital strategies.',
    about_p2:'With our own office in <strong>downtown Goiânia</strong> and over <strong>5,000 companies served</strong> throughout Brazil.',
    about_tag1:'🏢 Downtown Goiânia', about_tag2:'⚡ 3 business days',
    about_tag3:'🤖 Real AI', about_tag4:'📊 Results',
    about_cta:'Talk to the team →',
    about_since:'Since 2018 · Goiânia · All Brazil',
    about_founded:'Founded', about_companies:'Companies', about_city:'Goiânia',
    cta_label:'Ready to grow?',
    cta_h2:'Create your site with us now,<br/><em>in minutes.</em>',
    cta_p:'Request your free evaluation. Our team analyzes your business and builds a personalized strategy.',
    cta_btn:'📲 Request free evaluation',
    cta_note:'Limited spots · We serve all of Brazil',
    nav_founders:'Founders',
    found_label:'Leadership', found_h2:'The <em>CEOs</em> behind Ouro Digital',
    found_sub:'We combine decades of experience in sales, technology, education and entrepreneurship to deliver real results.',
    vilson_title:'Sales Specialist · AI & Tech · Real Estate Broker',
    vilson_bio:'Natural-born salesperson with presence in over 20 Brazilian states. Former Porto Seguro Insurance consultant, real estate broker in Goiânia and DeFi technology pioneer in the region. Certified by Anthropic — creators of Claude Code — in applied AI and digital education. Member of Cultura Builder elite team.',
    vilson_team_label:'Elite team:',
    max_title:'Education Specialist · Entrepreneur · Speaker',
    max_bio:'Entrepreneur with a career built on transforming lives. Barbershop instructor for years, training professionals throughout Brazil. Recognized speaker with experience on corporate stages and entrepreneurship events. Brings to Ouro Digital the practical vision of someone who understands people, teams and results.',
    footer_desc:'Digital marketing agency founded in 2018. Connecting wealth throughout Brazil.',
    footer_nav:'Navigation', footer_services:'Services', footer_contact:'Contact',
    footer_tagline:'Connecting Wealth · Goiânia, GO',
  }
};

let lang = localStorage.getItem('od_lang') || 'pt';
let theme = localStorage.getItem('od_theme') || 'dark';

/* ── APPLY LANG ── */
function applyLang(l) {
  lang = l;
  localStorage.setItem('od_lang', l);
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('langBtn').textContent = l === 'pt' ? 'EN' : 'PT';
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.dataset.t;
    if (T[l][k] !== undefined) el.textContent = T[l][k];
  });
  document.querySelectorAll('[data-t-html]').forEach(el => {
    const k = el.dataset.tHtml;
    if (T[l][k] !== undefined) el.innerHTML = T[l][k];
  });
}

/* ── APPLY THEME ── */
function applyTheme(t) {
  theme = t;
  localStorage.setItem('od_theme', t);
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('iconSun').style.display  = t === 'dark'  ? 'none'  : '';
  document.getElementById('iconMoon').style.display = t === 'light' ? 'none'  : '';
}

document.getElementById('langBtn').addEventListener('click', () => applyLang(lang === 'pt' ? 'en' : 'pt'));
document.getElementById('themeBtn').addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));

applyLang(lang);
applyTheme(theme);

/* ── CURSOR ── */
const cur = document.getElementById('cursor');
const curT = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function moveCursor() {
  tx += (mx - tx) * .15; ty += (my - ty) * .15;
  if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }
  if (curT) { curT.style.left = tx + 'px'; curT.style.top = ty + 'px'; }
  requestAnimationFrame(moveCursor);
})();
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { if(cur) cur.style.transform = 'translate(-50%,-50%) scale(2)'; });
  el.addEventListener('mouseleave', () => { if(cur) cur.style.transform = 'translate(-50%,-50%) scale(1)'; });
});

/* ── NAV ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 40), { passive:true });
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  document.body.style.overflow = open ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  document.body.style.overflow = '';
}));

/* ── HERO LOGO PARALLAX ── */
const heroLogo = document.getElementById('heroLogo');
let lx = 0, ly = 0, tlx = 0, tly = 0;
document.addEventListener('mousemove', e => {
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  lx = (e.clientX - cx) / cx * 28;
  ly = (e.clientY - cy) / cy * 28;
});
(function animLogo() {
  tlx += (lx - tlx) * .04; tly += (ly - tly) * .04;
  if (heroLogo) heroLogo.style.transform = `translate(${tlx}px,${tly}px)`;
  requestAnimationFrame(animLogo);
})();

/* ── STARFIELD CANVAS ── */
(function initStarfield() {
  const c = document.getElementById('starfield');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W, H, stars = [], shooting = null;

  function resize() {
    W = c.width = c.offsetWidth;
    H = c.height = c.offsetHeight;
    stars = Array.from({length: 220}, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random(), da: (Math.random() - 0.5) * 0.008,
      gold: Math.random() < 0.12,
      vx: (Math.random() - .5) * .06, vy: (Math.random() - .5) * .06,
    }));
  }
  resize();
  window.addEventListener('resize', resize);

  function spawnShooting() {
    if (shooting) return;
    shooting = {
      x: Math.random() * W * .6, y: Math.random() * H * .3,
      vx: 6 + Math.random() * 4, vy: 2 + Math.random() * 3,
      life: 1, trail: []
    };
    setTimeout(spawnShooting, 3000 + Math.random() * 5000);
  }
  setTimeout(spawnShooting, 2000);

  function getColor() {
    return document.documentElement.getAttribute('data-theme') === 'light';
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isLight = getColor();

    /* Nebula clouds */
    const nebColors = ['rgba(90,60,200,.07)','rgba(201,168,76,.05)','rgba(120,40,180,.06)'];
    [[W*.3,H*.4,300],[W*.7,H*.6,250],[W*.1,H*.7,200]].forEach(([nx,ny,nr],i) => {
      if (isLight) return;
      const g = ctx.createRadialGradient(nx,ny,0,nx,ny,nr);
      g.addColorStop(0, nebColors[i]); g.addColorStop(1,'transparent');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(nx,ny,nr,0,Math.PI*2); ctx.fill();
    });

    /* Grid lines */
    if (!isLight) {
      ctx.strokeStyle = 'rgba(201,168,76,.025)'; ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 80) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for (let y = 0; y < H; y += 80) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
    }

    /* Stars */
    stars.forEach(s => {
      s.a += s.da;
      if (s.a > 1 || s.a < 0) s.da *= -1;
      s.x += s.vx; s.y += s.vy;
      if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      if (s.gold && !isLight) {
        ctx.fillStyle = `rgba(201,168,76,${s.a * .8})`;
      } else {
        ctx.fillStyle = isLight ? `rgba(100,80,30,${s.a*.3})` : `rgba(255,255,255,${s.a*.7})`;
      }
      ctx.fill();
    });

    /* Shooting star */
    if (shooting) {
      shooting.trail.push({x:shooting.x, y:shooting.y});
      if (shooting.trail.length > 20) shooting.trail.shift();
      shooting.x += shooting.vx; shooting.y += shooting.vy;
      shooting.life -= 0.015;
      if (shooting.life <= 0 || shooting.x > W || shooting.y > H) { shooting = null; }
      else if (shooting.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(shooting.trail[0].x, shooting.trail[0].y);
        shooting.trail.forEach(p => ctx.lineTo(p.x, p.y));
        const g = ctx.createLinearGradient(shooting.trail[0].x,shooting.trail[0].y,shooting.x,shooting.y);
        g.addColorStop(0,'transparent');
        g.addColorStop(1,`rgba(201,168,76,${shooting.life})`);
        ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── CTA CANVAS ── */
(function initCtaCanvas() {
  const c = document.getElementById('ctaCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W, H, pts = [];
  function resize() {
    W = c.width = c.offsetWidth;
    H = c.height = c.offsetHeight;
    pts = Array.from({length:40},() => ({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4
    }));
  }
  resize(); window.addEventListener('resize', resize);
  function draw() {
    ctx.clearRect(0,0,W,H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>W) p.vx*=-1;
      if (p.y<0||p.y>H) p.vy*=-1;
    });
    pts.forEach((a,i) => pts.slice(i+1).forEach(b => {
      const d = Math.hypot(a.x-b.x, a.y-b.y);
      if (d < 140) {
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle = `rgba(201,168,76,${(1-d/140)*.12})`; ctx.lineWidth=1; ctx.stroke();
      }
    }));
    pts.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
      ctx.fillStyle = 'rgba(201,168,76,.35)'; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── SERVICE CARD CANVASES ── */
const SCENES = {
  trafego(ctx, W, H, t, hover) {
    ctx.clearRect(0,0,W,H);
    const bg = document.documentElement.getAttribute('data-theme') === 'light';
    const bars = [.45,.7,.55,.9,.65,.8,.95,.6,.75,.85];
    const speed = hover ? 2.5 : 1;
    bars.forEach((h,i) => {
      const bh = H * h * (.7 + .3*Math.sin(t*.02*speed + i));
      const x = 14 + i*(W-28)/9.5;
      const bw = (W-28)/11;
      const alpha = .3 + .5*h;
      const g = ctx.createLinearGradient(0,H,0,H-bh);
      g.addColorStop(0,'rgba(201,168,76,0.1)');
      g.addColorStop(1,`rgba(201,168,76,${alpha})`);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.roundRect(x,H-bh,bw,bh,3); ctx.fill();
    });
    /* rising numbers */
    if (hover) {
      ctx.font = `bold 11px Manrope,sans-serif`;
      ctx.fillStyle = 'rgba(201,168,76,.8)';
      const n = Math.floor((t*.3) % 999);
      ctx.fillText(`+${n}%`, W*.6, 20);
    }
  },

  sites(ctx, W, H, t, hover) {
    ctx.clearRect(0,0,W,H);
    /* browser mockup */
    ctx.strokeStyle = 'rgba(201,168,76,.3)'; ctx.lineWidth = 1;
    ctx.strokeRect(8, 8, W-16, H-16);
    /* toolbar */
    ctx.fillStyle = 'rgba(201,168,76,.1)';
    ctx.fillRect(8,8,W-16,28);
    /* dots */
    [[24,22],[40,22],[56,22]].forEach(([x,y],i)=>{
      ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2);
      ctx.fillStyle = `rgba(201,168,76,${.3+i*.15})`; ctx.fill();
    });
    /* code lines */
    const lines = [.6,.9,.7,.5,.8,.65,.75,.9];
    const scroll = (t * (hover ? 1.5 : .6)) % (H+40);
    lines.forEach((w,i) => {
      const y = 48 + i*16 - (scroll % (lines.length*16));
      const alpha = .15 + w*.25;
      ctx.fillStyle = i%3===0 ? `rgba(201,168,76,${alpha})` : `rgba(160,160,200,${alpha*.7})`;
      ctx.fillRect(16, y, (W-32)*w, 7);
    });
  },

  automacao(ctx, W, H, t, hover) {
    ctx.clearRect(0,0,W,H);
    const nodes = [
      {x:.5,y:.5},{x:.2,y:.2},{x:.8,y:.2},{x:.15,y:.7},
      {x:.85,y:.7},{x:.5,y:.15},{x:.5,y:.85},
    ].map(n => ({x:n.x*W, y:n.y*H}));
    const spd = hover ? 2 : 1;
    nodes.forEach((a,i) => nodes.slice(i+1).forEach(b => {
      const pulse = .5 + .5*Math.sin(t*.04*spd + i);
      ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
      ctx.strokeStyle = `rgba(201,168,76,${pulse*.25})`; ctx.lineWidth=1; ctx.stroke();
    }));
    nodes.forEach((n,i) => {
      const pulse = .5 + .5*Math.sin(t*.05*spd + i*.8);
      const r = 5 + pulse*4;
      const g = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,r*2);
      g.addColorStop(0,`rgba(201,168,76,${.6*pulse})`);
      g.addColorStop(1,'transparent');
      ctx.beginPath(); ctx.arc(n.x,n.y,r,0,Math.PI*2);
      ctx.fillStyle = g; ctx.fill();
      ctx.beginPath(); ctx.arc(n.x,n.y,3,0,Math.PI*2);
      ctx.fillStyle=`rgba(201,168,76,${.4+.4*pulse})`; ctx.fill();
    });
  },

  social(ctx, W, H, t, hover) {
    ctx.clearRect(0,0,W,H);
    const spd = hover ? 2 : 1;
    /* phone silhouette */
    const px=W/2-25, py=10, pw=50, ph=H-20, r=8;
    ctx.strokeStyle='rgba(201,168,76,.35)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.roundRect(px,py,pw,ph,r); ctx.stroke();
    /* posts scrolling */
    const scroll = (t * .8 * spd) % 60;
    [0,1,2].forEach(i => {
      const cy = py+20 + i*52 - scroll;
      if (cy < py+10 || cy > py+ph-10) return;
      ctx.fillStyle = `rgba(201,168,76,${.08+i*.04})`;
      ctx.fillRect(px+5,cy,pw-10,40);
      ctx.fillStyle='rgba(201,168,76,.25)';
      ctx.fillRect(px+5,cy+28,12,8);
    });
    /* floating likes */
    for(let i=0;i<3;i++) {
      const lx = px+pw/2 + Math.sin(t*.04*spd + i*2)*20;
      const ly = H*.5 - ((t*.8*spd + i*40) % (H*.6));
      const alpha = ((H*.5-ly)/(H*.6));
      ctx.font=`${12+i*2}px serif`;
      ctx.fillStyle=`rgba(201,168,76,${Math.max(0,alpha)*.7})`;
      ctx.fillText('♥', lx, ly);
    }
  },

  filmmaker(ctx, W, H, t, hover) {
    ctx.clearRect(0,0,W,H);
    const spd = hover ? 2 : 1;
    /* film strip */
    const fw = W*1.1, fh = 60, fy = (H-fh)/2;
    const scroll = (t * 1.2 * spd) % 80;
    ctx.fillStyle='rgba(201,168,76,.08)'; ctx.fillRect(-scroll,fy,fw,fh);
    ctx.strokeStyle='rgba(201,168,76,.3)'; ctx.lineWidth=1;
    for(let x=-scroll; x<W+80; x+=80) {
      ctx.strokeRect(x+5,fy+5,70,fh-10);
      ctx.fillStyle='rgba(201,168,76,.12)'; ctx.fillRect(x+5,fy+5,70,fh-10);
      /* play icon in each frame */
      ctx.fillStyle='rgba(201,168,76,.4)';
      ctx.beginPath(); ctx.moveTo(x+30,fy+fh/2-8); ctx.lineTo(x+30,fy+fh/2+8); ctx.lineTo(x+48,fy+fh/2); ctx.fill();
    }
    /* sprocket holes */
    for(let x=-scroll; x<W+80; x+=80) {
      [[x+10,fy-6],[x+50,fy-6],[x+10,fy+fh+1],[x+50,fy+fh+1]].forEach(([hx,hy])=>{
        ctx.fillStyle='rgba(201,168,76,.5)';
        ctx.beginPath(); ctx.roundRect(hx,hy,16,10,3); ctx.fill();
      });
    }
    /* camera shutter pulse */
    const pulse = .5+.5*Math.sin(t*.06*spd);
    ctx.beginPath(); ctx.arc(W*.5,fy+fh/2,4+pulse*3,0,Math.PI*2);
    ctx.fillStyle=`rgba(201,168,76,${.3+pulse*.4})`; ctx.fill();
  },

  software(ctx, W, H, t, hover) {
    ctx.clearRect(0,0,W,H);
    const spd = hover ? 2 : 1;
    ctx.fillStyle='rgba(2,0,8,.9)'; ctx.fillRect(0,0,W,H);
    /* matrix rain */
    const chars='01アイウエオカキクケコABCDEF{}[]<>/';
    const cols = Math.floor(W/16);
    if (!ctx._drops) ctx._drops = Array.from({length:cols},()=>Math.random()*H);
    ctx._drops.forEach((y,i)=>{
      const ch = chars[Math.floor(Math.random()*chars.length)];
      const alpha = .2 + Math.random()*.6;
      ctx.font=`11px monospace`;
      ctx.fillStyle=`rgba(201,168,76,${alpha})`;
      ctx.fillText(ch, i*16, y);
      ctx._drops[i] += (hover ? 16 : 10) * spd;
      if (ctx._drops[i] > H && Math.random()>.9) ctx._drops[i] = 0;
    });
    /* terminal cursor */
    if (Math.floor(t*.05*spd) % 2 === 0) {
      ctx.fillStyle='rgba(201,168,76,.8)';
      ctx.fillRect(10, H-20, 8, 14);
    }
  }
};

/* Initialize service canvases */
let tick = 0;
const canvases = [];
document.querySelectorAll('.svc-canvas').forEach(c => {
  c.width = c.offsetWidth || 300;
  c.height = c.offsetHeight || 180;
  let hovered = false;
  const card = c.closest('.sol-card');
  if (card) {
    card.addEventListener('mouseenter', () => hovered = true);
    card.addEventListener('mouseleave', () => hovered = false);
  }
  canvases.push({ c, scene: c.dataset.scene, hovered: () => hovered });
});
(function animateCanvases() {
  tick++;
  canvases.forEach(({ c, scene, hovered }) => {
    const ctx = c.getContext('2d');
    if (SCENES[scene]) SCENES[scene](ctx, c.width, c.height, tick, hovered());
  });
  requestAnimationFrame(animateCanvases);
})();
window.addEventListener('resize', () => {
  canvases.forEach(({ c }) => {
    c.width = c.offsetWidth || 300;
    c.height = c.offsetHeight || 180;
  });
});

/* ── REVEAL ON SCROLL ── */
const revEls = document.querySelectorAll('[data-reveal]');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (!e.isIntersecting) return;
    const delay = parseInt(e.target.dataset.delay || 0);
    setTimeout(() => e.target.classList.add('vis'), delay);
    obs.unobserve(e.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

/* Stagger child elements inside grids */
document.querySelectorAll('.sol-grid, .plans-grid').forEach(g => {
  const children = g.querySelectorAll('[data-reveal]');
  const gObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      children.forEach((c,i) => setTimeout(() => c.classList.add('vis'), i*80));
      gObs.unobserve(e.target);
    });
  }, { threshold: 0.08 });
  gObs.observe(g);
});

revEls.forEach(el => {
  const parent = el.closest('.sol-grid, .plans-grid');
  if (!parent) obs.observe(el);
});
