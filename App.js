import React from "react";
import { Text, View } from "react-native";
import Navigation from "./Navigation";
import { AuthProvider } from "./utils/components/AuthContext";

const App = () => {
  return (
    //<AuthProvider>
    <Navigation />
    //</AuthProvider>
  );
};

export default App;
