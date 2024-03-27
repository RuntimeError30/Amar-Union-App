import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";

export default function Login(props: any) {
  const handleReg = () => {
    props.navigation.navigate("Signup");
  };
  const goToDashboard = () => {
    props.navigation.navigate("Dashboard");
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          bottom: "20%",
        }}
      >
        <Image source={require("../assets/Images/black.png")} />
      </View>

      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          position: "absolute",
        }}
      >
        <View
          style={{
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            alignItems: "center",
            width: "100%",
            backgroundColor: "#1c1c1c",
            justifyContent: "center",
          }}
        >
          <View style={{ width: "100%", padding: 20, bottom: 30 }}>
            <Text
              style={{
                fontFamily: "hindBold",
                color: "#FF8E00",
                fontSize: 38,
              }}
            >
              লগ-ইন
            </Text>
            <Text
              style={{
                color: "#fff",
                fontFamily: "hindRegular",
              }}
            >
              ইনফর্মেশনগুলি প্রদান করে লগ-ই করুন
            </Text>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              width: "90%",
              height: "12%",
              borderRadius: 10,
              fontFamily: "hindLight",
              marginBottom: 20,
              borderColor: "#fff",
            }}
            placeholder="এনআইডি অথবা মোবাইল নাম্বার"
            placeholderTextColor={"white"}
          />

          <TextInput
            secureTextEntry={true}
            style={{
              borderWidth: 1,
              padding: 10,
              width: "90%",
              height: "12%",
              borderRadius: 10,
              fontFamily: "hindLight",
              borderColor: "#fff",
            }}
            placeholder="পাসওয়ার্ড"
            placeholderTextColor={"white"}
          />

          <TouchableOpacity
            onPress={goToDashboard}
            style={{
              width: "90%",
              marginTop: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#FF8E00",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "hindBold",
              }}
            >
              লগ-ইন
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 5,
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "hindLight",
                }}
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleReg}>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "hindLight",
                }}
              >
                নতুন অ্যাকাউন্ট রেজিস্ট্রেশন
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
