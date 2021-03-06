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

  static async getLocation() {
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

    return { latitude, longitude };
  }

  navigate = async () => {
    const { navigation } = this.props;
    const location = await HomeScreen.getLocation();

    navigation.navigate("ArenaList", { location });
  }

  handleGrantPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      console.log("You must enable location services so we can retrieve the list of Arenas");
    }

    this.navigate();
  }

  async componentDidMount() {
    if (await Location.hasServicesEnabledAsync()) {
      this.navigate();
    }
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
