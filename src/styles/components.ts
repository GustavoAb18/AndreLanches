import { StyleSheet } from 'react-native';

import { colors, radii, shadows, spacing, typography } from './theme';

/**
 * Estilos compartilhados entre as telas e componentes.
 *
 * A ideia é manter aqui apenas o que é reutilizável (layout, cards,
 * botões, inputs e tipografia). Estilos muito específicos de um
 * componente podem ficar junto do próprio componente depois.
 */
export const styles = StyleSheet.create({
  // Layout
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: spacing.huge * 2,
  },
  content: {
    width: '100%',
    paddingHorizontal: spacing.lg,
  },
  section: {
    marginTop: spacing.xxl,
  },
  sectionHeader: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.sizes.h2,
    fontWeight: typography.weights.bold,
    color: colors.primary,
  },
  sectionSubtitle: {
    marginTop: spacing.xs,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    lineHeight: typography.sizes.small * typography.lineHeights.relaxed,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },

  // Textos
  title: {
    fontSize: typography.sizes.h1,
    fontWeight: typography.weights.black,
    color: colors.text,
  },
  subtitle: {
    fontSize: typography.sizes.body,
    color: colors.textMuted,
    lineHeight: typography.sizes.body * typography.lineHeights.relaxed,
  },
  body: {
    fontSize: typography.sizes.body,
    color: colors.text,
    lineHeight: typography.sizes.body * typography.lineHeights.normal,
  },
  caption: {
    fontSize: typography.sizes.caption,
    color: colors.textMuted,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  price: {
    fontSize: typography.sizes.price,
    fontWeight: typography.weights.bold,
    color: colors.primary,
  },

  // Cards
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    ...shadows.card,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.card,
  },
  productImage: {
    width: 84,
    height: 84,
    borderRadius: radii.md,
    backgroundColor: colors.surfaceMuted,
  },
  productInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  productName: {
    fontSize: typography.sizes.h3,
    fontWeight: typography.weights.bold,
    color: colors.text,
  },
  productDescription: {
    fontSize: typography.sizes.small,
    color: colors.textMuted,
    lineHeight: typography.sizes.small * typography.lineHeights.normal,
  },

  // Botões
  button: {
    minHeight: 48,
    paddingHorizontal: spacing.xl,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    ...shadows.card,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  buttonText: {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.bold,
  },
  buttonTextPrimary: {
    color: colors.textOnPrimary,
  },
  buttonTextOutline: {
    color: colors.primary,
  },
  buttonPressed: {
    opacity: 0.82,
  },

  // Formulários
  field: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.medium,
    color: colors.text,
  },
  input: {
    minHeight: 50,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: typography.sizes.body,
    color: colors.text,
  },
  inputMultiline: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  inputFocused: {
    borderColor: colors.primary,
  },

  // Banner e destaques
  banner: {
    minHeight: 180,
    borderRadius: radii.xl,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    padding: spacing.xl,
    backgroundColor: colors.primaryDark,
  },
  bannerImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.overlay,
  },
  bannerEyebrow: {
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.bold,
    color: colors.accentSoft,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  bannerTitle: {
    marginTop: spacing.xs,
    fontSize: typography.sizes.h1,
    fontWeight: typography.weights.black,
    color: colors.textOnPrimary,
  },
  bannerDescription: {
    marginTop: spacing.xs,
    fontSize: typography.sizes.small,
    color: colors.textOnPrimary,
    opacity: 0.9,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
    backgroundColor: colors.accentSoft,
  },
  badgeText: {
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.bold,
    color: colors.textOnAccent,
  },

  // Cabeçalho / navegação
  header: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: radii.sm,
  },
  nav: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  navItem: {
    flex: 1,
    minHeight: 40,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  navItemActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  navText: {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.medium,
    color: colors.text,
  },
  navTextActive: {
    color: colors.textOnPrimary,
    fontWeight: typography.weights.bold,
  },

  // Botão flutuante de entrega
  floating: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
    ...shadows.floating,
  },
  floatingText: {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.bold,
    color: colors.textOnPrimary,
  },
});

export type SharedStyles = typeof styles;
