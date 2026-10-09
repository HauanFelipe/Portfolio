import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function App() {
  return (
    <>
      <a className="skip" href="#inicio">
        Pular para o conteúdo
      </a>
      <div className="site-shell">
        <Header />
        <main>
          <Hero />
          <Projects />
          <section
            id="sobre"
            className="section about"
            aria-labelledby="about-title"
          >
            <div>
              <p className="eyebrow">02 / SOBRE MIM</p>
              <h2 id="about-title">
                Por trás
                <br />
                de cada <em>detalhe.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                Sou Hauan Felipe. Gosto de aproximar criatividade e tecnologia
                para construir experiências que façam sentido para quem está do
                outro lado da tela.
              </p>
              <p>
                Este é meu espaço para reunir ideias, experimentar novas
                possibilidades e compartilhar minha evolução no desenvolvimento
                web.
              </p>
              <div className="principles">
                <span>Design com intenção</span>
                <span>Código com cuidado</span>
                <span>Aprendizado contínuo</span>
              </div>
            </div>
          </section>
          <section
            id="contato"
            className="section contact"
            aria-labelledby="contact-title"
          >
            <p className="eyebrow">03 / CONTATO</p>
            <h2 id="contact-title">
              Boas ideias começam
              <br />
              com uma <em>conversa.</em>
            </h2>
            <p>Meus canais de contato estarão disponíveis em breve.</p>
            <a className="back-top" href="#inicio">
              Voltar ao início
            </a>
          </section>
        </main>
        <footer className="footer">
          <a className="wordmark" href="#inicio">
            hauan<span>felipe</span>
            <b>.</b>
          </a>
          <p>Feito com criatividade, código e café.</p>
          <span>© 2026 Hauan Felipe</span>
        </footer>
      </div>
    </>
  );
}
