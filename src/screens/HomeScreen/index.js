import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>You are on the home screen!</Text>
  </View>
);

export default HomeScreen;
