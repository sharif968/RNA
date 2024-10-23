import {  Text, View } from "react-native";
import "../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const App = () => {
  return (
    <>
      <View className = "flex justify-center items-center bg-red-500  " >
        <Text className="text-5xl font-bold text-red-500">RNA</Text>
        <StatusBar style="auto" />
        <Link href="/profile"  >
          Go to Profile
        </Link>
      </View>
    </>
  );
};

export default App;
