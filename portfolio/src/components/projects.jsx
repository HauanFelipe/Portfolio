import { useState } from "react";

import pingoDashboard from "../assets/projects/pingo-de-luz/dashboard.png";
import pingoServicos from "../assets/projects/pingo-de-luz/servicos.png";
import pingoCalendario from "../assets/projects/pingo-de-luz/calendario.png";
import pingoClientes from "../assets/projects/pingo-de-luz/clientes.png";
import pingoEstoque from "../assets/projects/pingo-de-luz/estoque.png";
import pingoFinanceiro from "../assets/projects/pingo-de-luz/financeiro.png";

const pingoScreens = [
  {
    src: pingoDashboard,
    label: "Visão geral",
    alt: "Dashboard do Pingo de Luz com indicadores financeiros, serviços, clientes e estoque",
  },
  {
    src: pingoServicos,
    label: "Serviços",
    alt: "Tela de serviços do Pingo de Luz com filtros e histórico de atendimentos",
  },
  {
    src: pingoCalendario,
    label: "Agenda integrada",
    alt: "Calendário do Pingo de Luz com serviço agendado e criação de eventos",
  },
  {
    src: pingoClientes,
    label: "Gestão de clientes",
    alt: "Cadastro de clientes do Pingo de Luz com pesquisa e status",
  },
  {
    src: pingoEstoque,
    label: "Estoque e alertas",
    alt: "Controle de estoque do Pingo de Luz com variações e alerta de estoque baixo",
  },
  {
    src: pingoFinanceiro,
    label: "Controle financeiro",
    alt: "Resumo financeiro do Pingo de Luz com receitas, despesas, compras e vendas",
  },
];

const upcomingProjects = [
  { number: "02", title: "Próximo projeto" },
  { number: "03", title: "Próximo projeto" },
];

export default function Projects() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section
      id="projetos"
      className="section projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / PROJETOS</p>
          <h2 id="projects-title">
            Trabalhos em <em>destaque.</em>
          </h2>
        </div>
        <p>
          Sistemas criados para organizar
          <br />operações e facilitar decisões.
        </p>
      </div>

      <div className="project-grid">
        <article className="project-card">
          <button
            className="project-preview"
            type="button"
            aria-expanded={showGallery}
            aria-controls="pingo-gallery"
            aria-label={
              showGallery
                ? "Ocultar outras telas do Pingo de Luz"
                : "Mostrar outras telas do Pingo de Luz"
            }
            onClick={() => setShowGallery((current) => !current)}
          >
            <img src={pingoScreens[0].src} alt={pingoScreens[0].alt} />
            <span>{showGallery ? "Ocultar telas" : "Ver mais telas"}</span>
          </button>
          <p className="project-label">PROJETO 01 / SISTEMA DE GESTÃO</p>
          <h3>Pingo de Luz</h3>
          <p className="project-description">
            Sistema de controle interno para um estúdio de furo humanizado e
            body piercing. Reúne serviços, agenda, clientes, estoque e finanças
            em uma única operação.
          </p>
        </article>

        {upcomingProjects.map((project) => (
          <article className="project-card project-placeholder" key={project.number}>
            <div className="project-placeholder-image" aria-hidden="true">
              <span>{project.number}</span>
            </div>
            <p className="project-label">PROJETO {project.number}</p>
            <h3>{project.title}</h3>
            <p className="project-description">
              Este espaço está reservado para um dos próximos trabalhos do
              portfólio.
            </p>
          </article>
        ))}
      </div>

      {showGallery && (
        <div className="project-expanded" id="pingo-gallery">
          <div className="project-expanded-heading">
            <div>
              <p className="project-label">PINGO DE LUZ / OUTRAS TELAS</p>
              <h3>O sistema por dentro</h3>
            </div>
            <button
              className="project-close"
              type="button"
              onClick={() => setShowGallery(false)}
            >
              Fechar
            </button>
          </div>
          <div className="project-gallery">
            {pingoScreens.slice(1).map((screen) => (
              <figure className="project-shot" key={screen.label}>
                <img src={screen.src} alt={screen.alt} loading="lazy" />
                <figcaption>{screen.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
