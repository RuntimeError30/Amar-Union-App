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

export default function settings() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "20%",
          padding: 30,
          backgroundColor: "#f53b57",
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

      <ScrollView>
        <View style={{ flex: 1 }}>
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
                প্রোফাইল সেটিংস
              </Text>

              <Text
                style={{
                  fontFamily: "hindRegular",
                  fontSize: 14,
                }}
              >
                সাধারণ সেটিংস
              </Text>

              <View style={{ marginTop: 30, width: "100%" }}>
                <View>
                  <Text
                    style={{
                      fontFamily: "hindRegular",
                      fontSize: 14,
                    }}
                  >
                    আপনার ঠিকানা
                  </Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      padding: 5,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "hindRegular",
                      fontSize: 14,
                    }}
                  >
                    আপনার ইমেইল এড্রেস (যদি থাকে)
                  </Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      padding: 5,
                      borderRadius: 10,
                    }}
                  />
                </View>

                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10,
                    backgroundColor: "#f53b57",
                    ...styles.shadow,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontFamily: "hindBold", color: "#fff" }}>
                    আপডেট করুন
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                borderRadius: 10,
                width: "100%",

                marginTop: 20,
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
                সিকিউরিটি সেটিংস
              </Text>
              <Text
                style={{
                  fontFamily: "hindRegular",
                  fontSize: 17,
                  marginBottom: 10,
                }}
              >
                পাসওয়ার্ড পরিবর্তন
              </Text>

              <View
                style={{
                  marginTop: 5,
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "hindRegular",
                    fontSize: 14,
                  }}
                >
                  বর্তমান পাসওয়ার্ড
                </Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 5,
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "hindRegular",
                    fontSize: 14,
                  }}
                >
                  নতুন পাসওয়ার্ড
                </Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 5,
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "hindRegular",
                    fontSize: 14,
                  }}
                >
                  নতুন পাসওয়ার্ড (রিটাইপ)
                </Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
