import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Platform,
} from 'react-native';

const TITLE_FONT = Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia, serif' });
const BODY_FONT = Platform.select({ ios: 'Avenir Next', android: 'sans-serif-medium', default: 'system-ui, sans-serif' });

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomUser = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://randomuser.me/api');
      const json = await response.json();
      setUser(json.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainCard}>

        <View style={styles.topArch}>
          <View style={styles.brandRow}>
            <Text style={styles.sparkleAccent}>✦</Text>
            <Text style={styles.appTitle}>Random People Finder</Text>
            <Text style={styles.sparkleAccent}>✦</Text>
          </View>
          <Text style={styles.appTagline}>Discover new faces around the world</Text>
        </View>

        {/* Body Content */}
        <View style={styles.body}>
          {loading || !user ? (
            <View style={styles.loaderBox}>
              <ActivityIndicator size="large" color="#FF2E7E" />
              <Text style={styles.loadingText}>Finding someone new...</Text>
            </View>
          ) : (
            <>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => navigation.navigate('Profile', { user })}
                style={styles.avatarOuterRing}
              >
                <View style={styles.avatarInnerRing}>
                  <Image
                    source={{ uri: user.picture.large }}
                    style={styles.userImage}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Profile', { user })}
                style={styles.tapBadge}
              >
                <Text style={styles.tapBadgeText}>✿ Tap photo for full profile ✿</Text>
              </TouchableOpacity>

              <Text style={styles.userName}>
                {user.name.first} {user.name.last}
              </Text>
              <Text style={styles.userLocation}>
                📍 {user.location.city}, {user.location.country}
              </Text>

              <View style={styles.infoPillsRow}>
                <View style={[styles.miniPill, { backgroundColor: '#F3E8FF', borderColor: '#D8B4FE' }]}>
                  <Text style={[styles.miniPillText, { color: '#7E22CE' }]}>
                    @{user.login.username}
                  </Text>
                </View>

                <View style={[styles.miniPill, { backgroundColor: '#FFF1E6', borderColor: '#FDBA74' }]}>
                  <Text style={[styles.miniPillText, { color: '#C2410C' }]}>
                    Age {user.dob.age}
                  </Text>
                </View>

                <View style={[styles.miniPill, { backgroundColor: '#FFE4F0', borderColor: '#F9A8D4' }]}>
                  <Text style={[styles.miniPillText, { color: '#BE185D', textTransform: 'capitalize' }]}>
                    {user.gender}
                  </Text>
                </View>
              </View>

              {/* Vibrant Rose-to-Coral Style Action Button */}
              <TouchableOpacity
                style={styles.randomButton}
                activeOpacity={0.85}
                onPress={fetchRandomUser}
              >
                <Text style={styles.randomButtonText}>↻  RANDOM USER</Text>
              </TouchableOpacity>
            </>
          )}
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
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  mainCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#F472B6',
    shadowColor: '#9D4EDD',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 18,
    elevation: 7,
  },
  topArch: {
    backgroundColor: '#EC4899',
    paddingTop: 22,
    paddingBottom: 68,
    paddingHorizontal: 18,
    alignItems: 'center',
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  sparkleAccent: {
    fontSize: 16,
    color: '#FDE68A', 
  },
  appTitle: {
    fontFamily: TITLE_FONT,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  appTagline: {
    fontFamily: BODY_FONT,
    fontSize: 12,
    color: '#FCE7F3',
    marginTop: 4,
    textAlign: 'center',
  },
  body: {
    paddingHorizontal: 22,
    paddingBottom: 24,
    alignItems: 'center',
  },
  loaderBox: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  loadingText: {
    fontFamily: BODY_FONT,
    fontSize: 13.5,
    color: '#7E22CE',
    marginTop: 10,
  },
  avatarOuterRing: {
    width: 148,
    height: 148,
    borderRadius: 74,
    backgroundColor: '#FFFFFF',
    padding: 5,
    marginTop: -58,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#E9D5FF', 
    shadowColor: '#9D4EDD',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  avatarInnerRing: {
    width: '100%',
    height: '100%',
    borderRadius: 69,
    borderWidth: 3,
    borderColor: '#EC4899',
    overflow: 'hidden',
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  tapBadge: {
    backgroundColor: '#FAF5FF',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D8B4FE',
    marginBottom: 14,
  },
  tapBadgeText: {
    fontFamily: BODY_FONT,
    fontSize: 11,
    fontWeight: '700',
    color: '#7E22CE',
    letterSpacing: 0.4,
  },
  userName: {
    fontFamily: TITLE_FONT,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2E1035',
    textAlign: 'center',
  },
  userLocation: {
    fontFamily: BODY_FONT,
    fontSize: 13,
    color: '#6B4C73',
    marginTop: 4,
    marginBottom: 14,
  },
  infoPillsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 22,
  },
  miniPill: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  miniPillText: {
    fontFamily: BODY_FONT,
    fontSize: 11.5,
    fontWeight: '700',
  },
  randomButton: {
    width: '100%',
    backgroundColor: '#DB2777',
    paddingVertical: 15,
    borderRadius: 18,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#9D174D',
    shadowColor: '#DB2777',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.28,
    shadowRadius: 10,
    elevation: 5,
  },
  randomButtonText: {
    fontFamily: BODY_FONT,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
});
