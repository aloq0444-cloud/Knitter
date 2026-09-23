import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { CardTheme } from '../types';
import { MediaDropzone } from './MediaDropzone';

interface NitkaCardProps {
  theme: CardTheme;
  brandName: string;
  tagline: string;
  detailLabel: string;
  mediaUrl: string | null;
  mediaFit: 'cover' | 'contain';
  onMediaChange: (url: string | null) => void;
  onToggleFit: () => void;
  aspectRatio: '9:16' | '4:5';
}

export const NitkaCard: React.FC<NitkaCardProps> = ({
  theme,
  brandName,
  tagline,
  detailLabel,
  mediaUrl,
  mediaFit,
  onMediaChange,
  onToggleFit,
  aspectRatio,
}) => {
  // Theme color definitions strictly within warm pastel spectrum
  const themeStyles = {
    'blush-cream': {
      cardBg: 'bg-[#F7EEE8]',
      cardBorder: 'border-[#E5CEC4]',
      inkText: 'text-[#261612]',
      subText: 'text-[#7D5347]',
      accentBg: 'bg-[#C3715C]',
      accentText: 'text-[#FAF5F0]',
      innerBorder: 'border-[#E5CEC4]/60',
      badgeBg: 'bg-[#FAF5EF]/90',
      badgeBorder: 'border-[#DEC1B6]',
      taglineColor: 'text-[#261612]',
      shadow: 'shadow-[0_24px_50px_-12px_rgba(75,41,33,0.18)]',
    },
    'terracotta-ink': {
      cardBg: 'bg-[#B86854]',
      cardBorder: 'border-[#D98F7D]/40',
      inkText: 'text-[#FAF4EE]',
      subText: 'text-[#F5D8CF]',
      accentBg: 'bg-[#FAF4EE]',
      accentText: 'text-[#8C412F]',
      innerBorder: 'border-[#FAF4EE]/25',
      badgeBg: 'bg-[#8F4331]/60',
      badgeBorder: 'border-[#FAF4EE]/30',
      taglineColor: 'text-[#FAF4EE]',
      shadow: 'shadow-[0_24px_50px_-12px_rgba(50,22,16,0.3)]',
    },
    'dusty-rose': {
      cardBg: 'bg-[#E7CFCA]',
      cardBorder: 'border-[#D4B5AD]',
      inkText: 'text-[#2B1713]',
      subText: 'text-[#744E46]',
      accentBg: 'bg-[#8A4637]',
      accentText: 'text-[#FAF5F2]',
      innerBorder: 'border-[#D4B5AD]/70',
      badgeBg: 'bg-[#FAF5F2]/80',
      badgeBorder: 'border-[#D4B5AD]',
      taglineColor: 'text-[#2B1713]',
      shadow: 'shadow-[0_24px_50px_-12px_rgba(65,35,28,0.2)]',
    },
  }[theme];

  return (
    <div
      id="nitka-love-card"
      className={`relative w-full max-w-[420px] mx-auto rounded-[28px] p-6 sm:p-7 border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
        themeStyles.cardBg
      } ${themeStyles.cardBorder} ${themeStyles.shadow} ${
        aspectRatio === '9:16' ? 'aspect-[9/16] min-h-[660px]' : 'aspect-[4/5] min-h-[520px]'
      }`}
    >
      {/* Subtle architectural perimeter hairline */}
      <div
        className={`absolute inset-3.5 rounded-[22px] border pointer-events-none transition-colors duration-500 ${themeStyles.innerBorder}`}
      />

      {/* TOP HEADER: Collection stamp & Minimal Brand Mark */}
      <div className="relative z-10 flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] font-medium rounded-full border backdrop-blur-sm transition-colors ${themeStyles.badgeBg} ${themeStyles.badgeBorder} ${themeStyles.inkText}`}
          >
            {detailLabel}
          </span>
        </div>

        <div className="flex items-center gap-1.5 opacity-80">
          <span className={`text-[10px] tracking-widest font-mono uppercase ${themeStyles.subText}`}>
            SS / 2026
          </span>
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              theme === 'terracotta-ink' ? 'bg-[#FAF4EE]' : 'bg-[#C3715C]'
            }`}
          />
        </div>
      </div>

      {/* BRAND TYPOGRAPHY: Confident, monumental, high-impact */}
      <div className="relative z-10 my-3">
        <div className="flex flex-col">
          <h1
            className={`font-editorial text-[38px] sm:text-[44px] tracking-[-0.03em] leading-[0.92] font-semibold select-none ${themeStyles.inkText}`}
          >
            <span>NITKA</span>
            <span className="font-editorial italic font-normal ml-2 text-[36px] sm:text-[42px] tracking-tight opacity-90">
              Love
            </span>
          </h1>
          <p
            className={`text-[9.5px] uppercase tracking-[0.38em] font-mono mt-1.5 font-medium ${themeStyles.subText}`}
          >
            Boutique Atelier • Capsule Edition
          </p>
        </div>
      </div>

      {/* VISUAL FOCAL POINT: Architectural Crop Window */}
      <div className="relative z-10 flex-1 my-2 min-h-[220px] max-h-[380px] w-full">
        <MediaDropzone
          mediaUrl={mediaUrl}
          onMediaChange={onMediaChange}
          mediaFit={mediaFit}
          onToggleFit={onToggleFit}
          theme={theme}
        />
      </div>

      {/* BOTTOM SECTION: Punchy Tagline & Strong Contrast Action */}
      <div className="relative z-10 pt-3 pb-1 flex flex-col gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-4 h-[1px] ${
                theme === 'terracotta-ink' ? 'bg-[#FAF4EE]/50' : 'bg-[#C3715C]'
              }`}
            />
            <span
              className={`text-[9px] uppercase tracking-[0.3em] font-mono font-medium ${themeStyles.subText}`}
            >
              Editorial Thesis
            </span>
          </div>

          <h2
            className={`font-editorial text-[22px] sm:text-[25px] leading-[1.12] tracking-tight font-normal ${themeStyles.taglineColor}`}
          >
            {tagline}
          </h2>
        </div>

        {/* Tactile interaction pill: confident, minimal punch */}
        <div className="flex items-center justify-between pt-1 border-t border-current/10">
          <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest opacity-75">
            <span className={themeStyles.subText}>Private Preview</span>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-xs tracking-wider uppercase transition-transform active:scale-95 duration-200 cursor-pointer ${themeStyles.accentBg} ${themeStyles.accentText}`}
          >
            <span>View Collection</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};
