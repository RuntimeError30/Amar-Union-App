import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function Signup(props: any) {
  const handleLogin = () => {
    props.navigation.navigate("Login");
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
          bottom: "35%",
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
              সাইন আপ
            </Text>
            <Text
              style={{
                color: "#fff",
                fontFamily: "hindRegular",
              }}
            >
              ইনফর্মেশনগুলি প্রদান করে সাইন আপ করুন
            </Text>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              width: "90%",
              height: "10%",
              borderRadius: 10,
              fontFamily: "hindLight",
              marginBottom: 20,
              borderColor: "#fff",
            }}
            placeholder="নাম"
            placeholderTextColor={"white"}
          />
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              width: "90%",
              height: "10%",
              borderRadius: 10,
              fontFamily: "hindLight",
              marginBottom: 20,
              borderColor: "#fff",
            }}
            placeholder="এনআইডি নাম্বার"
            placeholderTextColor={"white"}
          />
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              width: "90%",
              height: "10%",
              borderRadius: 10,
              fontFamily: "hindLight",
              marginBottom: 20,
              borderColor: "#fff",
            }}
            placeholder="মোবাইল নাম্বার"
            placeholderTextColor={"white"}
          />

          <TextInput
            secureTextEntry={true}
            style={{
              borderWidth: 1,
              padding: 10,
              width: "90%",
              height: "10%",
              borderRadius: 10,
              fontFamily: "hindLight",
              borderColor: "#fff",
            }}
            placeholder="পাসওয়ার্ড"
            placeholderTextColor={"white"}
          />

          <TouchableOpacity
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
            <TouchableOpacity onPress={handleLogin}>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "hindLight",
                }}
              >
                আমার অ্যাকাউন্ট আছে
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
