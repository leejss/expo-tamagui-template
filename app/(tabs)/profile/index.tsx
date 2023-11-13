import { Link } from "expo-router";
import { Text } from "react-native";
import { YStack } from "tamagui";

export default function Index() {
  return (
    <YStack fullscreen>
      <Link href="(tabs)/profile/change">
        <Text>Go to ProfileChange</Text>
      </Link>
    </YStack>
  );
}
