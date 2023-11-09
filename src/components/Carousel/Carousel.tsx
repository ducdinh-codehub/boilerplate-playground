import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SBItem } from '../CarouselComponent/SBItem';
import { ElementsText } from '../../constants/index';
import { FadeInRight } from 'react-native-reanimated';
export interface CarouselProps {
  isOpenBottomSheet: boolean;
  setIsOpenBottomSheet: any;
}
export const CarouselSlideLeft = () => {
  const [mode, setMode] = React.useState<any>('horizontal-stack');
  const [snapDirection, setSnapDirection] = React.useState<'left' | 'right'>(
    'left',
  );
  const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
  const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
  const [loop, setLoop] = React.useState<boolean>(true);
  const [autoPlay, setAutoPlay] = React.useState<boolean>(false);
  const [autoPlayReverse, setAutoPlayReverse] = React.useState<boolean>(false);

  const data = React.useRef<number[]>([...new Array(6).keys()]).current;
  const viewCount = 5;

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        width={350}
        height={270}
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        mode={mode}
        loop={loop}
        autoPlay={autoPlay}
        autoPlayReverse={autoPlayReverse}
        data={data}
        modeConfig={{
          snapDirection,
          stackInterval: mode === 'vertical-stack' ? 8 : 18,
        }}
        customConfig={() => ({ type: 'positive', viewCount })}
        renderItem={({ index }) => (
          <SBItem
            index={index}
            key={index}
            entering={FadeInRight.delay((viewCount - index) * 100).duration(
              200,
            )}
            pretty={true}
          />
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      ></View>
    </View>
  );
};
