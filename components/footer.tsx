'use client';

import { motion } from 'motion/react';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rafabragacantor',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@rafabragacantor',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.39a6.252 6.252 0 0 1-2.07-2.07c-.01.39-.01 19.34-.01 19.34-1.16 3.02-4.1 4.72-7.39 4.31-2.91-.36-5.46-2.52-6.19-5.32A6.242 6.242 0 0 1 5.92 12c.5-.1 1-.1 1.5.01V16a2.23 2.23 0 0 0-1.55 1.74c-.21 1.2.6 2.38 1.8 2.58a2.233 2.233 0 0 0 2.65-1.78c.01-.15.01-18.53.01-18.53 3.12 0 3.12 0 3.12 0 .01-1.36-.18-2.73.08-4.01z"/>
      </svg>
    ),
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/5XxPfh8njv8xZ2QIUd9H7t',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.32 7.32 9.48 7.08 5.52 8.28c-.6.18-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.68-1.32 12.12-1.08 16.56 1.56.54.36.72 1.02.36 1.56-.24.6-.96.72-1.62.3z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@RafaBragaCantor',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511996142927?text=Olá%20Rafa!%20Gostaria%20de%20saber%20mais%20sobre%20sua%20agenda%20e%20valores%20para%20shows.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'O que faço', href: '#o-que-faco' },
  { label: 'Spotify', href: '#spotify' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark overflow-hidden border-t border-white/5">
      <style>{`
        @keyframes marquee-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mq-footer { animation: marquee-fwd 24s linear infinite; }

        .social-btn {
          transition: color .2s ease, background .2s ease, transform .2s ease;
        }
        .social-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Glow ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-600/8 blur-[120px] rounded-full pointer-events-none" />

      {/* ── NOME GIGANTE ── */}
      <div className="relative pt-20 pb-10 px-6 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13vw] leading-none uppercase font-black text-center bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent select-none font-outfit"
        >
          RAFA BRAGA
        </motion.h2>
      </div>

      {/* ── MARQUEE ── */}
      <div className="w-full overflow-hidden border-y border-white/5 py-3 mb-14">
        <div className="flex whitespace-nowrap">
          {[0, 1].map(k => (
            <div key={k} className="mq-footer flex shrink-0 items-center gap-8 pr-8">
              {['SAMBA', '✦', 'PAGODE', '✦', 'AO VIVO', '✦', 'CASAMENTOS', '✦', 'EVENTOS', '✦', 'RAFA BRAGA', '✦',
                'SAMBA', '✦', 'PAGODE', '✦', 'AO VIVO', '✦', 'CASAMENTOS', '✦', 'EVENTOS', '✦', 'RAFA BRAGA', '✦'].map((w, i) => (
                <span key={i} className="text-white/15 text-[11px] uppercase tracking-[0.4em] font-sans font-medium">
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── GRID: NAV + SOCIAL + CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-6 md:px-16 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 pb-16 border-b border-white/5">

          {/* Col 1 — Tagline */}
          <div className="flex flex-col gap-4">
            <span className="text-white/25 text-[10px] tracking-[0.4em] uppercase font-sans">Sobre</span>
            <p className="text-white/50 text-sm leading-relaxed font-sans font-light max-w-[220px]">
              Música ao vivo com alma, energia e carisma para os momentos que importam.
            </p>
          </div>

          {/* Col 2 — Nav */}
          <div className="flex flex-col gap-4">
            <span className="text-white/25 text-[10px] tracking-[0.4em] uppercase font-sans">Navegação</span>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white text-sm font-sans tracking-wide transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Social + CTA */}
          <div className="flex flex-col gap-4">
            <span className="text-white/25 text-[10px] tracking-[0.4em] uppercase font-sans">Redes</span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-btn w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/40"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/5511996142927?text=Olá%20Rafa!%20Gostaria%20de%20saber%20mais%20sobre%20sua%20agenda%20e%20valores%20para%20shows."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-500 active:scale-95 transition-all text-white rounded-full text-xs font-bold uppercase tracking-widest w-fit"
            >
              Agendar Show
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 pb-10">
          <p className="text-white/25 text-xs font-sans tracking-widest uppercase">
            © {new Date().getFullYear()} Rafa Braga. Todos os direitos reservados.
          </p>

          <a
            href="https://gabrielcostaluiz.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors text-xs font-sans tracking-[0.15em] uppercase"
          >
            Desenvolvido por
            <span className="text-red-500 group-hover:text-red-400 transition-colors font-bold">
              Gabriel Costa Luiz
            </span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}