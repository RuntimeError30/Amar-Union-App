import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

export default function vata() {
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "20%",
          padding: 30,
          backgroundColor: "#8fbf00",
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontFamily: "hindLight",
                fontSize: 15,
                color: "#fff",
              }}
            >
              স্বাগতম,
            </Text>
            <Text
              style={{
                fontFamily: "hindBold",
                fontSize: 25,
                color: "#fff",
                top: -10,
              }}
            >
              মোহাম্মাদ দারাইন খান
            </Text>
          </View>

          <Image
            style={{
              borderRadius: 50,
            }}
            source={require("../assets/Images/darain.png")}
          />
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          padding: 30,
          width: "100%",
          height: "50%",
          top: 0,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            width: "100%",
            marginTop: 10,
            padding: 10,
            backgroundColor: "#fff",
            alignItems: "flex-start",
            ...styles.shadow,
          }}
        >
          <Text
            style={{
              fontFamily: "hindBold",
              fontSize: 22,
            }}
          >
            ভাতার জন্য আবেদন করুন
          </Text>

          <Text
            style={{
              fontFamily: "hindRegular",
              fontSize: 14,
            }}
          >
            ভাতার জন্য আবেদন করতে নিচের ফর্মটি ফিল-আপ করুন
          </Text>

          <View style={{ marginTop: 30, width: "100%" }}>
            <Text
              style={{
                fontFamily: "hindRegular",
                fontSize: 17,
              }}
            >
              ভাতা টাইপ
            </Text>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "মুক্তিযোদ্ধা ", value: "Freedom-Fighter" },
                { label: "বয়স্ক ", value: "aged" },
              ]}
            />
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                borderWidth: 1,
              }}
            >
              <Text style={{}}>অভিযোগের ছবি আপলোড করুন</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: "#8fbf00",
                ...styles.shadow,
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "hindBold" }}>অভিযোগ দিন</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderRadius: 10,
            width: "100%",
            height: "40%",
            marginTop: 20,
            padding: 10,
            backgroundColor: "#fff",
            alignItems: "flex-start",

            ...styles.shadow,
          }}
        >
          <Text
            style={{
              fontFamily: "hindRegular",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            আপনার একটিভ ভাতাসমুহ
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ tintColor: "#84CC16" }}
              source={require("../assets/Images/warning.png")}
            />
            <Text
              style={{
                fontFamily: "hindRegular",
                fontSize: 17,
                marginLeft: 3,
              }}
            >
              বয়স্ক ভাতা
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});
