import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


function Icon({ name, size = 40, color = "white", onPress }) {
  return (
    <View
      style={{
        alignItems: 'center',
        borderRadius: size / 2,
        height: size,
        justifyContent: "center",
        width: size,
        }}>
      <MaterialCommunityIcons name={name} color={color} size={size} onPress={onPress} />
    </View>
  );
};

export default Icon;