'use client';

import { motion } from 'motion/react';
import { FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rafabragacantor',
    icon: <FaInstagram size={18} />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@rafabragacantor',
    icon: <FaTiktok size={18} />,
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/5XxPfh8njv8xZ2QIUd9H7t',
    icon: <FaSpotify size={18} />,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@RafaBragaCantor',
    icon: <FaYoutube size={18} />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511996142927?text=Olá%20Rafa!%20Gostaria%20de%20saber%20mais%20sobre%20sua%20agenda%20e%20valores%20para%20shows.',
    icon: <FaWhatsapp size={18} />,
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