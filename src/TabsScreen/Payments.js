import React from "react";
import { StyleSheet, View, Text, ImageBackground, require,TouchableOpacity} from "react-native";
import { Component } from "react";

const Payments = ({}) => {
  return (
     <View>
      <Text>Payments</Text>
      {/* <TouchableOpacity onPress={() => alert("FAB clicked")} style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Payments ;

const style = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  // fab: {
  //   position: "absolute",
  //   width: 56,
  //   height: 56,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   right: 20,
  //   bottom: 20,
  //   backgroundColor: "#00796A",
  //   borderRadius: 30,
  //   elevation: 8,
  // },
  // fabIcon: {
  //   fontSize: 40,
  //   color: "white",
  // },
});
