import { Platform } from 'react-native';

/**
 * Design tokens do André Lanches.
 *
 * Paleta extraída do site original (amarelo #ffe18c e vermelho #e50021)
 * e refinada para uma interface mobile com mais contraste e hierarquia.
 */

export const colors = {
  // Marca
  primary: '#E50021',
  primaryDark: '#B00019',
  primarySoft: '#FFE3E8',

  // Apoio / destaques
  accent: '#F5B301',
  accentSoft: '#FFE18C',
  accentDark: '#A86F00',

  // Superfícies
  background: '#FFF9EC',
  surface: '#FFFFFF',
  surfaceMuted: '#FFF4DA',
  overlay: 'rgba(43, 27, 23, 0.45)',

  // Texto
  text: '#2B1B17',
  textMuted: '#6F5B54',
  textOnPrimary: '#FFFFFF',
  textOnAccent: '#4A2A00',

  // Bordas e estados
  border: '#F0DFC0',
  borderStrong: '#E3C99B',
  success: '#1B8A5A',
  danger: '#C1121F',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  pill: 999,
} as const;

export const typography = {
  fontFamily: Platform.select({
    ios: 'System',
    android: 'sans-serif',
    default: 'System',
  }),
  sizes: {
    display: 34,
    h1: 28,
    h2: 22,
    h3: 18,
    body: 15,
    small: 13,
    caption: 11,
    price: 20,
  },
  weights: {
    regular: '400',
    medium: '600',
    bold: '700',
    black: '800',
  },
  lineHeights: {
    tight: 1.15,
    normal: 1.35,
    relaxed: 1.55,
  },
} as const;

export const shadows = {
  none: {},
  card: Platform.select({
    ios: {
      shadowColor: '#4A2A00',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.12,
      shadowRadius: 14,
    },
    android: {
      elevation: 4,
    },
    default: {},
  }),
  floating: Platform.select({
    ios: {
      shadowColor: '#B00019',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
    },
    android: {
      elevation: 10,
    },
    default: {},
  }),
} as const;

export const theme = {
  colors,
  spacing,
  radii,
  typography,
  shadows,
} as const;

export type Theme = typeof theme;
