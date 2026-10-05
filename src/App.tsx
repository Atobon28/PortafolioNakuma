import { ArrowDownRight, ArrowRight, Building2, GraduationCap, Landmark, School, Sparkles } from 'lucide-react';

const audiences = [
  {
    id: 'universidades',
    kicker: '01 / INVESTIGA',
    title: 'Universidades',
    copy: 'Investigación aplicada, trabajo de campo, mapeos sociales y laboratorios vivos.',
    color: 'yellow',
    icon: GraduationCap,
    image: '/images/universidades.png',
  },
  {
    id: 'colegios',
    kicker: '02 / EXPLORA',
    title: 'Colegios',
    copy: 'Experiencias pedagógicas, arte, cultura, huerta y aprendizaje situado.',
    color: 'purple',
    icon: School,
    image: '/images/colegios.png',
  },
  {
    id: 'empresas',
    kicker: '03 / CONECTA',
    title: 'Empresas',
    copy: 'Voluntariado corporativo, bienestar, ESG y experiencias con propósito.',
    color: 'orange',
    icon: Building2,
    image: '/images/empresas.png',
  },
  {
    id: 'financiero',
    kicker: '04 / TRANSFORMA',
    title: 'Sector financiero',
    copy: 'Diagnóstico territorial, investigación social y proyectos de impacto.',
    color: 'cyan',
    icon: Landmark,
    image: '/images/sector-financiero.png',
  },
];

const process = [
  ['01', 'Conversamos', 'Entendemos el reto, los objetivos y el tipo de experiencia que necesita tu institución.'],
  ['02', 'Diseñamos', 'Construimos la experiencia junto a la comunidad y el territorio.'],
  ['03', 'Vivimos', 'Llevamos la experiencia a campo: observar, crear, aprender y participar.'],
  ['04', 'Compartimos', 'Cerramos con aprendizajes, resultados y evidencias del proceso.'],
];

function App() {
  return (
    <main>
      <header className="nav-shell">
        <nav className="nav wrap">
          <a className="brand" href="#inicio" aria-label="Nakuma inicio">
            <span className="brand-main">NAKUMA</span>
            <span className="brand-sub">CASA CULTURAL</span>
          </a>
          <div className="nav-links">
            <a href="#experiencias">Experiencias</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#impacto">Impacto</a>
          </div>
          <a className="mini-cta" href="#contacto">Conecta <ArrowRight size={16} /></a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-doodle doodle-a">↝</div>
        <div className="hero-doodle doodle-b">✦</div>
        <div className="hero-doodle doodle-c">〰</div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow cream">PORTAFOLIO DE EXPERIENCIAS</span>
            <h1>El territorio<br />también <span>enseña.</span></h1>
            <p>Conectamos instituciones con experiencias reales de cultura, aprendizaje, investigación e impacto social.</p>
            <div className="hero-actions">
              <a className="button black" href="#experiencias">Explorar experiencias <ArrowDownRight size={20} /></a>
              <a className="text-link" href="#manifiesto">Conoce Nakuma <ArrowRight size={18} /></a>
            </div>
          </div>

          <div className="hero-collage" aria-label="Collage comunitario Nakuma">
            <div className="photo hero-photo" />
            <span className="sticker sticker-yellow">ARTE</span>
            <span className="sticker sticker-purple">COMUNIDAD</span>
            <span className="sticker sticker-orange">TERRITORIO</span>
            <div className="scribble">✺</div>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div>ARTE ✦ TERRITORIO ✦ COMUNIDAD ✦ CULTURA ✦ APRENDIZAJE ✦ IMPACTO ✦ ARTE ✦ TERRITORIO ✦ COMUNIDAD ✦</div>
        </div>
      </section>

      <section id="manifiesto" className="manifesto section">
        <div className="wrap manifesto-grid">
          <div className="manifesto-image">
            <div className="photo territory-photo" />
            <span className="note">Personas, saberes y territorios que crean futuro.</span>
          </div>
          <div className="manifesto-copy">
            <span className="eyebrow yellow">¿QUÉ ES NAKUMA?</span>
            <h2>Un espacio vivo para aprender, crear y encontrarnos.</h2>
            <p>Nakuma impulsa procesos de arte, educación, memoria y transformación social desde la comunidad. Cada experiencia se diseña para conectar personas con saberes, historias y realidades del territorio.</p>
            <blockquote>“No vienes solo a conocer el territorio. Vienes a construir con quienes lo habitan.”</blockquote>
          </div>
        </div>
      </section>

      <section id="experiencias" className="experiences section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow purple">ELIGE CÓMO CONECTAR</span>
              <h2>Experiencias para cada institución.</h2>
            </div>
            <p>Cuatro rutas. Un mismo propósito: conectar conocimiento, territorio y comunidad.</p>
          </div>
          <div className="cards">
            {audiences.map(({ id, kicker, title, copy, color, icon: Icon, image }) => (
              <article className={`experience-card ${color}`} id={id} key={id}>
                <div className="card-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 20%, rgba(0,0,0,.72)), url(${image})` }} />
                <div className="card-content">
                  <div className="card-meta"><span>{kicker}</span><Icon size={26} strokeWidth={2.2} /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <button aria-label={`Ver experiencias para ${title}`}>Ver experiencias <ArrowRight size={18} /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="process section">
        <div className="wrap">
          <div className="section-head light">
            <div>
              <span className="eyebrow cyan">DE LA IDEA A LA ACCIÓN</span>
              <h2>¿Cómo funciona?</h2>
            </div>
            <p>No ofrecemos paquetes rígidos. Diseñamos cada experiencia a partir del objetivo de la institución y la realidad del territorio.</p>
          </div>
          <div className="process-grid">
            {process.map(([number, title, copy]) => (
              <article className="process-card" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="process-collage">
            <div className="photo hands-photo" />
            <div className="process-message"><Sparkles size={28} /><strong>Experiencias que siembran conocimiento, comunidad y futuro.</strong></div>
          </div>
        </div>
      </section>

      <section id="impacto" className="impact section">
        <div className="wrap impact-grid">
          <div className="impact-copy">
            <span className="eyebrow orange">LO QUE DEJA CADA EXPERIENCIA</span>
            <h2>Más que una visita.<br />Una conexión real.</h2>
            <ul>
              <li>Aprendizaje situado y experiencias memorables.</li>
              <li>Relación directa con comunidades y actores locales.</li>
              <li>Investigación y creación desde contextos reales.</li>
              <li>Redes, alianzas y procesos de impacto compartido.</li>
            </ul>
          </div>
          <div className="impact-visual">
            <div className="photo impact-photo" />
            <span className="impact-badge">CONSTRUIR<br />JUNTOS ↗</span>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact section">
        <div className="wrap contact-box">
          <div>
            <span className="eyebrow black-label">¿HABLAMOS?</span>
            <h2>¿Qué podemos construir juntos?</h2>
            <p>Cuéntanos qué necesita tu institución y diseñemos una experiencia con Nakuma.</p>
          </div>
          <div className="contact-actions">
            <a className="button cream-button" href="mailto:contacto@nakuma.org">Escríbenos <ArrowRight size={20} /></a>
            <span className="contact-note">Reemplaza este correo por el contacto oficial.</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div className="brand footer-brand"><span className="brand-main">NAKUMA</span><span className="brand-sub">CASA CULTURAL</span></div>
          <p>Arte · Cultura · Territorio · Comunidad</p>
          <a href="https://www.instagram.com/nakumacc/" target="_blank" rel="noreferrer">@nakumacc ↗</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
