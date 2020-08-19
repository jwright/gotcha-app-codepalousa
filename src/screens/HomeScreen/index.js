import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

class HomeScreen extends React.Component {
  onFindLocationPress() {
    return alert("Ask for location now!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Gotcha!</Text>
        <Text>We will get you playing in a moment</Text>
        <Text>In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.</Text>
        <Button onPress={this.onFindLocationPress} title="Find Nearby Arenas" />
      </View>
    );
  }
}

export default HomeScreen;
