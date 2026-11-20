import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.mainCard}>
        <View style={styles.heroHeader}>
          <View style={styles.photoFrame}>
            <Image
              source={require('../assets/profile.jpg')}
              style={styles.profilePhoto}
              resizeMode="cover"
            />
          </View>

          <View style={styles.heroTextGroup}>
            <Text style={styles.headerBadge}>✿ STUDENT PROFILE ✿</Text>
            <Text style={styles.headerTitle}>Yesha's Profile</Text>
          </View>
        </View>

        {/* Body Content */}
        <View style={styles.body}>
          <View style={styles.highlightsStrip}>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>✦</Text>
              <Text style={styles.highlightLabel}>Adventurous</Text>
            </View>
            <View style={styles.highlightDivider} />
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>🧮</Text>
              <Text style={styles.highlightLabel}>Problem Solver</Text>
            </View>
            <View style={styles.highlightDivider} />
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>✿</Text>
              <Text style={styles.highlightLabel}>Goal-Driven</Text>
            </View>
          </View>

          {/* Unified Student Details Container */}
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>Ayesha Gwyneth R. Ferma</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Course</Text>
              <Text style={styles.value}>BS Computer Science</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Age</Text>
              <Text style={styles.value}>20</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Year & Section</Text>
              <Text style={styles.value}>3-4</Text>
            </View>

            <View style={[styles.infoRow, styles.lastRow]}>
              <Text style={styles.label}>Location</Text>
              <Text style={styles.value}>General Trias, Cavite</Text>
            </View>
          </View>

          {/* Personalized About Me Card */}
          <View style={styles.bioCard}>
            <Text style={styles.sectionHeading}>✿ About Me</Text>
            <Text style={styles.bioText}>
              "As a Computer Science student, I naturally love math and problem-solving, but my life goes far beyond screens. I have a spontaneous and adventurous spirit—I love cooking, watching all kinds of sports, and playing instruments in my free time. Every day is a step toward my goal of becoming successful in the future."
            </Text>
          </View>

          {/* Hobby & Interest Pills */}
          <View style={styles.tagRow}>
            <View style={styles.tagPill}>
              <Text style={styles.tagText}>🍳 Cooking</Text>
            </View>
            <View style={styles.tagPill}>
              <Text style={styles.tagText}>🏸 Sports</Text>
            </View>
            <View style={styles.tagPill}>
              <Text style={styles.tagText}>🎸 Instruments</Text>
            </View>
            <View style={styles.tagPill}>
              <Text style={styles.tagText}>🧮 Math</Text>
            </View>
          </View>

          {/* Required Go Back Home Button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.primaryButtonText}>GO BACK HOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8BBD0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  mainCard: {
    width: '100%',
    backgroundColor: '#FFF0F5',
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#D81B60',
    elevation: 6,
  },
  heroHeader: {
    width: '100%',
    backgroundColor: '#D81B60',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  photoFrame: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2.5,
    borderColor: '#FFF0F5',
    backgroundColor: '#FCE4EC',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  heroTextGroup: {
    flex: 1,
  },
  headerBadge: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#FCE4EC',
    letterSpacing: 1.2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#FFFFFF',
    marginTop: 2,
  },
  headerSubtitle: {
    fontSize: 12,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#FCE4EC',
    marginTop: 2,
  },
  body: {
    padding: 18,
    alignItems: 'center',
  },
  highlightsStrip: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderColor: '#F48FB1',
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  highlightItem: {
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  highlightIcon: {
    fontSize: 16,
    color: '#D81B60',
    marginBottom: 2,
  },
  highlightLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#880E4F',
  },
  highlightDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#FCE4EC',
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: '#F48FB1',
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#FCE4EC',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 13.5,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
  },
  value: {
    fontSize: 13.5,
    fontFamily: 'serif',
    color: '#333333',
    textAlign: 'right',
    flexShrink: 1,
    marginLeft: 10,
  },
  bioCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#F48FB1',
    borderLeftWidth: 5,
    borderLeftColor: '#D81B60',
    marginBottom: 14,
  },
  sectionHeading: {
    fontSize: 14.5,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
    marginBottom: 5,
  },
  bioText: {
    fontSize: 13.5,
    fontFamily: 'serif',
    color: '#333333',
    lineHeight: 20,
    textAlign: 'justify',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 18,
  },
  tagPill: {
    backgroundColor: '#FCE4EC',
    borderColor: '#F48FB1',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 11,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#C2185B',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
    letterSpacing: 0.8,
  },
});
