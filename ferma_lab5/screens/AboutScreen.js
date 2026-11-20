import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.mainCard}>
        {/* Top Solid Pink Banner Header */}
        <View style={styles.topBanner}>
          <View style={styles.emblemBadge}>
            <Image
              source={require('../assets/profile.jpg')}
              style={styles.emblemPhoto}
              resizeMode="cover"
            />
          </View>
          <View style={styles.bannerTextGroup}>
            <Text style={styles.bannerTitle}>About Me</Text>
            <Text style={styles.bannerSubtitle}>Spontaneous • Adventurous • Pink Lover</Text>
          </View>
        </View>


        {/* Body Content */}
        <View style={styles.bodyContent}>
          {/* Personal Intro Quote */}
          <Text style={styles.introQuote}>
            “Always curious, obsessed with all things pink, up for spontaneous adventures, and working hard every day to build a successful future.”
          </Text>

          {/* Things I Love Container Box */}
          <View style={styles.loveContainer}>
            <Text style={styles.gridHeading}>✿ Things I Love</Text>

            <View style={styles.gridRow}>
              <View style={styles.gridTile}>
                <Text style={styles.tileIcon}>🍳</Text>
                <Text style={styles.tileTitle}>Cooking</Text>
                <Text style={styles.tileSub}>Trying new recipes</Text>
              </View>

              <View style={styles.gridTile}>
                <Text style={styles.tileIcon}>🏸</Text>
                <Text style={styles.tileTitle}>Sports</Text>
                <Text style={styles.tileSub}>Watching different games</Text>
              </View>
            </View>

            <View style={styles.gridRow}>
              <View style={styles.gridTile}>
                <Text style={styles.tileIcon}>🎸</Text>
                <Text style={styles.tileTitle}>Music</Text>
                <Text style={styles.tileSub}>Playing instruments</Text>
              </View>

              <View style={styles.gridTile}>
                <Text style={styles.tileIcon}>🧮</Text>
                <Text style={styles.tileTitle}>Math & Logic</Text>
                <Text style={styles.tileSub}>Problem-solving</Text>
              </View>
            </View>

            {/* Full-width Pink Tile at the Bottom of the Container */}
            <View style={styles.pinkWideTile}>
              <Text style={styles.tileIcon}>🌸</Text>
              <View style={styles.pinkTextGroup}>
                <Text style={styles.tileTitle}>All Things Pink</Text>
                <Text style={styles.tileSub}>My favorite color & aesthetic</Text>
              </View>
            </View>
          </View>

          {/* Required Go Back Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>GO BACK</Text>
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
    paddingVertical: 28,
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
   topBanner: {
    width: '100%',
    backgroundColor: '#D81B60',
    flexDirection: 'row', 
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  emblemBadge: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#FFF0F5',
    borderWidth: 2.5,
    borderColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 14,
  },
  emblemPhoto: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  bannerTextGroup: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#FFFFFF',
  },
  bannerSubtitle: {
    fontSize: 12,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#FCE4EC',
    marginTop: 2,
  },

  bodyContent: {
    padding: 20,
    alignItems: 'center',
  },
  introQuote: {
    fontSize: 13.5,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#4A0E2E',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
    paddingHorizontal: 6,
  },
  loveContainer: {
    width: '100%',
    backgroundColor: '#FCE4EC',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1.5,
    borderColor: '#F48FB1',
    marginBottom: 18,
  },
  gridHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
    marginBottom: 10,
    textAlign: 'center',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  gridTile: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 11,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#F48FB1',
  },
  pinkWideTile: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#D81B60',
  },
  pinkTextGroup: {
    marginLeft: 10,
  },
  tileIcon: {
    fontSize: 22,
    marginBottom: 2,
  },
  tileTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
  },
  tileSub: {
    fontSize: 11.5,
    fontFamily: 'serif',
    color: '#666666',
    marginTop: 1,
  },
  button: {
    backgroundColor: '#C2185B',
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
});
