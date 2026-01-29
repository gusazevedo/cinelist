import { RefObject } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type InputProps = TextInputProps & {
  ref?: RefObject<TextInput | null>;
};

export function Input({ ...rest }: InputProps) {
  return <TextInput style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 45,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#334155",
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
    borderColor: "#475569",
    borderWidth: 2,
    borderRadius: 12,
  },
});
