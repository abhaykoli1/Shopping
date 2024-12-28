import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Constants/Colors";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: responsiveWidth(30),
          height: responsiveHeight(30),
          resizeMode: "contain",
        }}
        source={require("../../assets/favicon.png")}
      />
      <Text
        style={{
          fontSize: responsiveFontSize(3),
          paddingHorizontal: responsiveWidth(5),
          // paddingHorizontal: ,
        }}
      >
        {/* <Text style={{ fontSize: 50 }}> */}
        welcsdsd dywdbwbdwu widhwudb sdsbud sdsndisdisdisdisndisnddsu bdbsu
        sddsbsu buaiqwqn wiqwqi bqsoqsjqi qosqjwqinbsudbsudb sdsnusd wuewuebw
        inwnwun sdswq9whq ansi asas.sasnasinaxn ome
      </Text>
      <View
        style={{
          marginTop: responsiveHeight(5),
          width: responsiveWidth(90),
          height: responsiveHeight(10),
          // height: 100,
          borderWidth: 1,
          // height: "80%",
          backgroundColor: "red",
          // borderRadius: 30,
          borderRadius: responsiveWidth(10),
        }}
      >
        <Text>Button</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    // width: responsiveWidth(100),
    // height: responsiveHeight(100),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY,
  },
});
