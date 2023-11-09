import React from 'react';
import { Text, View } from 'react-native';
import { MainHeader } from '@/components/MainHeader/MainHeader';
export const Home = () => {
  return (
    <View>
      <MainHeader title="Travel App" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    </View>
  );
};
