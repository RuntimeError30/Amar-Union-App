import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function dashboardmain() {
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
          backgroundColor: "#FF8E00",
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
          padding: 30,
          width: "100%",
          height: "50%",
          top: 20,
        }}
      >
        <View>
          <Text style={{ fontFamily: "hindRegular" }}>সিকিউরটি স্ট্যাটাস</Text>

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
                পাসওয়ার্ড স্ট্রং
              </Text>
            </View>

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
                অথেন্টিকেশন কোড অন আছে
              </Text>
            </View>

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
                সিকিউরিটি ফিচার্স অন আছে
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "hindRegular" }}>আপনার ভাতাসমূহ</Text>

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
                  মুক্তি্যোদ্ধা ভাতা
                </Text>
              </View>

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

          <View
            style={{
              borderRadius: 10,
              width: "100%",
              height: "50%",
              marginTop: 20,
              padding: 10,
              backgroundColor: "#fff",
              alignItems: "flex-start",
              overflow: "scroll",
              ...styles.shadow,
            }}
          >
            <Text
              style={{
                fontFamily: "hindRegular",
                marginLeft: 3,
              }}
            >
              লেটেস্ট নিউজসমূহ
            </Text>

            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "hindRegular",
                  fontSize: 17,
                  marginLeft: 3,
                }}
              >
                বাতাবী লেবুর বাম্পার ফলন, খুশি কৃষকেরা
              </Text>
            </View>
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
