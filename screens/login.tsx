import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class login extends Component {
  render() {
    return (
      <View style={styles.parentDiv}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.linearGradients}
        ></LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentDiv: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradients: {
    width: 100,
  },
});
