import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowRight, Building2, GraduationCap, Landmark, School, Sparkles } from 'lucide-react';

const audiences = [
  { id: 'universidades', kicker: '01 / INVESTIGA', title: 'Universidades', copy: 'Investigación aplicada, trabajo de campo, mapeos sociales y laboratorios vivos.', color: 'yellow', icon: GraduationCap, image: '/images/universidades.png' },
  { id: 'colegios', kicker: '02 / EXPLORA', title: 'Colegios', copy: 'Experiencias pedagógicas, arte, cultura, huerta y aprendizaje situado.', color: 'purple', icon: School, image: '/images/colegios.png' },
  { id: 'empresas', kicker: '03 / CONECTA', title: 'Empresas', copy: 'Voluntariado corporativo, bienestar, ESG y experiencias con propósito.', color: 'orange', icon: Building2, image: '/images/empresas.png' },
  { id: 'financiero', kicker: '04 / TRANSFORMA', title: 'Sector financiero', copy: 'Diagnóstico territorial, investigación social y proyectos de impacto.', color: 'cyan', icon: Landmark, image: '/images/sector-financiero.png' },
];

const process = [
  ['01', 'Conversamos', 'Entendemos el reto, los objetivos y el tipo de experiencia que necesita tu institución.'],
  ['02', 'Diseñamos', 'Construimos la experiencia junto a la comunidad y el territorio.'],
  ['03', 'Vivimos', 'Llevamos la experiencia a campo: observar, crear, aprender y participar.'],
  ['04', 'Compartimos', 'Cerramos con aprendizajes, resultados y evidencias del proceso.'],
];

const cases = [
  { tag: 'UNIVERSIDAD', title: 'Territorio como laboratorio vivo', copy: 'Una jornada de inmersión para observar, mapear, conversar con actores locales y convertir el territorio en una fuente de preguntas reales.', image: '/images/universidades.png', className: 'case-yellow' },
  { tag: 'COLEGIO', title: 'Aprender haciendo', copy: 'Arte, huerta, memoria y cultura se convierten en una experiencia pedagógica activa para niñas, niños y jóvenes.', image: '/images/colegios.png', className: 'case-purple' },
  { tag: 'EMPRESA', title: 'Experiencias con propósito', copy: 'Equipos que salen de la oficina para encontrarse con la comunidad, trabajar juntos y generar impacto tangible.', image: '/images/empresas.png', className: 'case-orange' },
  { tag: 'SECTOR FINANCIERO', title: 'Lectura del territorio para decidir mejor', copy: 'Una experiencia de diagnóstico territorial e investigación social para comprender comunidades, identificar necesidades y construir iniciativas de impacto con información situada.', image: '/images/sector-financiero.png', className: 'case-cyan' },
];

const gallery = ['/images/hero.png','/images/territorio.png','/images/manos.png','/images/impacto.png','/images/colegios.png','/images/empresas.png'];
const carousel = Array.from({ length: 6 }, (_, i) => `/images/social-carousel-${i + 1}.jpg`);

function Logo({ footer = false }: { footer?: boolean }) {
  return <img className={footer ? 'nakuma-logo footer-logo' : 'nakuma-logo'} src="/images/logo-nakuma.png" alt="Nakuma Casa Cultural" />;
}

function SiteHeader() {
  return (
    <header className="nav-shell">
      <nav className="nav wrap">
        <a className="brand-logo" href="/" aria-label="Inicio"><Logo /></a>
        <div className="nav-links">
          <a href="/#experiencias">Experiencias</a>
          <a href="/#como-funciona">Cómo funciona</a>
          <a href="/#impacto">Impacto</a>
          <a href="/#redes">Redes</a>
        </div>
        <a className="mini-cta" href="/#contacto">Conecta <ArrowRight size={16} /></a>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <a href="/"><Logo footer /></a>
        <p>Arte · Cultura · Territorio · Comunidad</p>
        <a href="https://www.instagram.com/nakumacc/" target="_blank" rel="noreferrer">@nakumacc ↗</a>
      </div>
    </footer>
  );
}

function SocialPage() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((active - 1 + carousel.length) % carousel.length);
  const next = () => setActive((active + 1) % carousel.length);

  return (
    <main className="social-page">
      <SiteHeader />
      <section className="social-hero">
        <div className="wrap social-hero-grid">
          <div>
            <span className="eyebrow yellow">NUESTRAS REDES</span>
            <h1>Así se vive <span>la comunidad</span> en digital.</h1>
            <p>Una extensión del territorio: historias, encuentros y piezas que mantienen viva la conversación.</p>
          </div>
          <div className="social-hero-logo"><Logo /></div>
        </div>
      </section>

      <section className="social-showcase section">
        <div className="wrap">
          <div className="social-section-head">
            <div><span className="eyebrow purple">POST DESTACADO</span><h2>Una pieza, una puerta de entrada.</h2></div>
            <p>El post principal funciona como una invitación visual al universo de experiencias.</p>
          </div>
          <div className="post-stage">
            <div className="post-frame"><img src="/images/social-post.jpg" alt="Post de redes sociales" /></div>
            <div className="post-note"><span>POST 01</span><strong>Comunicar también es hacer territorio visible.</strong><div className="doodle-line">↝ ✦ 〰</div></div>
          </div>
        </div>
      </section>

      <section className="carousel-section section">
        <div className="wrap">
          <div className="social-section-head light">
            <div><span className="eyebrow cyan">CARRUSEL · 6 SLIDES</span><h2>Desliza la historia.</h2></div>
            <div className="carousel-controls"><button onClick={prev} aria-label="Anterior"><ArrowLeft /></button><span>{String(active + 1).padStart(2,'0')} / 06</span><button onClick={next} aria-label="Siguiente"><ArrowRight /></button></div>
          </div>
          <div className="carousel-stage">
            <button className="carousel-side left" onClick={prev} aria-label="Anterior"><ArrowLeft /></button>
            <div className="carousel-card"><img src={carousel[active]} alt={`Carrusel slide ${active + 1}`} /></div>
            <button className="carousel-side right" onClick={next} aria-label="Siguiente"><ArrowRight /></button>
          </div>
          <div className="carousel-dots">{carousel.map((_, i) => <button key={i} onClick={() => setActive(i)} className={i === active ? 'active' : ''} aria-label={`Ir al slide ${i + 1}`} />)}</div>
        </div>
      </section>

      <section className="youtube-section section">
        <div className="wrap">
          <div className="social-section-head">
            <div><span className="eyebrow yellow">YOUTUBE</span><h2>También contamos lo que pasa en movimiento.</h2></div>
            <p>Video, territorio y memoria para mostrar procesos, encuentros y experiencias de Nakuma.</p>
          </div>
          <div className="youtube-grid">
            <div className="youtube-video">
              <iframe
                src="https://www.youtube.com/embed/1EY8apbJib4"
                title="Nakuma Casa Cultural en YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="youtube-copy">
              <span>CANAL OFICIAL</span>
              <h3>Nakuma también se cuenta en video.</h3>
              <p>Conoce más de sus procesos, encuentros y trabajo cultural desde el territorio.</p>
              <a className="button black" href="https://www.youtube.com/@NakumaCC" target="_blank" rel="noreferrer">Ver canal de YouTube <ArrowRight size={18}/></a>
            </div>
          </div>
        </div>
      </section>

      <section className="stories-section section">
        <div className="wrap">
          <div className="social-section-head">
            <div><span className="eyebrow orange">STORIES</span><h2>Piezas pensadas para pasar rápido, pero quedarse.</h2></div>
            <p>Formato vertical, mensajes directos y la misma energía gráfica de la marca.</p>
          </div>
          <div className="stories-grid">
            <div className="story-phone"><span className="story-index">01</span><img src="/images/social-story-1.jpg" alt="Story 1" /></div>
            <div className="story-phone second"><span className="story-index">02</span><img src="/images/social-story-2.jpg" alt="Story 2" /></div>
            <div className="story-copy"><div className="story-logo-wrap"><Logo /></div><p>La comunicación no vive aparte del proyecto. También ayuda a conectar personas con lo que pasa en el territorio.</p><span className="story-scribble">↳ comparte · conecta · participa</span></div>
          </div>
        </div>
      </section>

      <section className="follow-section section">
        <div className="wrap follow-box">
          <div><span className="eyebrow black-label">SIGAMOS CONECTADOS</span><h2>El territorio también continúa en pantalla.</h2></div>
          <div className="follow-actions">
            <a href="https://www.instagram.com/nakumacc/" target="_blank" rel="noreferrer">Instagram <ArrowRight size={18}/></a>
            <a href="https://www.facebook.com/NakumaCrea/" target="_blank" rel="noreferrer">Facebook <ArrowRight size={18}/></a>
            <a href="https://www.youtube.com/@NakumaCC" target="_blank" rel="noreferrer">YouTube <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section id="inicio" className="hero">
        <div className="hero-doodle doodle-a">↝</div><div className="hero-doodle doodle-b">✦</div><div className="hero-doodle doodle-c">〰</div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow cream">PORTAFOLIO DE EXPERIENCIAS</span>
            <h1>El territorio<br />también <span>enseña.</span></h1>
            <p>Conectamos instituciones con experiencias reales de cultura, aprendizaje, investigación e impacto social.</p>
            <div className="hero-actions"><a className="button black" href="#experiencias">Explorar experiencias <ArrowDownRight size={20} /></a><a className="text-link" href="#manifiesto">Conoce Nakuma <ArrowRight size={18} /></a></div>
          </div>
          <div className="hero-collage" aria-label="Collage comunitario"><div className="photo hero-photo" /><span className="sticker sticker-yellow">ARTE</span><span className="sticker sticker-purple">COMUNIDAD</span><span className="sticker sticker-orange">TERRITORIO</span><div className="scribble">✺</div></div>
        </div>
        <div className="ticker" aria-hidden="true"><div>ARTE ✦ TERRITORIO ✦ COMUNIDAD ✦ CULTURA ✦ APRENDIZAJE ✦ IMPACTO ✦ ARTE ✦ TERRITORIO ✦ COMUNIDAD ✦</div></div>
      </section>

      <section id="manifiesto" className="manifesto section">
        <div className="wrap manifesto-grid">
          <div className="manifesto-image"><div className="photo territory-photo" /><span className="note">Personas, saberes y territorios que crean futuro.</span></div>
          <div className="manifesto-copy"><span className="eyebrow yellow">¿QUÉ ES NAKUMA?</span><h2>Un espacio vivo para aprender, crear y encontrarnos.</h2><p>Nakuma impulsa procesos de arte, educación, memoria y transformación social desde la comunidad. Cada experiencia se diseña para conectar personas con saberes, historias y realidades del territorio.</p><blockquote>“No vienes solo a conocer el territorio. Vienes a construir con quienes lo habitan.”</blockquote></div>
        </div>
      </section>

      <section className="why section"><div className="wrap"><div className="why-head"><span className="eyebrow black-label">¿POR QUÉ NAKUMA?</span><h2>Tres razones para salir del salón y entrar al territorio.</h2></div><div className="why-grid"><article><span>01</span><h3>Territorio real</h3><p>Las experiencias suceden en contextos vivos, no en escenarios simulados.</p></article><article><span>02</span><h3>Comunidad activa</h3><p>El conocimiento se construye con personas, procesos y saberes locales.</p></article><article><span>03</span><h3>A la medida</h3><p>Cada experiencia se diseña según el objetivo académico, social o corporativo.</p></article></div></div></section>

      <section id="experiencias" className="experiences section"><div className="wrap"><div className="section-head"><div><span className="eyebrow purple">ELIGE CÓMO CONECTAR</span><h2>Experiencias para cada institución.</h2></div><p>Cuatro rutas. Un mismo propósito: conectar conocimiento, territorio y comunidad.</p></div><div className="cards">{audiences.map(({ id, kicker, title, copy, color, icon: Icon, image }) => <article className={`experience-card ${color}`} id={id} key={id}><div className="card-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 20%, rgba(0,0,0,.68)), url(${image})` }} /><div className="card-content"><div className="card-meta"><span>{kicker}</span><Icon size={26} strokeWidth={2.2} /></div><h3>{title}</h3><p>{copy}</p><a className="card-link" href="#casos">Ver ejemplo <ArrowRight size={18} /></a></div></article>)}</div><div className="mid-cta"><p>¿Ya sabes qué tipo de experiencia necesita tu institución?</p><a className="button cream-button" href="#contacto">Construyámosla juntos <ArrowRight size={20} /></a></div></div></section>

      <section id="casos" className="cases section"><div className="wrap"><div className="section-head"><div><span className="eyebrow yellow">ASÍ PODRÍA VERSE</span><h2>Experiencias que se vuelven memorables.</h2></div><p>No son paquetes cerrados. Son puntos de partida para imaginar lo que podemos construir contigo.</p></div><div className="case-grid">{cases.map((item, i) => <article className={`case-card ${item.className}`} key={item.title}><div className="case-photo" style={{backgroundImage:`url(${item.image})`}}/><div className="case-copy"><span>{item.tag}</span><h3>{item.title}</h3><p>{item.copy}</p><b>0{i+1} ↗</b></div></article>)}</div></div></section>

      <section id="como-funciona" className="process section"><div className="wrap"><div className="section-head light"><div><span className="eyebrow cyan">DE LA IDEA A LA ACCIÓN</span><h2>¿Cómo funciona?</h2></div><p>No ofrecemos paquetes rígidos. Diseñamos cada experiencia a partir del objetivo de la institución y la realidad del territorio.</p></div><div className="process-grid">{process.map(([number, title, copy]) => <article className="process-card" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="process-collage"><div className="photo hands-photo" /><div className="process-message"><Sparkles size={28} /><strong>Experiencias que siembran conocimiento, comunidad y futuro.</strong></div></div></div></section>

      <section id="impacto" className="impact section"><div className="wrap impact-grid"><div className="impact-copy"><span className="eyebrow orange">LO QUE DEJA CADA EXPERIENCIA</span><h2>Más que una visita.<br />Una conexión real.</h2><ul><li>Aprendizaje situado y experiencias memorables.</li><li>Relación directa con comunidades y actores locales.</li><li>Investigación y creación desde contextos reales.</li><li>Redes, alianzas y procesos de impacto compartido.</li></ul><a className="button black impact-cta" href="#contacto">Quiero construir una experiencia <ArrowRight size={20}/></a></div><div className="impact-visual"><div className="photo impact-photo" /><span className="impact-badge">CONSTRUIR<br />JUNTOS ↗</span></div></div></section>

      <section id="accion" className="action section"><div className="wrap"><div className="action-head"><span className="eyebrow purple">NAKUMA EN ACCIÓN</span><h2>El territorio se ve, se escucha y se vive.</h2></div><div className="gallery">{gallery.map((src, index)=><div className={`gallery-item g${index+1}`} key={src} style={{backgroundImage:`url(${src})`}}><span>{['CREAR','RECORRER','SEMBRAR','ENCONTRARNOS','APRENDER','CONECTAR'][index]}</span></div>)}</div></div></section>

      <section className="testimonial section"><div className="wrap quote-card"><span className="quote-mark">“</span><p>Aquí el aprendizaje no se queda en una diapositiva. Sale al territorio, conversa con la gente y vuelve convertido en experiencia.</p><span className="quote-caption">UNA IDEA QUE RESUME EL ESPÍRITU NAKUMA</span></div></section>

      <section id="contacto" className="contact section"><div className="wrap contact-box"><div><span className="eyebrow black-label">¿HABLAMOS?</span><h2>¿Qué podemos construir juntos?</h2><p>Cuéntanos qué necesita tu institución y diseñemos una experiencia con Nakuma.</p></div><div className="contact-actions"><a className="button cream-button" href="mailto:contacto@nakuma.org">Escríbenos <ArrowRight size={20} /></a><span className="contact-note">Reemplaza este correo por el contacto oficial.</span></div></div></section>

      <SiteFooter />
    </main>
  );
}

function App() {
  const [view, setView] = useState(() => window.location.hash === '#redes' ? 'redes' : 'home');

  useEffect(() => {
    const syncView = () => setView(window.location.hash === '#redes' ? 'redes' : 'home');
    window.addEventListener('hashchange', syncView);
    return () => window.removeEventListener('hashchange', syncView);
  }, []);

  return view === 'redes' ? <SocialPage /> : <HomePage />;
}

export default App;
