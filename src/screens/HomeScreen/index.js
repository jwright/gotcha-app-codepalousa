import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Gotcha!"
  };

  handleGrantPermissions = async () => {
    const { navigation } = this.props;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      console.log("You must enable location services so we can retrieve the list of Arenas");
    }

    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

    navigation.navigate("ArenaList", { location: { latitude, longitude } });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Gotcha!</Text>
        <Text>We will get you playing in a moment</Text>
        <Text>In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.</Text>
        <Button onPress={this.handleGrantPermissions} title="Find Nearby Arenas" />
      </View>
    );
  }
}

export default HomeScreen;
