import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.mainCard}>
             <View style={styles.heroHeader}>
       <View style={styles.avatarRing}>
         <Image
           source={require('../assets/profile.jpg')}
           style={styles.avatarPhoto}
           resizeMode="cover"
         />
       </View>
       <View style={styles.heroTextGroup}>
         <Text style={styles.welcomeLabel}>WELCOME BACK</Text>
         <Text style={styles.userName}>Ayesha Gwyneth</Text>
         <Text style={styles.tagline}>Spontaneous • Adventurous • Driven</Text>
       </View>
     </View>


        {/* Body Content */}
        <View style={styles.body}>
          {/* Mini Stats / Highlights Strip */}
          <View style={styles.statsStrip}>
            <View style={styles.statItem}>

          <View style={styles.labBanner}>
            <Text style={styles.labBannerTitle}>✿ Lab 5 - Navigators ✿</Text>
            <Text style={styles.labBannerSub}>DCIT 26 • Mobile Application Development</Text>
          </View>

            </View>
          </View>

          {/* Interactive Menu Row */}
          <Text style={styles.sectionTitle}>Quick Access</Text>

          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => navigation.navigate('Profile')}
          >
            <View style={styles.menuIconBox}>
              <Text style={styles.menuIcon}>✿</Text>
            </View>
            <View style={styles.menuTextGroup}>
              <Text style={styles.menuTitle}>My Student Profile</Text>
              <Text style={styles.menuSub}>View bio, course, and personal info</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => navigation.openDrawer()}
          >
            <View style={styles.menuIconBox}>
              <Text style={styles.menuIcon}>☰</Text>
            </View>
            <View style={styles.menuTextGroup}>
              <Text style={styles.menuTitle}>Side Navigation Drawer</Text>
              <Text style={styles.menuSub}>Switch between Home and About pages</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.primaryButtonText}>PROFILE</Text>
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
  heroHeader: {
width: '100%',
backgroundColor: '#D81B60',
flexDirection: 'row', 
paddingVertical: 16,
paddingHorizontal: 18,
alignItems: 'center',
},
avatarRing: {
width: 68,
height: 68,
borderRadius: 34,
backgroundColor: '#FFF0F5',
borderWidth: 2.5,
borderColor: '#FFF0F5',
alignItems: 'center',
justifyContent: 'center',
overflow: 'hidden',
marginRight: 14,
},
avatarPhoto: {
width: '100%',
height: '100%',
alignSelf: 'center',
},
heroTextGroup: {
flex: 1,
},
welcomeLabel: {
fontSize: 10.5,
fontWeight: 'bold',
fontFamily: 'serif',
color: '#FCE4EC',
letterSpacing: 1.2,
},
userName: {
fontSize: 21,
fontWeight: 'bold',
fontFamily: 'serif',
color: '#FFFFFF',
marginTop: 1,
},
tagline: {
fontSize: 11.5,
fontFamily: 'serif',
fontStyle: 'italic',
color: '#FCE4EC',
marginTop: 3,
},
  body: {
    padding: 20,
    alignItems: 'center',
  },
    labBanner: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: '#F48FB1',
    marginBottom: 18,
    alignItems: 'center',
  },
  labBannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
  },
  labBannerSub: {
    fontSize: 12,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#666666',
    marginTop: 2,
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
    marginBottom: 10,
  },
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F48FB1',
  },
  menuIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#FCE4EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuIcon: {
    fontSize: 18,
    color: '#D81B60',
    fontWeight: 'bold',
  },
  menuTextGroup: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#4A0E2E',
  },
  menuSub: {
    fontSize: 12,
    fontFamily: 'serif',
    color: '#666666',
    marginTop: 1,
  },
  arrow: {
    fontSize: 22,
    color: '#D81B60',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#C2185B',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
    letterSpacing: 1,
  },
});
