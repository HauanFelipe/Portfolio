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
            <p>Tem um projeto em mente? Preencha os campos abaixo e me conte sua ideia.</p>
            <form
              className="contact-form"
              action="https://formsubmit.co/hauanfeliperibeiro@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Novo contato pelo portfólio — Hauan Felipe" />
              <input type="hidden" name="_template" value="table" />
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Seu nome</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Como posso te chamar?"
                    maxLength={120}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Seu e-mail</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="voce@exemplo.com"
                    maxLength={254}
                    required
                  />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Sua mensagem</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Conte um pouco sobre o seu projeto e como posso ajudar."
                  rows={5}
                  maxLength={5000}
                  required
                />
              </div>
              <button className="contact-submit" type="submit">
                Enviar mensagem <span aria-hidden="true">↗</span>
              </button>
            </form>
            <a className="back-top" href="#inicio">
              Voltar ao início
            </a>
          </section>
        </main>
        <footer className="footer">
          <a className="wordmark" href="#inicio">
            Hauan<span>Felipe</span>
            <b>.</b>
          </a>
          <span>© 2026 Hauan Felipe</span>
        </footer>
      </div>
    </>
  );
}
