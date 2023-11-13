import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack } from "tamagui";

export default function IndexScreen() {
  const insets = useSafeAreaInsets();
  return (
    <YStack fullscreen paddingTop={insets.top}>
      <Text>Hello</Text>
    </YStack>
  );
}
