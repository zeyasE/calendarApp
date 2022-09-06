import { useContext } from "react";
import { MyProvider } from "../provider";
import { NameMonth } from "../constants/Calendar";
import Header from "../components/Header";
import Calendar from "../views/Calendar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default RoutesApp = () => {

    const { isDate } = useContext(MyProvider)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{ headerTitle: () => 
                    <Header style={style.navbar} title={NameMonth[`${isDate.month}`] + " " + isDate.year} />
                     }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const style = StyleSheet.create({
    navbar: {
        alignSelf: "stretch"
    }
})