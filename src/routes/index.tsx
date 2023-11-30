import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import Timer from "../pages/Timer";
import Calendary from "../pages/Calendary";

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Timer: undefined;
    Calendary: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const Routes = () => {
  return(
        <Stack.Navigator
            initialRouteName="Calendary"
            screenOptions={{
                animation: 'fade',
                navigationBarColor: 'white'
            }}
            >
            <Stack.Screen name="Timer" options={{ headerShown: false }} component={Timer} />
            <Stack.Screen name="Calendary" options={{ headerShown: false }} component={Calendary} />
        </Stack.Navigator>
    )
}

export default Routes;