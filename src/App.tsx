import React, { useState } from 'react';
import { NitkaCard } from './components/NitkaCard';
import { CardTheme } from './types';
import { Sparkles, SlidersHorizontal, Image as ImageIcon, Check } from 'lucide-react';

const TAGLINE_PRESETS = [
  "Form without compromise.",
  "Intimate architecture for the modern silhouette.",
  "Sculpted in silence. Worn in warmth.",
  "Tactile poetry in motion.",
];

// Curated warm-toned minimalist editorial samples for instant demo testing
const DEMO_SAMPLES = [
  {
    name: 'Sample A (Linen Silhouette)',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sample B (Draped Clay)',
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
  },
];

export default function App() {
  const [theme, setTheme] = useState<CardTheme>('blush-cream');
  const [tagline, setTagline] = useState<string>(TAGLINE_PRESETS[0]);
  const [detailLabel, setDetailLabel] = useState<string>('Drop 01');
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [mediaFit, setMediaFit] = useState<'cover' | 'contain'>('cover');
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '4:5'>('9:16');
  const [showTools, setShowTools] = useState<boolean>(false);

  const toggleFit = () => {
    setMediaFit((prev) => (prev === 'cover' ? 'contain' : 'cover'));
  };

  return (
    <main className="min-h-screen w-full bg-[#EDE4DD] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 select-none overflow-x-hidden">
      {/* Subtle background ambient warmth */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(247,238,232,0.6)_0%,rgba(219,197,189,0.3)_100%)]" />

      {/* Main Single Card Stage */}
      <div className="relative z-10 w-full flex flex-col items-center max-w-[460px]">
        {/* Compact Quick-Switcher Utility Bar */}
        <div className="w-full flex items-center justify-between mb-3 px-2 text-[#764F44]">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-semibold text-[#261612]">
              NITKA LOVE
            </span>
            <span className="text-[10px] text-[#764F44]/70 font-mono">• Preview Card</span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick Theme Dots */}
            <div className="flex items-center bg-[#FAF5F0]/80 p-1 rounded-full border border-[#D9C4BA] shadow-xs">
              <button
                type="button"
                onClick={() => setTheme('blush-cream')}
                title="Blush Satin Theme"
                className={`w-4 h-4 rounded-full bg-[#F7EEE8] border border-[#C3715C]/40 transition-transform ${
                  theme === 'blush-cream' ? 'scale-125 ring-2 ring-[#C3715C]' : 'opacity-70 hover:opacity-100'
                }`}
              />
              <button
                type="button"
                onClick={() => setTheme('terracotta-ink')}
                title="Terracotta Ground Theme"
                className={`w-4 h-4 rounded-full bg-[#B86854] border border-[#8C412F] ml-1.5 transition-transform ${
                  theme === 'terracotta-ink' ? 'scale-125 ring-2 ring-[#261612]' : 'opacity-70 hover:opacity-100'
                }`}
              />
              <button
                type="button"
                onClick={() => setTheme('dusty-rose')}
                title="Dusty Rose Theme"
                className={`w-4 h-4 rounded-full bg-[#E7CFCA] border border-[#8A4637]/40 ml-1.5 transition-transform ${
                  theme === 'dusty-rose' ? 'scale-125 ring-2 ring-[#8A4637]' : 'opacity-70 hover:opacity-100'
                }`}
              />
            </div>

            {/* Toggle fine controls */}
            <button
              type="button"
              onClick={() => setShowTools(!showTools)}
              className={`p-1.5 rounded-full border transition-colors ${
                showTools
                  ? 'bg-[#261612] text-[#FAF5EF] border-[#261612]'
                  : 'bg-[#FAF5EF]/90 text-[#764F44] border-[#D9C4BA] hover:text-[#261612]'
              }`}
              title="Card options & copy"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Collapsible Demo Adjuster Tray */}
        {showTools && (
          <div className="w-full mb-4 p-3.5 rounded-2xl bg-[#FAF5EF]/95 backdrop-blur-md border border-[#DEC4B8] shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-3 text-xs">
              {/* Tagline selection */}
              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-[#764F44] mb-1.5 font-semibold">
                  Select or Test Punchy Taglines
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {TAGLINE_PRESETS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setTagline(p)}
                      className={`text-left px-2.5 py-1.5 rounded-lg border text-[11px] transition-colors flex items-center justify-between ${
                        tagline === p
                          ? 'bg-[#C3715C] text-[#FAF5EF] border-[#C3715C] font-medium'
                          : 'bg-white/60 text-[#261612] border-[#E8D4CC] hover:bg-white'
                      }`}
                    >
                      <span className="truncate">{p}</span>
                      {tagline === p && <Check className="w-3 h-3 shrink-0 ml-1" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aspect Ratio & Media Quick Test */}
              <div className="flex items-center justify-between pt-1 border-t border-[#DEC4B8]/60">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#764F44]">Ratio:</span>
                  <button
                    type="button"
                    onClick={() => setAspectRatio('9:16')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      aspectRatio === '9:16'
                        ? 'bg-[#261612] text-[#FAF5EF]'
                        : 'bg-[#EDE4DD] text-[#764F44]'
                    }`}
                  >
                    9:16 Story
                  </button>
                  <button
                    type="button"
                    onClick={() => setAspectRatio('4:5')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      aspectRatio === '4:5'
                        ? 'bg-[#261612] text-[#FAF5EF]'
                        : 'bg-[#EDE4DD] text-[#764F44]'
                    }`}
                  >
                    4:5 Post
                  </button>
                </div>

                {/* Instant demo photo sample load */}
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-[#764F44]">Demo Visual:</span>
                  <button
                    type="button"
                    onClick={() => setMediaUrl(DEMO_SAMPLES[0].url)}
                    className="px-2 py-0.5 rounded bg-[#C3715C]/15 text-[#8F4A38] hover:bg-[#C3715C]/25 text-[10px] font-medium"
                  >
                    Sample 1
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaUrl(DEMO_SAMPLES[1].url)}
                    className="px-2 py-0.5 rounded bg-[#C3715C]/15 text-[#8F4A38] hover:bg-[#C3715C]/25 text-[10px] font-medium"
                  >
                    Sample 2
                  </button>
                  {mediaUrl && (
                    <button
                      type="button"
                      onClick={() => setMediaUrl(null)}
                      className="px-2 py-0.5 rounded bg-[#261612]/10 text-[#261612] hover:bg-[#261612]/20 text-[10px]"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* THE STANDALONE NITKA LOVE CARD COMPONENT */}
        <NitkaCard
          theme={theme}
          brandName="Nitka Love"
          tagline={tagline}
          detailLabel={detailLabel}
          mediaUrl={mediaUrl}
          mediaFit={mediaFit}
          onMediaChange={setMediaUrl}
          onToggleFit={toggleFit}
          aspectRatio={aspectRatio}
        />

        {/* Minimal Subtle Helper Tip below the card */}
        <p className="mt-3 text-[11px] text-[#8C6B61] text-center font-mono">
          Drag & drop your campaign photo onto the card or click the frame to upload.
        </p>
      </div>
    </main>
  );
}
