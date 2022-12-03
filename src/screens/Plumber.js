import React, { useState, useRef, Component } from "react";
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
  ToastAndroid,
} from "react-native";
import { BottomSheet } from "react-native-btr";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const Plumber = ({ navigation }) => {
  const styleTypes = ["dark-content"];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);
  const [width, setWidth] = useState();
  const [text, setText] = useState();

  const [selectedValue, setSelectedValue] = useState(false);

  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  console.log(text);

  const onsubmit = async () => {
    setVisible(true);
    let specific_requirement = text;
    let payload = {
      personal_details: {
        primary_phone: {
          country_code: "+91",
          mobile_number: "9198979699",
        },
        alternate_phone: {
          country_code: "+91",
          mobile_number: "9191919191",
        },
        name: "Test",
      },
      specific_requirement: specific_requirement,
      service_provided_for: "637b7a0e7c7cd9e139b39d1e",
      address_details: {
        house_number: "Ho No. 2577 ",
        locality: "sector142",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
        country: "INDIA",
      },
      time_preference: {
        time_preference_type: "WITHIN_24_HOURS",
        specific_date_time: "2022-11-18T09:42:47.361Z",
      },
      offers_applied: {
        offer_code: "OniT 2022",
      },
    };

    console.log(payload);
    try {
      await axios({
        method: "post",
        url: "https://api.onit.services/center/public-ticket-booking",
        data: payload,
        confif: {
          headers: {
            "Content-Type": "application/json",
          },
        },
      }).then(() => {
        setVisible(false);
        ToastAndroid.show("Request Raised", ToastAndroid.SHORT);
        navigation.navigate("SuccessFull", { data: payload });
      });
    } catch (error) {
      setVisible(false);
      ToastAndroid.show(
        error?.response?.data?.message + "!",
        ToastAndroid.SHORT
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <TouchableOpacity
        // onPress={toggleBottomNavigationView}
        >
          <Image
            source={require("../../assets/logo/location.png")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>

        {/* for bottomsheet */}

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
        {/* <Image
          source={require("../../assets/logo/pen.png")}
          style={{ height: 25, width: 25 }}
        /> */}
      </View>

      {/* for choosed service section */}
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
          Plumber
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
            marginTop: 15,
            fontWeight: "600",
          }}
        >
          Please fill the details:
        </Text>
      </View>

      {/* for Details section */}
      <View style={{ height: 150, marginTop: 10 }}>
        {/* For name */}
        <View style={styles.msgStyle}>
          <TextInput
            style={{
              flex: 1,
              fontWeight: "700",
              fontSize: 15,
              color: "black",
              marginLeft: 15,
            }}
            underlineColorAndroid="transparent"
            placeholder="Specific Requirement "
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
            placeholderTextColor="#737373"
          />
        </View>

        {/* for visit schedule */}
        <View style={styles.withinStyle}>
          <Image
            source={require("../../assets/logo/Clock.png")}
            style={{
              height: 30,
              width: 25,
              marginLeft: 10,
              justifyContent: "flex-start",
            }}
          />
          <Picker
            selectedValue={selectedValue}
            style={{ height: 60, width: 250, fontWeight: "600" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Immediately" value="Immediately" />
            <Picker.Item label="Within 24 Hours" value="Within 24 Hours" />
            <Picker.Item
              label="Specific Date & time"
              value="Specific Date & time"
            />
          </Picker>
          {/* <Text
          style={{
            flex: 1,
            fontWeight: "700",
            fontSize: 15,
            color: "black",
            marginLeft: 10,
          }}
        >
          Visit Schedule
        </Text> */}
        </View>
      </View>

      {/* for coupon */}
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
        {/* <Text style={{ color: "#0066FF" }}>change</Text> */}
      </View>

      {/* for amount */}
      <View style={styles.cStyle}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            margin: 10,
          }}
        >
          <Text>ADVANCE</Text>
          <Text>₹99</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            margin: 10,
          }}
        >
          <Text>Service Total</Text>
          <Text>₹200</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            margin: 10,
          }}
        >
          <Text>Total</Text>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#00796A" }}>
            ₹200
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          width: "95%",
          backgroundColor: "#00796A",
          height: 50,
          marginTop: 60,
          marginLeft: 10,
          borderRadius: 3,
        }}
        //</View>onPress={() => { console.log("coming soon") }}>
        // onPress={() => {
        //   navigation.navigate("SuccessFull");
        // }}

        onPress={onsubmit}
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
    height: 50,
    marginLeft: 22,
    marginBottom: 10,
    marginRight: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  withinStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 56,
    margin: 22,
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
    //flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
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

export default Plumber;
