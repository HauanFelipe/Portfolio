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
      <div className="header-socials" role="group" aria-label="Redes sociais">
        <a href="https://www.instagram.com/hauan.dev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="https://wa.me/5531993323813" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 21l1.6-4.9A8.5 8.5 0 1 1 20.5 11.8Z" />
            <path d="m8.3 7.5 1.4 2.6-1 1.1a9.2 9.2 0 0 0 4.1 4.1l1.1-1 2.6 1.4c-.3 1.5-1.2 2-2.4 1.7-3.5-.8-6.8-4.1-7.6-7.6-.3-1.2.3-2.1 1.8-2.3Z" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/hauanfelipe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 3 0 3.57 1.97 3.57 4.53v5.24Z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
