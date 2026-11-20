import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const addItemHandler = () => {
    if (enteredItem.trim().length === 0) {
      return;
    }
    setItemsList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: enteredItem },
    ]);
    setEnteredItem('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.mainCard}>
        <Text style={styles.title}>✿ Yesha's Item List ✿</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Item"
            placeholderTextColor="#B07A8C"
            style={styles.input}
            onChangeText={(text) => setEnteredItem(text)}
            value={enteredItem}
          />
          <TouchableOpacity style={styles.addButton} onPress={addItemHandler}>
            <Text style={styles.addButtonText}>ADD</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.listContainer}>
          {itemsList.map((item, index) => (
            <View key={item.id} style={styles.listItem}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{index + 1}</Text>
              </View>
              <Text style={styles.listItemText}>{item.value}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.footerLogoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoSymbol}>✿</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8BBD0', 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 50,
  },
  mainCard: {
    width: '100%',
    height: '82%', 
    backgroundColor: '#FFF0F5', 
    borderRadius: 24,
    paddingTop: 28,
    paddingHorizontal: 18,
    paddingBottom: 20,
    borderWidth: 2,
    borderColor: '#D81B60',
    shadowColor: '#880E4F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#D81B60',
    textAlign: 'center',
    marginBottom: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  input: {
    width: '73%',
    borderColor: '#D81B60',
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 11,
    backgroundColor: '#FFFFFF',
    fontFamily: 'serif',
    fontSize: 16,
    color: '#333333',
  },
  addButton: {
    width: '24%',
    backgroundColor: '#D81B60',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 15,
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    marginVertical: 6,
    backgroundColor: '#FFFFFF',
    borderColor: '#F48FB1',
    borderWidth: 1,
    borderLeftWidth: 7,
    borderLeftColor: '#D81B60',
    borderRadius: 12,
    shadowColor: '#D81B60',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  badge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FCE4EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  badgeText: {
    color: '#D81B60',
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 14,
  },
  listItemText: {
    fontFamily: 'serif',
    fontSize: 16,
    color: '#4A0E2E',
    fontWeight: 'bold',
    flexShrink: 1,
  },
  footerLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
  },
  logoCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FCE4EC',
    borderWidth: 2,
    borderColor: '#D81B60',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSymbol: {
    fontSize: 24,
    color: '#D81B60',
  },
});


