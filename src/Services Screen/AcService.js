import React, { useState } from "react";
import {
  SafeAreaView,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Color,
  Image,
  TextInput,
  ImageRequireSource,
  TouchableOpacity,
} from "react-native";

const AcService = ({ navigation }) => {
  const styleTypes = ["dark-content"];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);
  const [width, setWidth] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <Image
          source={require("../../assets/logo/location.png")}
          style={styles.imageStyle}
        />
        <Text
          style={{
            flex: 0.5,
            marginLeft: 16,
            fontSize: 18,
            fontWeight: "700",
            color: "#00796A",
          }}
        >
          Sector 104, Noida
        </Text>
        <Image
          source={require("../../assets/logo/pen.png")}
          style={{ height: 25, width: 25 }}
        />
      </View>
      <View style={styles.plumberStyle}>
        <Image
          source={require("../../assets/logo/plmber.png")}
          style={styles.imageStyle}
        />
        <Text
          style={{
            flex: 0.9,
            fontWeight: "700",
            fontSize: 18,
            color: "black",
            marginLeft: 15,
          }}
        >
          AcService
        </Text>
        <Image
          source={require("../../assets/logo/down.png")}
          style={{ height: 25, width: 25 }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 15,
            marginTop: 24,
            fontWeight: "600",
          }}
        >
          Please fill the details:
        </Text>
      </View>
      <View style={styles.msgStyle}>
        <TextInput
          style={{
            flex: 1,
            fontWeight: "700",
            fontSize: 15,
            color: "black",
            marginLeft: 15,
          }}
          placeholder="Share Your Requirement "
          underlineColorAndroid="transparent"
          placeholderTextColor="#737373"
        />
      </View>
      <View style={styles.withinStyle}>
        <Image
          source={require("../../assets/logo/Clock.png")}
          style={{ height: 30, width: 25, marginLeft: 10 }}
        />
        <Text
          style={{
            flex: 1,
            fontWeight: "700",
            fontSize: 15,
            color: "black",
            marginLeft: 10,
          }}
        >
          Visit Schedule
        </Text>
      </View>
      <View style={styles.couponStyle}>
        <Image
          source={require("../../assets/logo/tag.png")}
          style={{ height: 30, width: 25, marginLeft: 10 }}
        />
        <TextInput
          style={{
            flex: 0.87,
            fontWeight: "700",
            fontSize: 18,
            color: "black",
            marginLeft: 35,
          }}
          placeholder="Offer Code"
          underlineColorAndroid="transparent"
          //placeholderTextColor=""
        />
        <Text style={{ color: "#0066FF" }}>change</Text>
      </View>

      <View style={styles.cStyle}>
        <TextInput
          style={{
            flex: 1,
            fontWeight: "700",
            fontSize: 18,
            color: "black",
            marginLeft: 5,
          }}
          placeholder="OniT 2022"
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          width: "95%",
          backgroundColor: "#00796A",
          height: 50,
          marginTop: 130,
          marginLeft: 10,
          borderRadius: 3,
        }}
        //</View>onPress={() => { console.log("coming soon") }}>
        onPress={() => {
          navigation.navigate("Payment");
        }}
      >
        <Text
          style={{
            fontWeight: "400",
            fontSize: 18,
            letterSpacing: 1,
            textAlign: "center",
            position: "relative",
            color: "#fff",
          }}
        >
          charge your Wallet
        </Text>
      </TouchableOpacity>

      <StatusBar backgroundColor="#fff" barStyle={styleStatusBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  sectionStyle: {
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#fff",
    height: 65,
    marginLeft: 0,
  },
  imageStyle: {
    //padding: 10,
    //margin: 5,
    height: 25,
    width: 25,
    //resizeMode: 'stretch',
    alignItems: "center",
    marginLeft: 20,
  },
  plumberStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    marginTop: 15,
  },
  msgStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 56,
    margin: 16,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  withinStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 56,
    margin: 16,
    marginTop: 9,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  couponStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#00796A",
    borderStyle: "dashed",
  },
  cStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 130,
    marginTop: 24,
  },
  inStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00796A",
    height: 56,
    margin: 16,
    marginBottom: 16,
    marginTop: 105,
    borderRadius: 2,
  },
  textStyle: {
    color: "#fff",
  },
});

export default AcService;
