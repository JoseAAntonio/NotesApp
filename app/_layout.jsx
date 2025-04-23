import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ff8c00",
          },
          headerTintColor: "#fff",
          headerTitle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "fff",
          },
          headerSafeAreaInsets: { top: 0 },
          statusBarStyle: "light",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="notes"
          options={{
            headerTitle: "Notes",
          }}
        />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
