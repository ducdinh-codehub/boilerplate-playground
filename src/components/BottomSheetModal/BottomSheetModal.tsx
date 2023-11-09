import React, { useRef, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ticket } from '../Ticket/Ticket';

export const BottomSheetModal = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['55%', '85%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{ backgroundColor: '#f5f5f0', borderRadius: 35 }}
    >
      <View style={styles.contentContainer}>
        <MaterialCommunityIcons name="airplane" size={25} />
        <View>
          <Text style={styles.titleStyle}>Flight Details</Text>
        </View>
      </View>
      <View style={styles.ticketContainer}>
        <Ticket></Ticket>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',

    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 18,
  },
  ticketContainer: {
    paddingTop: '5%',
    alignItems: 'center',
  },
});
