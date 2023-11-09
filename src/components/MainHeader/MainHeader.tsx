import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScreenHeader } from '../ScreenHeader/ScreenHeader';
export interface MainHeaderProps {
  title: String;
}
export const MainHeader = (props: MainHeaderProps) => {
  return (
    <>
      <View style={[style.container]}>
        <TouchableOpacity>
          <MaterialCommunityIcon
            name="view-headline"
            size={35}
          ></MaterialCommunityIcon>
        </TouchableOpacity>

        <Text style={style.title}>{props.title}</Text>
        <TouchableOpacity>
          <MaterialCommunityIcon
            name="bell-circle"
            size={35}
          ></MaterialCommunityIcon>
        </TouchableOpacity>
      </View>
      <ScreenHeader />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
