import "react-native";
import { StyleSheet, StatusBar, View } from "react-native";
import TabNavigator from "../../utils/TabNavigator";
import React from "react";

const Homem = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#00796A" }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00796A"
      />
      <TabNavigator></TabNavigator>
    </View>
  );
};

export default Homem;
const styles = StyleSheet.create({});
