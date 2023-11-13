import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="change"
        options={{
          title: "Profile Change",
        }}
      />
    </Stack>
  );
}
