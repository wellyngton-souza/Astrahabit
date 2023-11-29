import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Timer from "../pages/Timer";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return(
        <Stack.Navigator >
            <Stack.Screen name="Timer" options={{ headerShown: false }} component={Timer} />
        </Stack.Navigator>
    )
}

export default Routes;