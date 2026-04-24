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

/* ── COSMOS 5ª DIMENSÃO ── */
(function initCosmos() {
  const cv = document.getElementById('starfield');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let W, H, T = 0;
  let mouseX = 0.5, mouseY = 0.5;
  let smX = 0.5, smY = 0.5;
  let layers = [], comets = [];

  function resize() {
    W = cv.width = cv.offsetWidth;
    H = cv.height = cv.offsetHeight;
    layers = [
      Array.from({length:180}, () => ({
        x:Math.random(), y:Math.random(),
        r:0.22+Math.random()*0.55, a:0.18+Math.random()*0.5,
        tw:Math.random()*Math.PI*2, tws:0.002+Math.random()*0.004,
        px:0.006, gold:false
      })),
      Array.from({length:90}, () => ({
        x:Math.random(), y:Math.random(),
        r:0.5+Math.random()*1.0, a:0.3+Math.random()*0.55,
        tw:Math.random()*Math.PI*2, tws:0.003+Math.random()*0.005,
        px:0.016, gold:Math.random()<0.15
      })),
      Array.from({length:45}, () => ({
        x:Math.random(), y:Math.random(),
        r:1.0+Math.random()*1.6, a:0.45+Math.random()*0.5,
        tw:Math.random()*Math.PI*2, tws:0.004+Math.random()*0.007,
        px:0.028, gold:Math.random()<0.22
      }))
    ];
  }

  function nebulae() {
    const defs = [
      {x:0.62,y:0.32,rx:0.38,ry:0.30,ph:0.0,sp:0.00025},
      {x:0.22,y:0.60,rx:0.30,ry:0.22,ph:1.8,sp:0.00032},
      {x:0.78,y:0.70,rx:0.25,ry:0.20,ph:3.5,sp:0.00028},
      {x:0.48,y:0.85,rx:0.32,ry:0.18,ph:5.0,sp:0.00040},
    ];
    defs.forEach(n => {
      const ph = n.ph + T * n.sp;
      const r2 = 70+80*Math.abs(Math.sin(ph));
      const g2 = 28+40*Math.abs(Math.sin(ph+1.5));
      const b2 = 130+80*Math.abs(Math.sin(ph+0.8));
      const nx=(n.x+(smX-0.5)*0.014)*W, ny=(n.y+(smY-0.5)*0.014)*H;
      const rx=n.rx*W, ry=n.ry*H, mR=Math.max(rx,ry);
      const grd=ctx.createRadialGradient(nx,ny,0,nx,ny,mR);
      grd.addColorStop(0,`rgba(${r2|0},${g2|0},${b2|0},0.068)`);
      grd.addColorStop(0.5,`rgba(${r2|0},${g2|0},${b2|0},0.022)`);
      grd.addColorStop(1,'transparent');
      ctx.save(); ctx.beginPath();
      ctx.ellipse(nx,ny,rx,ry,0,0,Math.PI*2);
      ctx.fillStyle=grd; ctx.fill(); ctx.restore();
    });
  }

  function sun() {
    const px=(0.78+(smX-0.5)*0.008)*W, py=(0.10+(smY-0.5)*0.008)*H;
    const pulse=1+0.036*Math.sin(T*0.0012);
    const r=Math.min(W,H)*0.056*pulse;
    const cg=ctx.createRadialGradient(px,py,r*0.4,px,py,r*6.5);
    cg.addColorStop(0,'rgba(255,210,70,0.15)'); cg.addColorStop(0.3,'rgba(255,150,30,0.06)');
    cg.addColorStop(0.65,'rgba(201,90,15,0.025)'); cg.addColorStop(1,'transparent');
    ctx.beginPath(); ctx.arc(px,py,r*6.5,0,Math.PI*2); ctx.fillStyle=cg; ctx.fill();
    const sg=ctx.createRadialGradient(px-r*0.18,py-r*0.18,0,px,py,r);
    sg.addColorStop(0,'rgba(255,250,190,0.98)'); sg.addColorStop(0.42,'rgba(255,195,65,0.92)');
    sg.addColorStop(0.82,'rgba(225,145,30,0.78)'); sg.addColorStop(1,'rgba(185,95,10,0.5)');
    ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fillStyle=sg; ctx.fill();
  }

  function moon() {
    const px=(0.13+(smX-0.5)*0.013)*W, py=(0.23+(smY-0.5)*0.013)*H;
    const r=Math.min(W,H)*0.034;
    const gg=ctx.createRadialGradient(px,py,r,px,py,r*4.5);
    gg.addColorStop(0,'rgba(185,198,228,0.10)'); gg.addColorStop(0.5,'rgba(140,155,200,0.04)'); gg.addColorStop(1,'transparent');
    ctx.beginPath(); ctx.arc(px,py,r*4.5,0,Math.PI*2); ctx.fillStyle=gg; ctx.fill();
    const mg=ctx.createRadialGradient(px-r*0.22,py-r*0.22,0,px,py,r);
    mg.addColorStop(0,'rgba(235,242,255,0.94)'); mg.addColorStop(0.62,'rgba(165,178,215,0.82)'); mg.addColorStop(1,'rgba(100,115,155,0.58)');
    ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fillStyle=mg; ctx.fill();
    [[-0.30,-0.20,0.18],[0.28,0.26,0.13],[-0.08,0.40,0.10]].forEach(([ox,oy,cr]) => {
      ctx.beginPath(); ctx.arc(px+ox*r,py+oy*r,cr*r,0,Math.PI*2);
      ctx.fillStyle='rgba(88,100,132,0.22)'; ctx.fill();
    });
    const sh=ctx.createRadialGradient(px+r*0.55,py,0,px,py,r);
    sh.addColorStop(0,'transparent'); sh.addColorStop(0.62,'transparent'); sh.addColorStop(1,'rgba(4,2,14,0.52)');
    ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fillStyle=sh; ctx.fill();
  }

  function rift() {
    const cx=W*(0.5+(smX-0.5)*0.025), cy=H*(0.42+(smY-0.5)*0.025);
    const mR=Math.min(W,H)*0.30;
    for(let i=0;i<11;i++){
      const r=mR*(0.06+i*0.095);
      const a=Math.max(0,0.024-i*0.0018);
      if(a<=0) break;
      const rot=T*0.00022*(i%2===0?1:-0.75)+i*0.22;
      const hue=(238+i*14+T*0.018)%360;
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot);
      ctx.beginPath(); ctx.ellipse(0,0,r,r*0.40,0,0,Math.PI*2);
      ctx.strokeStyle=`hsla(${hue},68%,72%,${a})`; ctx.lineWidth=0.7; ctx.stroke();
      ctx.restore();
    }
    /* Central glow */
    const cg=ctx.createRadialGradient(cx,cy,0,cx,cy,mR*0.18);
    cg.addColorStop(0,`rgba(180,120,255,${0.03+0.02*Math.sin(T*0.006)})`);
    cg.addColorStop(1,'transparent');
    ctx.beginPath(); ctx.arc(cx,cy,mR*0.18,0,Math.PI*2); ctx.fillStyle=cg; ctx.fill();
  }

  function stars() {
    const isL=document.documentElement.getAttribute('data-theme')==='light';
    layers.forEach(layer => layer.forEach(s => {
      s.tw+=s.tws;
      const tw=0.35+0.65*(Math.sin(s.tw)*0.5+0.5);
      const px=(s.x+(smX-0.5)*s.px)*W, py=(s.y+(smY-0.5)*s.px)*H;
      ctx.beginPath(); ctx.arc(px,py,s.r,0,Math.PI*2);
      ctx.fillStyle=s.gold&&!isL?`rgba(201,168,76,${tw*s.a})`:isL?`rgba(80,60,20,${tw*0.22})`:`rgba(255,255,255,${tw*s.a})`;
      ctx.fill();
      if(s.r>1.3&&!isL){
        const al=tw*s.a*0.42;
        ctx.strokeStyle=s.gold?`rgba(201,168,76,${al})`:`rgba(255,255,255,${al})`;
        ctx.lineWidth=0.4;
        ctx.beginPath(); ctx.moveTo(px-s.r*3,py); ctx.lineTo(px+s.r*3,py); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px,py-s.r*3); ctx.lineTo(px,py+s.r*3); ctx.stroke();
      }
    }));
  }

  function drawComets() {
    comets=comets.filter(c => {
      c.x+=c.vx; c.y+=c.vy; c.life++;
      if(c.life>c.maxLife||c.x>1.12||c.y>1.12||c.x<-0.12) return false;
      const prog=c.life/c.maxLife;
      const al=prog<0.12?prog/0.12:prog>0.78?(1-prog)/0.22:1;
      if(al<=0) return true;
      const spd=Math.sqrt(c.vx*c.vx+c.vy*c.vy);
      const nx2=-c.vx/spd, ny2=-c.vy/spd;
      const cx2=c.x*W, cy2=c.y*H;
      const tx=cx2+nx2*c.tailLen*W, ty=cy2+ny2*c.tailLen*W;
      const tg=ctx.createLinearGradient(cx2,cy2,tx,ty);
      if(c.gold){
        tg.addColorStop(0,`rgba(255,248,155,${al})`); tg.addColorStop(0.25,`rgba(201,168,76,${al*0.7})`);
      } else {
        tg.addColorStop(0,`rgba(215,205,255,${al})`); tg.addColorStop(0.25,`rgba(155,135,240,${al*0.6})`);
      }
      tg.addColorStop(1,'transparent');
      ctx.beginPath(); ctx.moveTo(cx2,cy2); ctx.lineTo(tx,ty);
      ctx.strokeStyle=tg; ctx.lineWidth=c.r*1.8; ctx.lineCap='round'; ctx.stroke();
      const hg=ctx.createRadialGradient(cx2,cy2,0,cx2,cy2,c.r*6);
      hg.addColorStop(0,`rgba(255,255,235,${al})`);
      hg.addColorStop(0.4,c.gold?`rgba(201,168,76,${al*0.55})`:`rgba(168,148,255,${al*0.45})`);
      hg.addColorStop(1,'transparent');
      ctx.beginPath(); ctx.arc(cx2,cy2,c.r*6,0,Math.PI*2); ctx.fillStyle=hg; ctx.fill();
      return true;
    });
  }

  function scheduleComet() {
    setTimeout(() => {
      const spd=0.0026+Math.random()*0.0032;
      comets.push({
        x:0.35+Math.random()*0.65, y:-0.06,
        vx:-(0.5+Math.random()*0.5)*spd*1.2,
        vy:(0.6+Math.random()*0.8)*spd,
        r:1.5+Math.random()*2.5,
        tailLen:0.10+Math.random()*0.14,
        life:0, maxLife:155+Math.floor(Math.random()*130),
        gold:Math.random()<0.45
      });
      scheduleComet();
    }, 2600+Math.random()*5400);
  }

  function frame() {
    requestAnimationFrame(frame);
    T++;
    smX+=(mouseX-smX)*0.044; smY+=(mouseY-smY)*0.044;
    const isL=document.documentElement.getAttribute('data-theme')==='light';
    ctx.clearRect(0,0,W,H);
    if(!isL){ nebulae(); rift(); sun(); moon(); }
    stars();
    if(!isL){
      drawComets();
      ctx.strokeStyle='rgba(201,168,76,0.016)'; ctx.lineWidth=1;
      for(let x=0;x<W;x+=90){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
      for(let y=0;y<H;y+=90){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    }
  }

  resize(); window.addEventListener('resize',resize);
  document.addEventListener('mousemove',e=>{mouseX=e.clientX/window.innerWidth;mouseY=e.clientY/window.innerHeight;});
  setTimeout(scheduleComet,1800);
  requestAnimationFrame(frame);
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
