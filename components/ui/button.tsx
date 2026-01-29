import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  label: string;
};

export function Button({ label, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles().button, style]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles().label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = () =>
  StyleSheet.create({
    button: {
      width: "100%",
      height: 50,
      backgroundColor: "#dc2626",
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      fontSize: 18,
      fontWeight: "600",
      color: "#ffffff",
    },
  });
