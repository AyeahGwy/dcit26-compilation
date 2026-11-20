import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform } from 'react-native';

const TITLE_FONT = Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia, serif' });
const BODY_FONT = Platform.select({ ios: 'Avenir Next', android: 'sans-serif-medium', default: 'system-ui, sans-serif' });

export default function ProductScreen({ route, navigation }) {
  const {
    icon,
    category,
    title,
    rating,
    description,
    accentColor = '#FF2E7E',
    softBg = '#FFE4F0',
  } = route.params;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.detailCard, { borderColor: accentColor, shadowColor: accentColor }]}>
        {/* Pop-Color Showcase Banner */}
        <View style={[styles.showcaseArea, { backgroundColor: softBg }]}>
          <View style={[styles.iconHalo, { borderColor: accentColor, shadowColor: accentColor }]}>
            <Text style={styles.heroIcon}>{icon}</Text>
          </View>

          <View style={[styles.categoryPill, { backgroundColor: accentColor }]}>
            <Text style={styles.categoryPillText}>
              ✿ {category ? category.toUpperCase() : 'FAVORITE ITEM'} ✿
            </Text>
          </View>

          <Text style={styles.productTitle}>{title}</Text>

          <View style={[styles.ratingBadge, { borderColor: accentColor }]}>
            <Text style={[styles.ratingText, { color: accentColor }]}>
              ★★★★★  {rating}.0 / 5.0
            </Text>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.contentArea}>
          <Text style={[styles.sectionLabel, { color: accentColor }]}>ABOUT THIS ITEM</Text>
          <Text style={styles.descriptionText}>{description}</Text>

          <TouchableOpacity
            style={[styles.backButton, { backgroundColor: accentColor, shadowColor: accentColor }]}
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←  Back to Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAD2E1',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  detailCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 2,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
  showcaseArea: {
    paddingVertical: 26,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F8BBD0',
  },
  iconHalo: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 4,
  },
  heroIcon: {
    fontSize: 42,
  },
  categoryPill: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 8,
  },
  categoryPillText: {
    fontFamily: BODY_FONT,
    fontSize: 10.5,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  productTitle: {
    fontFamily: TITLE_FONT,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2D0A1B',
    textAlign: 'center',
    marginBottom: 10,
  },
  ratingBadge: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  ratingText: {
    fontFamily: BODY_FONT,
    fontSize: 13,
    fontWeight: '800',
  },
  contentArea: {
    padding: 22,
  },
  sectionLabel: {
    fontFamily: BODY_FONT,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  descriptionText: {
    fontFamily: BODY_FONT,
    fontSize: 14.5,
    color: '#4A2535',
    lineHeight: 22,
    marginBottom: 24,
  },
  backButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  backButtonText: {
    fontFamily: BODY_FONT,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
