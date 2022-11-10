import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  ImageRequireSource,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PhoneInput from "react-native-phone-number-input";
import "react-native";
import { AuthContext } from "../../utils/components/AuthContext";

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const phoneInput = React.useRef(null);
  //const val = useContext(AuthContext);

  //const { NewLogin } = useContext(AuthContext);

  const handleAddTask = () => {
    console.log(phoneNumber);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#fff" />

      <View
        style={{ flex: 2, flexDirection: "column", backgroundColor: "#fff" }}
      >
        <ImageBackground
          source={require("../../assets/image/login.jpg")}
          style={{ flex: 1, backgroundColor: "#fff", resizeMode: "cover" }}
        />
        {/* <Text style={{ fontSize: 35, fontWeight: 'bold', paddingLeft: 20 }}>Sign Up!</Text> */}
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          shadowColor: "#ddd",
          shadowRadius: 20,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            fontSize: 24,
            fontWeight: "900",
            marginLeft: 110,
            marginTop: 30,
          }}
        >
          Everything OniT
        </Text>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <Text>{val}</Text> */}
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            containerStyle={{
              width: "92%",
              height: 60,
              marginTop: 10,
              marginLeft: 5,
              borderWidth: 1.0,
              borderColor: "#ddd",
              borderRadius: 3,
            }}
            textContainerStyle={{
              paddingVertical: 0,
              backgroundColor: "white",
            }}
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
            defaultCode="IN"
            layout="first"
            withShadow
            autoFocus
          />
          <Pressable
            style={{
              justifyContent: "center",
              width: "92%",
              backgroundColor: "#00796A",
              height: 50,
              marginTop: 20,
              marginLeft: 10,
              marginRight: 7,
              borderRadius: 3,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Homem")}
            //onPress={() => handleAddTask()}

            android_ripple="red"
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                letterSpacing: 1.5,
                textAlign: "center",
                position: "relative",
                color: "#fff",
              }}
            >
              Login
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              width: "98%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "black",
                alignSelf: "center",
                marginTop: 15,
              }}
            >
              Don't have an account?
            </Text>
            <View>
              <Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text
                    style={{
                      color: "#00796A",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginTop: 15,
                      marginLeft: 5,
                      textDecorationLine: "underline",
                    }}
                  >
                    Signup
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>

        {/* <Buttons btn_text={"Login"} on_press={() => navigation.navigate("Homem")} /> */}
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({});
