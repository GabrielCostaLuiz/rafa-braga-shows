'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useAudio } from '@/context/audio-context';

declare global {
  interface Window {
    onSpotifyIframeApiReady: (IFrameAPI: any) => void;
  }
}

import SectionHeader from '@/components/section-header';

const MARQUEE_TOP = [
  'OUÇA AGORA', '—', 'LISTEN', '—', 'SIGA NO SPOTIFY', '—', 'STREAM', '—',
  'OUÇA AGORA', '—', 'LISTEN', '—', 'SIGA NO SPOTIFY', '—', 'STREAM', '—',
];

const MARQUEE_BOTTOM = [
  'MÚSICA', '✦', 'ARTE', '✦', 'FLOW', '✦', 'CULTURA', '✦', 'BEATS', '✦',
  'MÚSICA', '✦', 'ARTE', '✦', 'FLOW', '✦', 'CULTURA', '✦', 'BEATS', '✦',
];

export default function SpotifySection() {
  const { isPlaying, activeSource, pauseLocal, setSpotifyController, setSpotifyPlayingStatus } = useAudio();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const localControllerRef = useRef<any>(null);

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      const element = iframeRef.current;
      if (!element) return;

      const options = {
        width: '100%',
        height: '370',
        uri: 'spotify:artist:5XxPfh8njv8xZ2QIUd9H7t',
        theme: '0',
      };

      const callback = (EmbedController: any) => {
        localControllerRef.current = EmbedController;
        setSpotifyController(EmbedController);

        let wasSpotifyPlaying = false;

        EmbedController.addListener('playback_update', (e: any) => {
          const isSpotifyPlayingNow = e.data && !e.data.isPaused;

          if (!wasSpotifyPlaying && isSpotifyPlayingNow) {
            pauseLocal();
          }

          wasSpotifyPlaying = isSpotifyPlayingNow;
          setSpotifyPlayingStatus(isSpotifyPlayingNow);
        });
      };

      IFrameAPI.createController(element, options, callback);
    };

    if (!document.getElementById('spotify-iframe-api')) {
      const script = document.createElement('script');
      script.id = 'spotify-iframe-api';
      script.src = 'https://open.spotify.com/embed/iframe-api/v1';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [pauseLocal, setSpotifyController, setSpotifyPlayingStatus]);

  useEffect(() => {
    if (activeSource === 'local' && isPlaying && localControllerRef.current) {
      localControllerRef.current.pause();
    }
  }, [activeSource, isPlaying]);

  return (
    <section className="relative bg-black/30 overflow-hidden" id="spotify">
      <style>{`
        @keyframes marquee-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .mq-fwd { animation: marquee-fwd 18s linear infinite; }
        .mq-rev { animation: marquee-rev 22s linear infinite; }
      `}</style>

      {/* ── MARQUEE TOP ── */}
      <div className="w-full overflow-hidden bg-[#1DB954] py-3">
        <div className="flex whitespace-nowrap">
          {[0, 1].map(k => (
            <div key={k} className="mq-fwd flex shrink-0 items-center gap-8 pr-8">
              {MARQUEE_TOP.map((w, i) => (
                <span
                  key={i}
                  className="text-black text-[11px] font-bold uppercase tracking-[0.35em] font-sans"
                >
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTEÚDO ORIGINAL ── */}
      <div className="py-24 px-6 md:px-20 relative">

        {/* Luz de fundo ambiental */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#1DB954]/10 blur-[150px] rounded-[100%] pointer-events-none" />

        {/* Header da Seção */}
        <SectionHeader
          titlePart1="OUÇA NO"
          titlePart2="SPOTIFY"
          subtitle="Meus maiores sucessos e melhores momentos musicais na palma da sua mão."
          barColorClass="bg-[#1DB954]"
          highlightColorClass="text-[#1DB954]"
          className="mb-16 relative z-10"
        />

        {/* Container do Player */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-4xl mx-auto rounded-[24px] p-2 bg-white/5 ring-1 ring-white/10 relative z-10 backdrop-blur-md shadow-2xl"
        >
          <div className="w-full bg-black/50 rounded-[16px] overflow-hidden">
            <iframe
              ref={iframeRef}
              data-testid="embed-iframe"
              style={{ borderRadius: '16px', border: 'none', background: 'transparent' }}
              src="https://open.spotify.com/embed/artist/5XxPfh8njv8xZ2QIUd9H7t?utm_source=generator&theme=0"
              width="100%"
              height="370"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Botão de Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12 relative z-10"
        >
          <a
            href="https://open.spotify.com/artist/5XxPfh8njv8xZ2QIUd9H7t"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#1DB954] text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#1ed760] hover:scale-105 active:scale-95 transition-all outline-none flex items-center gap-3 drop-shadow-[0_0_20px_rgba(29,185,84,0.4)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.32 7.32 9.48 7.08 5.52 8.28c-.6.18-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.68-1.32 12.12-1.08 16.56 1.56.54.36.72 1.02.36 1.56-.24.6-.96.72-1.62.3z" />
            </svg>
            Seguir Artista
          </a>
        </motion.div>
      </div>

      {/* ── MARQUEE BOTTOM ── */}
      <div className="w-full overflow-hidden border-t border-white/5 py-4">
        <div className="flex whitespace-nowrap">
          {[0, 1].map(k => (
            <div key={k} className="mq-rev flex shrink-0 items-center gap-10 pr-10">
              {MARQUEE_BOTTOM.map((w, i) => (
                <span
                  key={i}
                  className="text-white/10 text-[11px] uppercase tracking-[0.5em] font-sans"
                >
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}