import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
// import CircularProgress from "react-native-circular-progress-indicator";
import * as Animatable from "react-native-animatable";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Home() {
  const HeaderCardHeight = useSharedValue(0);

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: HeaderCardHeight.value,
    };
  });
  useEffect(() => {
    HeaderCardHeight.value = withTiming(300, { duration: 1500 });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          {
            height: 300,
            width: "100%",
            backgroundColor: "blue",
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          },
          headerStyle,
        ]}
      ></Animated.View>
      <View style={{ height: "100%", width: "100%" }}>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
        ></View>
      </View>
    </View>
  );
}
{
  /* <CircularProgress
  value={90}
  radius={50}
  activeStrokeColor="red"
  duration={100}
  progressValueColor="red"
  maxValue={200}
  title={"KH/h"}
  titleColor={"black"}
/> */
}

const styles = StyleSheet.create({});
