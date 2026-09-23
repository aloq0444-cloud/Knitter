import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon, X, Move } from 'lucide-react';

interface MediaDropzoneProps {
  mediaUrl: string | null;
  onMediaChange: (url: string | null) => void;
  mediaFit: 'cover' | 'contain';
  onToggleFit: () => void;
  theme: 'blush-cream' | 'terracotta-ink' | 'dusty-rose';
}

export const MediaDropzone: React.FC<MediaDropzoneProps> = ({
  mediaUrl,
  onMediaChange,
  mediaFit,
  onToggleFit,
  theme,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onMediaChange(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const isTerracotta = theme === 'terracotta-ink';

  return (
    <div
      id="nitka-focal-point"
      className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer transition-all duration-300"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => {
        if (!mediaUrl) fileInputRef.current?.click();
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleInputChange}
      />

      {mediaUrl ? (
        <div className="relative w-full h-full bg-[#1F1412]/5">
          <img
            src={mediaUrl}
            alt="Nitka Love campaign focal"
            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
              mediaFit === 'cover' ? 'object-cover' : 'object-contain p-3'
            }`}
          />

          {/* Minimal Floating Media Controls */}
          <div
            className="absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onToggleFit}
              title={`Toggle fit (${mediaFit})`}
              className="p-1.5 rounded-full bg-[#261612]/80 text-[#FAF4EF] hover:bg-[#261612] transition-colors backdrop-blur-sm shadow-sm text-xs flex items-center gap-1 px-2 font-mono"
            >
              <Move className="w-3 h-3" />
              <span>{mediaFit}</span>
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="Replace photo"
              className="p-1.5 rounded-full bg-[#261612]/80 text-[#FAF4EF] hover:bg-[#261612] transition-colors backdrop-blur-sm shadow-sm"
            >
              <Upload className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onMediaChange(null)}
              title="Remove photo"
              className="p-1.5 rounded-full bg-[#261612]/80 text-[#FAF4EF] hover:bg-[#261612] transition-colors backdrop-blur-sm shadow-sm"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Subtle bottom gradient for editorial depth */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#261612]/20 via-transparent to-transparent opacity-60" />
        </div>
      ) : (
        /* Architectural Luxury Placeholder Frame awaiting user's media */
        <div
          className={`w-full h-full flex flex-col items-center justify-center p-6 text-center transition-colors duration-200 border-2 border-dashed ${
            isDragging
              ? 'border-[#BA6F5B] bg-[#BA6F5B]/15 scale-[0.99]'
              : isTerracotta
              ? 'border-[#FAF4EF]/35 bg-[#FAF4EF]/10 hover:border-[#FAF4EF]/60 hover:bg-[#FAF4EF]/15'
              : 'border-[#C47A64]/35 bg-[#FAF5EE]/70 hover:border-[#C47A64]/70 hover:bg-[#FAF5EE]'
          }`}
        >
          {/* Subtle geometric framing marks */}
          <div className="relative mb-3 flex items-center justify-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                isTerracotta
                  ? 'bg-[#FAF4EF]/20 text-[#FAF4EF]'
                  : 'bg-[#C47A64]/15 text-[#8F4A38]'
              }`}
            >
              <ImageIcon className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div
              className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                isTerracotta
                  ? 'bg-[#FAF4EF] text-[#8F4A38]'
                  : 'bg-[#8F4A38] text-[#FAF5EE]'
              }`}
            >
              <Upload className="w-2.5 h-2.5 stroke-[2]" />
            </div>
          </div>

          <div className="space-y-1 max-w-[200px]">
            <p
              className={`text-xs uppercase tracking-[0.2em] font-semibold ${
                isTerracotta ? 'text-[#FAF4EF]' : 'text-[#261612]'
              }`}
            >
              Visual Focal Point
            </p>
            <p
              className={`text-[11px] leading-snug ${
                isTerracotta ? 'text-[#FAF4EF]/75' : 'text-[#764F44]'
              }`}
            >
              Drop campaign visual here or tap to select photography
            </p>
          </div>

          {/* Minimal atelier dimensions badge */}
          <span
            className={`mt-4 px-2.5 py-0.5 text-[9px] uppercase tracking-widest rounded-full font-mono ${
              isTerracotta
                ? 'bg-[#FAF4EF]/15 text-[#FAF4EF]/80'
                : 'bg-[#C47A64]/10 text-[#8F4A38]'
            }`}
          >
            Focal Media Frame
          </span>
        </div>
      )}
    </div>
  );
};
