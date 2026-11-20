import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Student Profile</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Ayesha Gwyneth R. Ferma</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>20</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Course/Year/Section:</Text>
        <Text style={styles.value}>BS Computer Science, 3rd Year, Section 4</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>About Me:</Text>
        <Text style={styles.value}>
          Passionate about exploring modern technology and improving my programming skills. I also enjoy bringing visual ideas to life through clean layouts, thoughtful color choices, and user-friendly apps.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Achievements:</Text>
        <Text style={styles.value}>- Computer Science Student Organization Member (2025)</Text>
        <Text style={styles.value}>- Dean's Lister (2024, 2025)</Text>
        <Text style={styles.value}>- DaMath Champion (2018)</Text>
        <Text style={styles.value}>- Badminton Doubles Champion (2024)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.value}>- Java</Text>
        <Text style={styles.value}>- Html</Text>
        <Text style={styles.value}>- Web Development</Text>
        <Text style={styles.value}>- UI/UX Design</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF0F5',
    paddingTop: 80,
    paddingHorizontal: 22,
    paddingBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 25,
    color: '#D81B60',
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#C2185B',
    marginBottom: 3,
  },
  value: {
    fontSize: 15,
    fontFamily: 'serif',
    color: '#333333',
    lineHeight: 22,
  },
});
