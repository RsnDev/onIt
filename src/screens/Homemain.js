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

const Homemain = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#00796A",
        height: height,
        width: width,
      }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00796A"
      />

      <View
        style={{ flex: 2, flexDirection: "column", backgroundColor: "#00796A" }}
      >
        {/* for location box   */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00796A",
            height: 45,
            marginTop: 2,
            marginLeft: 14,
            width: "93%",
            borderRadius: 4,
          }}
        >
          <Image
            source={require("../../assets/logo/111.png")}
            style={{
              padding: 10,
              margin: 5,
              height: 25,
              width: 25,
              resizeMode: "stretch",
              alignItems: "center",
            }}
          />

          <Text
            style={{
              flex: 1,
              fontWeight: "700",
              fontSize: 19,
              color: "#fff",
              marginLeft: 5,
            }}
          >
            Sector XXX, Noida
          </Text>

          <Image
            source={require("../../assets/logo/alert.png")}
            style={{
              padding: 10,
              margin: 5,
              height: 25,
              width: 25,
              resizeMode: "stretch",
              alignItems: "center",
            }}
          />
        </View>

        {/* for search box        */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            height: 45,
            marginTop: 10,
            marginLeft: 14,
            width: "93%",
            borderRadius: 4,
          }}
        >
          <Image
            source={require("../../assets/logo/search.png")}
            style={{
              margin: 10,
              height: 20,
              width: 20,
              resizeMode: "stretch",
              alignItems: "center",
            }}
          />
          <TextInput
            style={{
              flex: 1,
              fontWeight: "500",
              fontSize: 15,
              color: "white",
              marginLeft: 5,
              letterSpacing: 0,
            }}
            placeholder="Search for a service"
            underlineColorAndroid="transparent"
          />
          <Image
            source={require("../../assets/logo/mic.png")}
            style={{
              padding: 10,
              height: 16,
              width: 16,
              marginRight: 10,
              resizeMode: "stretch",
              alignItems: "center",
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 11,
          backgroundColor: "#fff",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          shadowColor: "#00000014",
          shadowRadius: 20,
          height: height,
          width: width,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            fontSize: 20,
            fontWeight: "700",
            marginLeft: 16,
            marginTop: 15,
          }}
        >
          Recommended Services:
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#fff",
            width: "100%",
            height: 139.5,
            marginLeft: 16,
            marginTop: 15,
            borderRadius: 5,
            position: "relative",
          }}
        >
          <Image
            source={require("../../assets/logo/Slider.png")}
            style={{ width: 260, height: 139.5 }}
          />
          <Image
            source={require("../../assets/logo/Slider.png")}
            style={{ marginLeft: 15, width: 260, height: 139.5 }}
          />
        </View>

        <Text
          style={{
            justifyContent: "center",
            fontSize: 19,
            fontWeight: "600",
            marginLeft: 16,
            marginTop: 20,
            marginBottom: 0,
            color: "#3A3A3A",
          }}
        >
          Services:
        </Text>

        {/* For services  */}

        {/* <ScrollView> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button0}
            onPress={() => navigation.navigate("ServiceNeeds")}
          >
            <Image
              style={{ marginTop: 1, marginLeft: 35, height: 40, width: 40 }}
              source={require("../../assets/logo/Service.png")}
            />
            <Text style={{ marginTop: 12, marginLeft: 10, height: 18 }}>
              Service Needs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("MoneyManager")}
          >
            <Image
              style={{ marginTop: 1, marginLeft: 35, height: 40, width: 40 }}
              source={require("../../assets/logo/Money.png")}
            />
            <Text style={{ marginTop: 12, marginLeft: 10, height: 18 }}>
              Money Manager
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("TaskManager")}
          >
            <Image
              style={{ marginTop: 0, marginLeft: 35, height: 40, width: 40 }}
              source={require("../../assets/logo/Task.png")}
            />
            <Text style={{ marginTop: 12, marginLeft: 10, height: 18 }}>
              Task Manager
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("Contacts")}
          >
            <Image
              style={{ marginTop: 1, marginLeft: 35, height: 40, width: 40 }}
              source={require("../../assets/logo/Contact.png")}
            />
            <Text style={{ marginTop: 12, marginLeft: 28, height: 18 }}>
              Contacts
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button1}
            // onPress={() => navigation.navigate("PersonalCare")}
            onPress={() => alert("coming soon")}
          >
            <Image
              style={{ marginTop: 1, marginLeft: 35, height: 40, width: 40 }}
              source={require("../../assets/logo/Pesonal.png")}
            />
            <Text style={{ marginTop: 12, marginLeft: 10, height: 18 }}>
              Personal Care
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("Reminders")}
          >
            <Image
              style={{ marginTop: 1, marginLeft: 35, height: 40, width: 40 }}
              source={require("../../assets/logo/Reminder.png")}
            />
            <Text style={{ marginTop: 12, marginLeft: 22, height: 18 }}>
              Reminders
            </Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default Homemain;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 10,
    height: 112,
    width: 165,
  },
  button0: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 25,
    height: 112,
    width: 165,
    marginBottom: 15,
    borderWidth: 1.2,
    borderColor: "#FFBB00",
  },
  button1: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 25,
    height: 112,
    width: 165,
    marginBottom: 15,
  },
  button2: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 25,
    height: 112,
    width: 165,
    marginBottom: 15,
    marginLeft: 20,
  },
});
