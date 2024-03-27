import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import dashboardmain from "./dashboardmain";
import settings from "./settings";
import vata from "./vata";
import complain from "./complain";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          borderColor: "#FF8E00",
          backgroundColor: "#fff",
          justifyContent: "center",
          height: 80,
          alignItems: "center",
          borderRadius: 20,
          zIndex: 1,
          ...styles.shadow,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={dashboardmain}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  tintColor: focused ? "#FF8E00" : "",
                }}
                source={require("../assets/Images/home.png")}
              />
              <Text
                style={{
                  fontFamily: "hindBold",
                  color: focused ? "#FF8E00" : "",
                  fontSize: 12,
                }}
              >
                হোম
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="complain"
        component={complain}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  tintColor: focused ? "#FF8E00" : "",
                }}
                source={require("../assets/Images/complaint.png")}
              />
              <Text
                style={{
                  fontFamily: "hindBold",
                  color: focused ? "#FF8E00" : "",
                  fontSize: 12,
                }}
              >
                অভিযোগসমূহ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="vata"
        component={vata}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  tintColor: focused ? "#8fbf00" : "",
                }}
                source={require("../assets/Images/tk.png")}
              />
              <Text
                style={{
                  fontFamily: "hindBold",
                  color: focused ? "#8fbf00" : "",
                  fontSize: 12,
                }}
              >
                ভাতা
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={settings}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  tintColor: focused ? "#FF8E00" : "",
                }}
                source={require("../assets/Images/settings.png")}
              />
              <Text
                style={{
                  fontFamily: "hindBold",
                  color: focused ? "#FF8E00" : "",
                  fontSize: 12,
                }}
              >
                সেটিংস
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#FF8E00",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
