import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Platform } from 'react-native';

const TITLE_FONT = Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia, serif' });
const BODY_FONT = Platform.select({ ios: 'Avenir Next', android: 'sans-serif-medium', default: 'system-ui, sans-serif' });

export default function ProfileScreen({ route }) {
  const { user } = route.params;

  const formatDate = (isoString) => {
    return isoString ? isoString.split('T')[0] : 'N/A';
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.mainCard}>
        <View style={styles.heroBanner}>
          <View style={styles.avatarRing}>
            <Image
              source={{ uri: user.picture.large }}
              style={styles.userImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.fullName}>
            {user.name.title} {user.name.first} {user.name.last}
          </Text>
          <View style={styles.usernamePill}>
            <Text style={styles.usernameText}>@{user.login.username}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={[styles.sectionCard, { backgroundColor: '#FFF5F9', borderColor: '#FBCFE8', borderLeftColor: '#EC4899' }]}>
            <Text style={[styles.sectionTitle, { color: '#BE185D' }]}>✿ About</Text>

            <View style={styles.detailRow}>
              <Text style={[styles.label, { color: '#9D174D' }]}>Age:</Text>
              <Text style={styles.value}>{user.dob.age}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={[styles.label, { color: '#9D174D' }]}>Birthday:</Text>
              <Text style={styles.value}>{formatDate(user.dob.date)}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={[styles.label, { color: '#9D174D' }]}>Gender:</Text>
              <Text style={[styles.value, { textTransform: 'capitalize' }]}>
                {user.gender}
              </Text>
            </View>

            <View style={[styles.detailRow, styles.lastRow]}>
              <Text style={[styles.label, { color: '#9D174D' }]}>Address:</Text>
              <Text style={styles.value}>
                {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.country}
              </Text>
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: '#FAF5FF', borderColor: '#E9D5FF', borderLeftColor: '#9333EA' }]}>
            <Text style={[styles.sectionTitle, { color: '#7E22CE' }]}>✉ Contact</Text>

            <View style={[styles.detailRow, { borderBottomColor: '#F3E8FF' }]}>
              <Text style={[styles.label, { color: '#6B21A8' }]}>Email:</Text>
              <Text style={styles.value}>{user.email}</Text>
            </View>

            <View style={[styles.detailRow, styles.lastRow]}>
              <Text style={[styles.label, { color: '#6B21A8' }]}>Phone:</Text>
              <Text style={styles.value}>{user.phone}</Text>
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: '#FFF7ED', borderColor: '#FED7AA', borderLeftColor: '#F97316' }]}>
            <Text style={[styles.sectionTitle, { color: '#C2410C' }]}>✦ Other</Text>

            <View style={[styles.detailRow, styles.lastRow]}>
              <Text style={[styles.label, { color: '#9A3412' }]}>Date registered:</Text>
              <Text style={styles.value}>{formatDate(user.registered.date)}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6E8F5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  mainCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#F472B6',
    shadowColor: '#9D4EDD',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 6,
  },
  heroBanner: {
    backgroundColor: '#FDF2F8',
    paddingVertical: 22,
    paddingHorizontal: 18,
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#FBCFE8',
  },
  avatarRing: {
    width: 114,
    height: 114,
    borderRadius: 57,
    padding: 3.5,
    backgroundColor: '#EC4899',
    marginBottom: 10,
    shadowColor: '#9D4EDD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 53.5,
  },
  fullName: {
    fontFamily: TITLE_FONT,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E1035',
    textAlign: 'center',
  },
  usernamePill: {
    backgroundColor: '#9333EA',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 16,
    marginTop: 5,
  },
  usernameText: {
    fontFamily: BODY_FONT,
    fontSize: 11.5,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  body: {
    padding: 18,
  },
  sectionCard: {
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderLeftWidth: 5,
  },
  sectionTitle: {
    fontFamily: TITLE_FONT,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#FCE7F3',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  label: {
    fontFamily: BODY_FONT,
    fontSize: 13,
    fontWeight: '700',
    marginRight: 10,
  },
  value: {
    fontFamily: BODY_FONT,
    fontSize: 13,
    color: '#2E1035',
    flex: 1,
    textAlign: 'right',
  },
});
