import { Home, UserCircle } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserCircle color={color} />,
        }}
      />
    </Tabs>
  );
}
