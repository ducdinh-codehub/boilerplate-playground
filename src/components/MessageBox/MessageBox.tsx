import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-ui-lib';
export interface messageBoxProps {
  title?: string | undefined;
}
export const MessageBox = (props: messageBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text>{props.title}</Text>
      </View>
      <View style={styles.contentBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '50%',
    width: '99%',
    borderWidth: 2,
    borderColor: 'black',
    position: 'absolute',
    marginTop: '30%',
  },
  titleBox: {
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {},
});
