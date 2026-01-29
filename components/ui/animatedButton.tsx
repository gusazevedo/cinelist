import React, { useRef } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from "react-native";

type AnimatedButtonProps = TouchableOpacityProps & {
  label: string;
};

export function AnimatedButton({ label, style, ...rest }: AnimatedButtonProps) {
  const translateY = useRef(new Animated.Value(-4)).current;

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: -3,
      useNativeDriver: true,
      tension: 1000,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(translateY, {
      toValue: -6,
      useNativeDriver: true,
      tension: 1000,
    }).start();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style, styles.pushable]}
      {...rest}
    >
      <Animated.View style={[styles.front, { transform: [{ translateY }] }]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pushable: {
    backgroundColor:
      "hsl(339.88023952095807, 94.3502824858757%, 34.70588235294118%)",
    borderRadius: 12,
  },
  front: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "hsl(345, 100%, 47%)",
  },
  label: {
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 0.4,
    color: "#ffffff",
  },
});
