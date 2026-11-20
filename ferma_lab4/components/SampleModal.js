import React from 'react';
import { StyleSheet, Text, View, Modal, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.screen}>
        <View style={styles.modalCard}>
          {/* Header Title */}
          <Text style={styles.modalTitle}>✿ Pink Blossom & Modal App ✿</Text>

          <View style={styles.imageCircle}>
            <Image
              source={require('../assets/flower.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>


          {/* Scrollable  Description */}
          <ScrollView
            style={styles.scrollArea}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
          >
            <Text style={styles.sectionHeading}>Why This Pink Blossom Resonates With Me</Text>
            <Text style={styles.longText}>
              Just like this pink cherry blossom, I believe that beauty comes from patience, gentle growth, and attention to small details. A blossom does not rush to bloom; it takes time through changing seasons before opening its petals with grace and confidence.
              {'\n\n'}
              As a student learning mobile application development, this flower reminds me to stay calm and persistent even when coding feels challenging. Every new concept I learn—from styling layouts to fixing bugs—is like a petal slowly unfolding into something meaningful and creative.
            </Text>

            <Text style={styles.sectionHeading}>How This Connects to the Modal Component</Text>
            <Text style={styles.longText}>
              In React Native, a Modal acts like a hidden bloom waiting quietly behind the main screen until a user interacts with it. When you tapped the "CLICK ME" button on the main page, it triggered a state change that allowed this popup window to open smoothly into view.
              {'\n\n'}
              Inside this modal, multiple basic components work together in harmony: a View container shapes the card, an Image component frames the pink blossom at the top, and this ScrollView lets you read the full story comfortably without crowding the screen. When you are finished reading, tapping the "CLOSE" button gently folds the modal away again.
            </Text>
          </ScrollView>

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8BBD0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 40,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#FFF0F5',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D81B60',
    elevation: 6,
  },
  modalTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
    marginBottom: 14,
    textAlign: 'center',
  },
  imageCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 3,
    borderColor: '#D81B60',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
    padding: 6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  scrollArea: {
    width: '100%',
    height: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#F48FB1',
    marginBottom: 18,
  },
  scrollContent: {
    padding: 15,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
    marginBottom: 6,
  },
  longText: {
    fontSize: 14.5,
    fontFamily: 'serif',
    color: '#333333',
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 14,
  },
  closeButton: {
    backgroundColor: '#C2185B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 16,
  },
});



