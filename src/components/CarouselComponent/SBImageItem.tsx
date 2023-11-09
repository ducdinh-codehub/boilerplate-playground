import React, { useContext } from 'react';
import type { StyleProp, ViewStyle, ImageURISource } from 'react-native';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  Text,
  Touchable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FlightDetailContext from '@/Context/FlightDetails/FlightDetailContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  index?: number;
  showIndex?: boolean;
}

export const SBImageItem: React.FC<Props> = ({ style, index: _index }) => {
  const index = (_index || 0) + 1;
  const source = React.useRef<ImageURISource>({
    uri: `https://picsum.photos/id/${index}/400/300`,
  }).current;
  const { isOpenBottomSheet, setIsOpenBottomSheet } =
    useContext(FlightDetailContext);

  const onPressFlight = () => {
    setIsOpenBottomSheet(!isOpenBottomSheet);
  };
  return (
    <View style={styles.imageFrame}>
      <View style={[styles.container, style]}>
        <ActivityIndicator size="small" />
        <Image key={index} style={styles.image} source={source} />
        {/* <Text
          style={{
            position: 'absolute',
            color: 'white',
            fontSize: 40,
            borderRadius: 5,
            overflow: 'hidden',
            paddingHorizontal: 10,
            paddingTop: 2,
          }}
        >
          {showIndex ? index : ''}
        </Text> */}
      </View>
      <View style={styles.textBorder}>
        <MaterialCommunityIcons name="crosshairs-gps" size={25} />
        <View>
          <Text>Location name...</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: '25%' }}>
          <Icon name="heart-o" size={25} style={{ marginRight: '15%' }} />
          <TouchableOpacity onPress={onPressFlight}>
            <MaterialCommunityIcons name="airplane" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '97%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  imageFrame: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#f5f5f0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textBorder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
