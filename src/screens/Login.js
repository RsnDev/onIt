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
          style={{
            flex: 1,
            backgroundColor: "#fff",
            resizeMode: "cover",
            marginBottom: 0,
          }}
        />

        {/* <Text style={{ fontSize: 35, fontWeight: 'bold', paddingLeft: 20 }}>Sign Up!</Text> */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Services and More...
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              color: "#636363",
              marginTop: 7,
            }}
          >
            Your complete personal assistant.
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderWidth: 0.5,
          borderColor: "#ddd",
          marginTop: 40,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 44,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            fontSize: 24,
            fontWeight: "900",
            marginLeft: 110,
            marginTop: 20,
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
