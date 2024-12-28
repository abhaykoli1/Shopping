import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 100 }}>
      <Button
        onPress={() => navigation.navigate("Dashboard")}
        title="Got o dashboard"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
