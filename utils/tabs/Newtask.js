import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageRequireSource,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useState } from "react";

const { height, width } = Dimensions.get("window");

const Reminders = ({ navigation }) => {
  // const Images = [

  // ]

  return (
    <View style={{ flex: 1, backgroundColor: "#00796A" }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />

      <View
        style={{ flex: 2, flexDirection: "column", backgroundColor: "#00796A" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            source={require("../../assets/image/add.jpg")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "93%",
              height: "100%",
            }}
          />
          {/* <Image source={require('../../assets/logo/Slider.png')} style={{ marginLeft: 15, width: 260, height: 139.5, }} /> */}
        </View>
      </View>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({});
