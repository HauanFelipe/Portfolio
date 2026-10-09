import { useEffect, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);
  const activeScreen = pingoScreens[activeIndex];

  useEffect(() => {
    if (!showGallery) return;

    const dialog = galleryRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [showGallery]);

  function changeScreen(direction) {
    setActiveIndex((current) =>
      (current + direction + pingoScreens.length) % pingoScreens.length
    );
  }

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
            aria-haspopup="dialog"
            aria-controls="pingo-gallery"
            aria-label="Ver imagens do projeto Pingo de Luz"
            onClick={() => {
              setActiveIndex(0);
              setShowGallery(true);
            }}
          >
            <img src={pingoScreens[0].src} alt={pingoScreens[0].alt} />
            <span>Ver imagens do projeto ↗</span>
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

      <dialog
        ref={galleryRef}
        className="project-dialog"
        id="pingo-gallery"
        aria-labelledby="pingo-gallery-title"
        onCancel={() => setShowGallery(false)}
        onClose={() => setShowGallery(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setShowGallery(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            changeScreen(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div className="project-dialog-content">
          <div className="project-dialog-heading">
            <div>
              <p className="project-label">PROJETO 01 / SISTEMA DE GESTÃO</p>
              <h3 id="pingo-gallery-title">Pingo de Luz</h3>
            </div>
            <button
              className="project-close"
              type="button"
              onClick={() => setShowGallery(false)}
            >
              Fechar ×
            </button>
          </div>
          {showGallery && (
            <figure className="project-shot">
              <img src={activeScreen.src} alt={activeScreen.alt} />
              <figcaption aria-live="polite" aria-atomic="true">
                {activeScreen.label} · {activeIndex + 1} de {pingoScreens.length}
              </figcaption>
            </figure>
          )}
          <div className="project-gallery-controls">
            <button type="button" onClick={() => changeScreen(-1)}>
              ← Anterior
            </button>
            <button type="button" onClick={() => changeScreen(1)}>
              Próxima →
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
