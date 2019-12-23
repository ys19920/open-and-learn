import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import SwitchButton from 'switch-button-react-native';
export default function SwitchButtons(prop) {
  return (
    <View>
      <SwitchButton
        onValueChange={val => prop.switchMode(val)}
        text1='Tap'
        text2='Handsfree'
        switchWidth={180}
        switchHeight={44}
        switchdirection='ltr'
        switchBorderRadius={100}
        switchSpeedChange={500}
        switchBorderColor='#d4d4d4'
        switchBackgroundColor='#fff'
        btnBorderColor='#F36D36'
        btnBackgroundColor='#F36D36'
        fontColor='#333333'
        activeFontColor='#fff'
      />
    </View>
  );
}
