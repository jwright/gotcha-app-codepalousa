import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import ArenasQuery from "../../queries/Arenas";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

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

  if (loading) return <Loading />;
  if (error) return <ErrorMessage
                      error={error}
                      message="Error occured retrieving arenas. Try again later."
                    />;

  return (
    <View style={styles.container}>
      <Text>There were {data.arenas.length} arenas found for {latitude}/{longitude}.</Text>
    </View>
  );
};

export default ArenaListScreen;
