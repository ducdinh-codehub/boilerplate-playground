import React, { useRef } from 'react';
import { Text, View, ColorValue, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export interface IconProps {
  icon: string;
  size: number | undefined;
  color: ColorValue | number | undefined;
  style: object | undefined | any;
  onPress: (screen: string) => void | any;
}
export const Icon = (props: IconProps) => {
  const icon = (
    <MaterialCommunityIcons
      name={props.icon}
      style={props.style}
      size={props.size}
    />
  );
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={() => props.onPress(props.icon)}>
        {icon}
      </TouchableOpacity>
    );
  }
  return icon;
};
