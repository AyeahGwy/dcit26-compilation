import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.mainCard}>
        <Text style={styles.title}>✿ Yesha's Modal ✿</Text>
        <Text style={styles.subtitle}>Tap the button below to open the modal</Text>

        <TouchableOpacity
          style={styles.openButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.openButtonText}>CLICK ME</Text>
        </TouchableOpacity>

        <View style={styles.logoCircle}>
          <Text style={styles.logoSymbol}>✿</Text>
        </View>
      </View>

      <SampleModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8BBD0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  mainCard: {
    width: '100%',
    backgroundColor: '#FFF0F5',
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D81B60',
    elevation: 6,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#880E4F',
    marginBottom: 28,
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: '#D81B60',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    marginBottom: 30,
    elevation: 3,
  },
  openButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FCE4EC',
    borderWidth: 2,
    borderColor: '#D81B60',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSymbol: {
    fontSize: 22,
    color: '#D81B60',
  },
});

