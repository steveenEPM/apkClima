import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/home";
import Secund from "../screen/secund";

export default function Root() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            statusBarColor: "rgba(46, 51, 90,0)",
            statusBarTranslucent: true,
            statusBarStyle: "light",
            animation:"fade_from_bottom"
        }}>
            <Stack.Screen name="homes" component={Home} />
            <Stack.Screen name="secund" component={Secund} options={{
                headerShown:true,
                headerTitle:"Clima",
                headerStyle:{backgroundColor:"black"},
                headerTintColor:"white"
            }}/>
        </Stack.Navigator>
    )

}
