import React, { useEffect } from 'react';
import { Example } from '../screens';
import { Playzone } from '../screens/Playzone/Playzone';
import { Home } from '../screens/Home/Home';
import { Search } from '../screens/Search/Search';
import { Favorite } from '@/screens/Favorite/Favorite';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from '../components/Icons/Icons';
import { StyleSheet, Dimensions } from 'react-native';
import { Transform } from 'stream';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
//const Stack = createStackNavigator();
const Stack = createBottomTabNavigator();
let LEFT_BOUNDARY = Dimensions.get('window').width - 150;
let RIGHT_BOUNDARY = -Dimensions.get('window').width;
// @refresh reset
const tabs = [
  {
    name: 'home',
    screen: Home,
  },
  {
    name: 'text-box-search',
    screen: Search,
  },
  {
    name: 'heart',
    screen: Favorite,
  },
];
const initialOffset = 0;
const MainNavigator = () => {
  const offset = useSharedValue(initialOffset);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const setOffset = (screen: string) => {
    console.log(screen, 'screen');
    if (screen === 'home') {
      (offset.value = withSpring(0)), -1, true;
    }
    if (screen === 'text-box-search') {
      (offset.value = withSpring(130)), -1, true;
    }
    if (screen === 'heart') {
      (offset.value = withSpring(260)), -1, true;
    }
  };

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderRadius: 30,
            backgroundColor: 'white',
          },
        }}
      >
        {tabs.map(({ name, screen }) => (
          <Stack.Screen
            name={name}
            component={screen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon
                  icon={name}
                  color={color}
                  size={35}
                  style={{}}
                  onPress={setOffset}
                />
              ),
            }}
          />
        ))}
      </Stack.Navigator>
      <Animated.View style={[style.borderIconStyle, animatedStyles]} />
    </>
  );
};

const style = StyleSheet.create({
  borderIconStyle: {
    marginTop: 717,
    marginLeft: 48,
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
  },
});

export default MainNavigator;
