import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../Constants/Colors";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
const AnimatableBtn = Animatable.createAnimatableComponent(TouchableOpacity);
export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: "100%", width: "auto" }}
        source={require("../../assets/F.jpg")}
      />
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.7)"]}
        style={{ height: "100%", width: "100%", position: "absolute" }}
      >
        <View
          style={{
            alignSelf: "center",
            position: "absolute",
            bottom: 60,
            width: "90%",
          }}
        >
          <Animatable.Text
            animation={"slideInUp"}
            style={{
              fontSize: 45,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {"Protext\nYour Health\nCampain"}
          </Animatable.Text>
          <Animatable.Text
            animation={"slideInUp"}
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "white",
              marginTop: 10,
            }}
          >
            {
              "Elevate your fitness with cutting edge to fuel your motivation & crush your goals"
            }
          </Animatable.Text>
          <AnimatableBtn
            onPress={() => {
              navigation.navigate("Home");
            }}
            animation={"slideInUp"}
            style={{
              width: "100%",
              height: 55,
              backgroundColor: colors.PRIMARY,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: colors.white }}
            >
              Get Started
            </Text>
          </AnimatableBtn>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});
