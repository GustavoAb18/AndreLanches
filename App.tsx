import { StatusBar } from 'expo-status-bar';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar as NativeStatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { brand, productImages } from './src/assets';
import { formatPrice, products } from './src/data/products';
import { colors, radii, shadows, spacing, styles, typography } from './src/styles';

export default function App() {
  return (
    <SafeAreaView style={[styles.screen, local.safeArea]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={local.header}>
            <View style={local.logoWrapper}>
              <Image
                source={brand.logo}
                style={local.logo}
                resizeMode="contain"
                accessibilityLabel="Logo do André Lanches"
              />
            </View>

            <View style={local.headerText}>
              <Text style={local.brandName}>André Lanches</Text>
              <Text style={local.brandTagline}>Feito na chapa, do seu jeito</Text>
            </View>
          </View>

          <View style={local.hero}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Bem-vindo</Text>
            </View>
            <Text style={local.heroTitle}>Seu lanche favorito está aqui.</Text>
            <Text style={styles.subtitle}>
              Escolha um dos nossos clássicos e mate a fome sem complicação.
            </Text>
          </View>

          <View style={styles.banner}>
            <Image
              source={brand.bannerPromocao}
              style={styles.bannerImage}
              resizeMode="cover"
            />
            <View style={styles.bannerOverlay} />

            <Text style={styles.bannerEyebrow}>Promoção do dia</Text>
            <Text style={styles.bannerTitle}>X-Salada + Batata</Text>

            <View style={local.bannerFooter}>
              <Text style={local.bannerPrice}>R$ 9,90</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Economize R$ 5,10</Text>
              </View>
            </View>
          </View>

          <View style={[styles.section, styles.sectionHeader]}>
            <View style={styles.rowBetween}>
              <View style={local.sectionTitleGroup}>
                <Text style={styles.sectionTitle}>Nossos lanches</Text>
                <Text style={styles.sectionSubtitle}>
                  Os clássicos que saem direto da chapa.
                </Text>
              </View>

              <View style={local.countBadge}>
                <Text style={local.countText}>{products.length} itens</Text>
              </View>
            </View>
          </View>

          <View style={local.grid}>
            {products.map((product) => (
              <View key={product.id} style={local.productCard}>
                <View style={local.productIconWrapper}>
                  <Image
                    source={productImages[product.image]}
                    style={local.productIcon}
                    resizeMode="cover"
                    accessibilityLabel={`Foto do ${product.name}`}
                  />
                </View>

                <Text numberOfLines={2} style={local.productName}>
                  {product.name}
                </Text>
                <Text style={local.productPrice}>{formatPrice(product.price)}</Text>
              </View>
            ))}
          </View>

          <Text style={local.footerNote}>
            André Lanches • entregamos na sua casa
          </Text>
        </View>
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const local = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === 'android' ? (NativeStatusBar.currentHeight ?? 0) : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingTop: spacing.sm,
  },
  logoWrapper: {
    width: 54,
    height: 54,
    borderRadius: radii.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },
  logo: {
    width: 44,
    height: 44,
  },
  headerText: {
    flex: 1,
  },
  brandName: {
    fontSize: typography.sizes.h2,
    fontWeight: typography.weights.black,
    color: colors.primary,
    letterSpacing: -0.4,
  },
  brandTagline: {
    marginTop: 2,
    fontSize: typography.sizes.small,
    color: colors.textMuted,
  },
  hero: {
    marginTop: spacing.xxl,
    gap: spacing.sm,
  },
  heroTitle: {
    maxWidth: 320,
    fontSize: typography.sizes.display,
    fontWeight: typography.weights.black,
    color: colors.text,
    letterSpacing: -0.8,
    lineHeight: typography.sizes.display * typography.lineHeights.tight,
  },
  banner: {
    marginTop: spacing.xl,
  },
  bannerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  bannerPrice: {
    fontSize: typography.sizes.h2,
    fontWeight: typography.weights.black,
    color: colors.textOnPrimary,
  },
  sectionTitleGroup: {
    flex: 1,
  },
  countBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
    backgroundColor: colors.surfaceMuted,
    borderWidth: 1,
    borderColor: colors.border,
  },
  countText: {
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.bold,
    color: colors.textMuted,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  productCard: {
    flexBasis: '30%',
    flexGrow: 1,
    alignItems: 'center',
    borderRadius: radii.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.sm,
    ...shadows.card,
  },
  productIconWrapper: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: colors.primarySoft,
    overflow: 'hidden',
    backgroundColor: colors.surfaceMuted,
  },
  productIcon: {
    width: '100%',
    height: '100%',
  },
  productName: {
    marginTop: spacing.sm,
    minHeight: 34,
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.bold,
    color: colors.text,
    textAlign: 'center',
  },
  productPrice: {
    marginTop: spacing.xs,
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.black,
    color: colors.primary,
  },
  footerNote: {
    marginTop: spacing.xxxl,
    fontSize: typography.sizes.caption,
    color: colors.textMuted,
    textAlign: 'center',
    letterSpacing: 0.4,
  },
});
