import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useQuery } from "@apollo/react-hooks";

import ArenasQuery from "../../queries/Arenas";

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
  const { loading, error, data } = useQuery(ArenasQuery, {
    variables: {
      latitude, longitude, radius: 25,
    }
  });

  return (
    <View style={styles.container}>
      <Text>You are viewing arenas for {latitude}/{longitude}.</Text>
    </View>
  );
};

export default ArenaListScreen;
