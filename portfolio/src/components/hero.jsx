import avatar from "../assets/images/avatar.png";
export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="greeting">Olá, eu sou o Hauan.</p>
        <h1 id="hero-title">
          DESENVOLVEDOR
          <br />
          <span>FULL STACK.</span>
        </h1>
        <p className="intro">
          Transformo ideias em experiências digitais.
          <br />
          Com atenção aos detalhes, do primeiro conceito
          <br className="desktop-break" /> à última linha de código.
        </p>
        <a className="project-link" href="#projetos">
          Conheça meus projetos <span className="link-line"></span>
        </a>
      </div>
      <div className="portrait-stage">
        <img
          src={avatar}
          alt="Avatar de Hauan Felipe com iluminação roxa"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
