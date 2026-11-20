import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Platform } from 'react-native';

const TITLE_FONT = Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia, serif' });
const BODY_FONT = Platform.select({ ios: 'Avenir Next', android: 'sans-serif-medium', default: 'system-ui, sans-serif' });

export default function HomeScreen({ navigation }) {
  const [products] = useState([
    {
      key: '1',
      icon: '👟',
      category: 'Lifestyle',
      title: 'Shoes',
      rating: 5,
      accentColor: '#FF2E7E', // Vibrant Bubblegum Pop
      softBg: '#FFE4F0',
      description:
        'Comfortable, lightweight everyday sneakers built for spontaneous adventures, long walks, and staying active all day with effortless style.',
    },
    {
      key: '2',
      icon: '🎸',
      category: 'Music',
      title: 'Ukulele',
      rating: 5,
      accentColor: '#FF5E7E', // Warm Coral-Pink Pop
      softBg: '#FFE8EC',
      description:
        'A warm-toned soprano ukulele that is easy to carry anywhere—perfect for strumming relaxing melodies and learning new songs.',
    },
    {
      key: '3',
      icon: '🏸',
      category: 'Sports',
      title: 'Badminton',
      rating: 5,
      accentColor: '#D81B60', // Electric Rose Pop
      softBg: '#FCE4EC',
      description:
        'An ultra-light carbon fiber badminton racket and shuttlecock set designed for fast smashes, sharp net control, and energetic games.',
    },
    {
      key: '4',
      icon: '🧩',
      category: 'Logic & Math',
      title: "Rubik's Cube",
      rating: 5,
      accentColor: '#B83280', // Berry Magenta Pop
      softBg: '#F9E2F0',
      description:
        'A smooth, fast-turning 3x3 speed cube that challenges logic, sharpens math and problem-solving skills, and keeps your mind active.',
    },
    {
      key: '5',
      icon: '📱',
      category: 'Tech & Study',
      title: 'iPad',
      rating: 5,
      accentColor: '#E91E63', // Neon Flamingo Pop
      softBg: '#FDE3EE',
      description:
        'A sleek, portable tablet ideal for digital note-taking in Computer Science classes, coding previews, and creative mobile design.',
    },
  ]);

  const renderHeader = () => (
    <View style={styles.headerCard}>
      {/* Vibrant Hot-Pink Cover Ribbon */}
      <View style={styles.coverBanner}>
        <View style={styles.labTag}>
          <Text style={styles.labTagText}>✿ LAB 6 • PASSING DATA ✿</Text>
        </View>
        <Text style={styles.watermarkFlower}>❀</Text>
      </View>

      {/* Main Profile Row */}
      <View style={styles.profileRow}>
        <View style={styles.avatarOuterRing}>
          <View style={styles.avatarInnerRing}>
            <Image
              source={require('../assets/profile.jpg')}
              style={styles.avatarPhoto}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.headerTextGroup}>
          <Text style={styles.headerTitle}>Yesha's Favorites</Text>
          <Text style={styles.headerSubtitle}>Curated Lifestyle & Study Picks</Text>
        </View>
      </View>

      {/* Colorful Mini Highlights Bar */}
      <View style={styles.headerFooterStrip}>
        <View style={[styles.miniPill, { backgroundColor: '#FFE4F0' }]}>
          <Text style={[styles.miniStatNumber, { color: '#FF2E7E' }]}>5 Items</Text>
        </View>
        <View style={[styles.miniPill, { backgroundColor: '#FFF3D6' }]}>
          <Text style={[styles.miniStatNumber, { color: '#D97706' }]}>★ 5.0 Rated</Text>
        </View>
        <View style={[styles.miniPill, { backgroundColor: '#F3E5F5' }]}>
          <Text style={[styles.miniStatNumber, { color: '#9C27B0' }]}>BSCS 3-4</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.productCard,
              { borderLeftColor: item.accentColor, shadowColor: item.accentColor },
            ]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Product', item)}
          >
            {/* Pop-Color Icon Box */}
            <View
              style={[
                styles.iconBox,
                { backgroundColor: item.softBg, borderColor: item.accentColor },
              ]}
            >
              <Text style={styles.iconSymbol}>{item.icon}</Text>
            </View>

            {/* Title & Pop Category */}
            <View style={styles.productInfo}>
              <Text style={[styles.categoryText, { color: item.accentColor }]}>
                {item.category.toUpperCase()}
              </Text>
              <Text style={styles.productTitle}>{item.title}</Text>
            </View>

            {/* Vibrant Pop Rating Pill */}
            <View style={[styles.ratingPill, { backgroundColor: item.accentColor }]}>
              <Text style={styles.ratingPillText}>★ {item.rating}.0</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAD2E1',
  },
  listContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 30,
  },
  headerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FF2E7E',
    shadowColor: '#FF2E7E',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  coverBanner: {
    backgroundColor: '#FF2E7E',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  watermarkFlower: {
    fontSize: 22,
    color: '#FFE4F0',
  },
  labTag: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 11,
    paddingVertical: 4,
    borderRadius: 20,
  },
  labTagText: {
    fontFamily: BODY_FONT,
    fontSize: 10,
    fontWeight: '800',
    color: '#FF2E7E',
    letterSpacing: 0.8,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: -20,
    marginBottom: 14,
  },
  avatarOuterRing: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#FFFFFF',
    padding: 3,
    marginRight: 14,
    shadowColor: '#FF2E7E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 6,
    elevation: 5,
  },
  avatarInnerRing: {
    width: '100%',
    height: '100%',
    borderRadius: 39,
    padding: 2.5,
    backgroundColor: '#FF2E7E',
    overflow: 'hidden',
  },
  avatarPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 36,
  },
  headerTextGroup: {
    flex: 1,
    paddingTop: 16,
  },
  headerTitle: {
    fontFamily: TITLE_FONT,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#880E4F',
  },
  headerSubtitle: {
    fontFamily: BODY_FONT,
    fontSize: 12,
    color: '#7A495B',
    marginTop: 2,
  },
  headerFooterStrip: {
    flexDirection: 'row',
    backgroundColor: '#FFF9FB',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: '#FCE4EC',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniPill: {
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 14,
  },
  miniStatNumber: {
    fontFamily: BODY_FONT,
    fontSize: 11.5,
    fontWeight: '800',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F8BBD0',
    borderLeftWidth: 6,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 4,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  iconSymbol: {
    fontSize: 25,
  },
  productInfo: {
    flex: 1,
  },
  categoryText: {
    fontFamily: BODY_FONT,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 2,
  },
  productTitle: {
    fontFamily: TITLE_FONT,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D0A1B',
  },
  ratingPill: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  ratingPillText: {
    fontFamily: BODY_FONT,
    fontSize: 12.5,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
