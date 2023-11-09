import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CarouselSlideLeft } from '../Carousel/Carousel';
import { BottomSheetModal } from '../BottomSheetModal/BottomSheetModal';
import FlightDetailContext from '../../Context/FlightDetails/FlightDetailContext';
export const ScreenHeader = () => {
  const { isOpenBottomSheet } = useContext(FlightDetailContext);
  console.log(isOpenBottomSheet, 'isOpenBottomSheet');
  return (
    <>
      <View style={style.container}>
        <View style={style.firstTitleContainer}>
          <Text style={style.firstTitle}>Find Your</Text>
          <View style={style.firstContent}>
            <CarouselSlideLeft />
          </View>
        </View>
        <View style={style.secondTitleContainer}>
          <Text style={style.secondTitle}>Dream Trip</Text>
        </View>
      </View>
      {isOpenBottomSheet ? <BottomSheetModal /> : null}
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 250,
    height: '100%',
    backgroundColor: 'white',
  },
  firstContent: {
    paddingHorizontal: 20,
  },
  firstTitleContainer: {
    height: '30%',
  },
  secondTitleContainer: {
    height: '30%',
  },

  firstTitle: {
    fontWeight: 'bold',
    fontSize: 27,
    paddingHorizontal: 25,
  },
  secondTitle: {
    fontSize: 27,
    paddingHorizontal: 25,
  },
});
