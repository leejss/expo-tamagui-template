import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack } from "tamagui";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function IndexScreen() {
  const insets = useSafeAreaInsets();
  return (
    <YStack fullscreen paddingTop={insets.top}>
      <YStack flex={1}>
        <YStack p={20}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 16,
            }}
            source="https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </YStack>
      </YStack>
      <YStack bg={"blue"} h={"30%"}></YStack>
    </YStack>
  );
}
