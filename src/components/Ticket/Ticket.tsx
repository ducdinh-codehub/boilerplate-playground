import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
export const Ticket = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flightContent}>
        <View style={styles.flightBrand}></View>
        <View style={styles.mainContent}></View>
      </View>
      <View style={styles.dashStyle}></View>
      <View style={styles.flightPrice}>
        <Text style={styles.price}>1.000.000 vnđ</Text>
        <Button title="Book Flight" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flightContent: {
    height: '50%',
    width: '90%',
    borderWidth: 2,
    borderRadius: 18,
    borderBottomWidth: 0,
  },
  flightPrice: {
    height: '35%',
    width: '90%',
    borderWidth: 2,
    borderRadius: 18,
    borderTopWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '7%',
  },
  dashStyle: {
    width: '70%',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  price: {
    fontSize: 20,
  },
});
