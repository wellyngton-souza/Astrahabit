import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import Timer from "../pages/Timer";
import Calendary from "../pages/Calendary";
import Login from "../pages/Login";
import Config from "../pages/Config";
import Statistics from "../pages/Statistics";

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Timer: undefined;
    Calendary: undefined;
    Login: undefined;
    Config: undefined;
    Statistics: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const Routes = () => {
  return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                animation: 'fade',
                navigationBarColor: 'white'
            }}
            >
            <Stack.Screen name="Timer" options={{ headerShown: false }} component={Timer} />
            <Stack.Screen name="Calendary" options={{ headerShown: false }} component={Calendary} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <Stack.Screen name="Config" options={{ headerShown: false }} component={Config} />
            <Stack.Screen name="Statistics" options={{ headerShown: false }} component={Statistics} />
        </Stack.Navigator>
    )
}

export default Routes;