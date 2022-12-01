// import React, { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Keyboard,
//   ScrollView,
// } from "react-native";
// import Task from "../../utils/components/appoint";

// export default function App() {
//   const [task, setTask] = useState();
//   const [taskItems, setTaskItems] = useState([]);

//   const handleAddTask = () => {
//     Keyboard.dismiss();
//     setTaskItems([...taskItems, task]);
//     setTask(null);
//   };

//   const completeTask = (index) => {
//     let itemsCopy = [...taskItems];
//     itemsCopy.splice(index, 1);
//     setTaskItems(itemsCopy);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Added this scroll view to enable scrolling when list gets longer than the page */}
//       <ScrollView
//         contentContainerStyle={{
//           flexGrow: 1,
//         }}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Today's Tasks */}
//         <View style={styles.tasksWrapper}>
//           <Text style={styles.sectionTitle}>Contacts</Text>
//           <View style={styles.items}>
//             {/* This is where the tasks will go! */}
//             {taskItems.map((item, index) => {
//               return (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => completeTask(index)}
//                 >
//                   <Task text={item} />
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         </View>
//       </ScrollView>

//       {/* Write a task */}
//       {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.writeTaskWrapper}
//       >
//         <TextInput
//           style={styles.input}
//           placeholder={"Write a task"}
//           value={task}
//           onChangeText={(text) => setTask(text)}
//         />
//         <TouchableOpacity onPress={() => handleAddTask()}>
//           <View style={styles.addWrapper}>
//             <Text style={styles.addText}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E8EAED",
//   },
//   tasksWrapper: {
//     paddingTop: 20,
//     paddingHorizontal: 0,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginLeft: 15,
//   },
//   items: {
//     marginTop: 20,
//     height: 70,
//   },
//   writeTaskWrapper: {
//     position: "absolute",
//     bottom: 60,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: "#FFF",
//     borderRadius: 60,
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#00796A",
//     borderRadius: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//   },
//   addText: {
//     color: "#fff",
//     fontSize: 30,
//   },
// });

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
//import { Contacts } from "expo";
import Contacts from "react-native-contacts";
//import contacts from
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      contacts: [],
    };
  }

  loadContacts = async () => {
    const permission = await Expo.Permissions.askAsync(
      Expo.Permissions.CONTACTS
    );

    if (permission.status !== "granted") {
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
    });

    console.log(data);
    this.setState({ contacts: data, inMemoryContacts: data, isLoading: false });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadContacts();
  }

  renderItem = ({ item }) => (
    <View style={{ minHeight: 70, padding: 5 }}>
      <Text style={{ color: "#bada55", fontWeight: "bold", fontSize: 26 }}>
        {item.firstName + " "}
        {item.lastName}
      </Text>
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {item.phoneNumbers[0].digits}
      </Text>
    </View>
  );

  searchContacts = (value) => {
    const filteredContacts = this.state.inMemoryContacts.filter((contact) => {
      let contactLowercase = (
        contact.firstName +
        " " +
        contact.lastName
      ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ contacts: filteredContacts });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: "#2f363c" }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#dddddd"
          style={{
            backgroundColor: "#2f363c",
            height: 50,
            fontSize: 36,
            padding: 10,
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
          }}
          onChangeText={(value) => this.searchContacts(value)}
        />
        <View style={{ flex: 1, backgroundColor: "#2f363c" }}>
          {this.state.isLoading ? (
            <View
              style={{
                ...StyleSheet.absoluteFill,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="large" color="#bad555" />
            </View>
          ) : null}
          <FlatList
            data={this.state.contacts}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50,
                }}
              >
                <Text style={{ color: "#bad555" }}>No Contacts Found</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
