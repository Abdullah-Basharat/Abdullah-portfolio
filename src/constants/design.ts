// Design System Constants
export const COLORS = {
  // Background Colors
  BACKGROUND_PRIMARY: '#0a0a0a',
  BACKGROUND_SECONDARY: '#111827',
  BACKGROUND_TERTIARY: '#1f2937',
  
  // Text Colors
  TEXT_PRIMARY: '#f9fafb',
  TEXT_SECONDARY: '#e5e7eb',
  TEXT_MUTED: '#9ca3af',
  
  // Accent Colors
  ACCENT_PURPLE: '#8b5cf6',
  ACCENT_PURPLE_HOVER: '#7c3aed',
  
  // Border Colors
  BORDER_PRIMARY: '#374151',
  BORDER_SECONDARY: '#4b5563',
} as const;

export const SPACING = {
  SECTION_PADDING: 'py-24',
  CONTAINER_PADDING: 'px-6',
  CARD_PADDING: 'p-8',
  GAP: 'gap-8',
} as const;

export const TYPOGRAPHY = {
  HEADING_LARGE: 'text-3xl md:text-4xl lg:text-5xl font-bold',
  HEADING_MEDIUM: 'text-2xl font-bold',
  HEADING_SMALL: 'text-xl font-bold',
  BODY_LARGE: 'text-lg md:text-xl',
  BODY_MEDIUM: 'text-base',
  BODY_SMALL: 'text-sm',
} as const;

export const EFFECTS = {
  CARD_HOVER: 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1',
  BACKDROP_BLUR: 'backdrop-blur-3xl',
  BORDER_RADIUS: 'rounded-xl',
} as const;

export const GRADIENTS = {
  CARD_BACKGROUND: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`,
} as const; 