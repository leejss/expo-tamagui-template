import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";
import appConfig from "../tamagui.config";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <TamaguiProvider config={appConfig}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              title: "Home",
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
