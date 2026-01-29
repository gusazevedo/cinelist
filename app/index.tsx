import { AnimatedButton } from "@/components/ui/animatedButton";
import { Input } from "@/components/ui/input";
import { Image } from "expo-image";
import { useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding", android: "height" })}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 20 })}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <Hero />
              <Form />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function Hero() {
  return (
    <View style={heroStyles.container}>
      <View style={heroStyles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.svg")}
          style={heroStyles.logo}
          contentFit={"contain"}
        />
      </View>
      <View>
        <Text style={heroStyles.title}>Bem-vindo ao Cinelist</Text>
        <Text style={heroStyles.subtitle}>
          Encontre e descubra filmes, séries e tudo sobre a sétima arte!
        </Text>
      </View>
    </View>
  );
}

function Form() {
  const pswdInputRef = useRef<TextInput>(null);
  return (
    <View style={formStyles.container}>
      <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        onSubmitEditing={() => pswdInputRef.current?.focus()}
        returnKeyType="next"
        autoComplete="email"
        textContentType="emailAddress"
        autoCapitalize="none"
      />
      <Input
        ref={pswdInputRef}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        autoComplete="password"
        textContentType="password"
        returnKeyType="done"
        onSubmitEditing={Keyboard.dismiss}
      />
      <AnimatedButton label="Entrar" style={formStyles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

const heroStyles = StyleSheet.create({
  container: {
    gap: 40,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "800",
    marginBottom: 10,
  },
  subtitle: {
    color: "#99a1af",
    fontSize: 18,
  },
  logoContainer: {
    width: "100%",
    height: 200,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});

const formStyles = StyleSheet.create({
  container: {
    gap: 12,
    paddingTop: 32,
  },
  button: {
    marginTop: 16,
  },
});
