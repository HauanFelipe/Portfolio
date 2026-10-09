import { useEffect, useRef, useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const root = useRef(null);
  useEffect(() => {
    function dismiss(event) {
      if (event.type === "keydown" && event.key === "Escape") {
        setOpen(false);
        if (open) root.current?.querySelector("button")?.focus();
      }
      if (event.type === "pointerdown" && !root.current?.contains(event.target))
        setOpen(false);
    }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", dismiss);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, [open]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-10% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="header" ref={root}>
      <a className="wordmark" href="#inicio" aria-label="Hauan Felipe, início">
        Hauan<span>Felipe</span>
        <b>.</b>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </button>
      <nav
        className={open ? "open" : ""}
        onClick={() => setOpen(false)}
        id="navigation"
        aria-label="Navegação principal"
      >
        <a className={active === "inicio" ? "active" : ""} href="#inicio">
          Início
        </a>
        <a className={active === "projetos" ? "active" : ""} href="#projetos">
          Projetos
        </a>
        <a className={active === "sobre" ? "active" : ""} href="#sobre">
          Sobre mim
        </a>
        <a className={active === "contato" ? "active" : ""} href="#contato">
          Contato
        </a>
      </nav>
      <a className="nav-contact" href="#contato">
        Vamos conversar
      </a>
    </header>
  );
}
