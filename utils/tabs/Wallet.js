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
  Alert,
} from "react-native";

const Wallet = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          height: 60,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Homem");
          }}
        >
          <Image
            source={require("../../assets/logo/back.png")}
            style={{
              height: 26,
              width: 27,
              alignItems: "center",
              marginLeft: 10,
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 120,
            fontSize: 19,
            fontWeight: "600",
          }}
        >
          Wallet
        </Text>
      </View>

      {/* for refer your friend */}
      <View
        style={{
          flexDirection: "row",
          height: 115,
          backgroundColor: "#00796A",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#fff",
            marginTop: 14,
            marginLeft: 14,
          }}
        >
          Refer Your Friends{"\n"}
          and Earn{"\n"}
          <Text
            style={{
              fontSize: 15,
              Color: "#fff",
              fontWeight: "400",
              marginTop: 10,
            }}
          >
            They get ₹100,You get ₹100
          </Text>
        </Text>
        <Image
          source={require("../../assets/logo/wallet.png")}
          style={{
            height: 55,
            width: 57,
            alignItems: "center",
            marginLeft: 4,
            marginTop: 25,
            marginLeft: 100,
            marginRight: 20,
          }}
        />
      </View>

      {/* for wallet dashboard */}
      <View
        style={{
          flexDirection: "row",
          height: 140,
          backgroundColor: "skyblue",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "black",
            marginLeft: 40,
            marginTop: 60,
          }}
        >
          Hello
        </Text>
      </View>

      {/* for Bonus Section */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          height: 60,
          //marginTop: 15,
          //marginLeft: 20,
          //marginRight: 20,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: "#fff",
        }}
      >
        <Image
          source={require("../../assets/logo/pwallet.png")}
          style={{
            height: 20,
            width: 25,
            alignItems: "center",
            marginLeft: 5,
          }}
        />
        <Text
          style={{
            flex: 0.9,
            fontWeight: "500",
            fontSize: 16,
            color: "black",
            marginLeft: 20,
          }}
        >
          Bonus Amount
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            marginRight: 5,
          }}
        >
          ₹5000
        </Text>
      </View>

      {/* for Refund Amount */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          height: 60,
          //marginTop: 15,
          //marginLeft: 20,
          //marginRight: 20,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: "#fff",
        }}
      >
        <Image
          source={require("../../assets/logo/pwallet.png")}
          style={{
            height: 20,
            width: 25,
            alignItems: "center",
            marginLeft: 5,
          }}
        />
        <Text
          style={{
            flex: 0.9,
            fontWeight: "500",
            fontSize: 16,
            color: "black",
            marginLeft: 20,
          }}
        >
          Bonus Amount
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            marginRight: 5,
          }}
        >
          ₹5000
        </Text>
      </View>

      {/* for Refer Earning */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          height: 60,
          //marginTop: 15,
          //marginLeft: 20,
          //marginRight: 20,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: "#fff",
        }}
      >
        <Image
          source={require("../../assets/logo/pwallet.png")}
          style={{
            height: 20,
            width: 25,
            alignItems: "center",
            marginLeft: 5,
          }}
        />
        <Text
          style={{
            flex: 0.9,
            fontWeight: "500",
            fontSize: 16,
            color: "black",
            marginLeft: 20,
          }}
        >
          Bonus Amount
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            marginRight: 5,
          }}
        >
          ₹5000
        </Text>
      </View>
    </View>
  );
};

export default Wallet;

const style = StyleSheet.create({});
