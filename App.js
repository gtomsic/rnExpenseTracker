import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ManageExpense from "./screens/ManageExpense";
import RecentExpense from "./screens/RecentExpense";
import AllExpenses from "./screens/AllExpenses";
import { colors } from "./contants/styles";
import IconButton from "./UI/IconButton";
import ExpenseContextProvider from "./store";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: colors.primary500 },
        tabBarActiveTintColor: "white",
        headerRight: ({ color, tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpense")}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.primary500,
                headerTintColor: "white",
              },
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
                headerTintColor: "white",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}
