import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import Productpage from "../screens/project1/Productpage";

const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTab">
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name="Productpage" component={Productpage}  />


            {/* <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title: "Pokemon World" }} />
            <Stack.Screen name="Travel" component={Travel} options={{ title: "Travel" }} />
            <Stack.Screen name="Resort" component={Resort} options={{ title: "Resort" }} />
            <Stack.Screen name="Health" component={Health} options={{ title: "Health" }} /> */}
        </Stack.Navigator>
    );
}
