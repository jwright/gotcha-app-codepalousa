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

const ArenaListScreen = ({ navigation }) => {
  const { latitude, longitude } = navigation.getParam("location");

  return (
    <View style={styles.container}>
      <Text>You are viewing arenas for {latitude}/{longitude}.</Text>
    </View>
  );
};

export default ArenaListScreen;
