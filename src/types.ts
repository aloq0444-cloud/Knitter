export type CardTheme = 'blush-cream' | 'terracotta-ink' | 'dusty-rose';

export interface CardState {
  brandName: string;
  tagline: string;
  detailLabel: string;
  theme: CardTheme;
  mediaUrl: string | null;
  mediaFit: 'cover' | 'contain';
  aspectRatio: '9:16' | '4:5';
}
