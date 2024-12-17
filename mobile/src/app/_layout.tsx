// App routes
import { Stack } from "expo-router"
import { GestureHandlerRootView  } from "react-native-gesture-handler";

import { colors } from "@/styles/colors"

import { useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
} from "@expo-google-fonts/rubik"

import Loading from "@/components/loading"

export default function Layout() {

    // Load fonts async
    const [ fontsLoaded ] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
    })

    if (!fontsLoaded) return <Loading />

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack 
                screenOptions={{ 
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.gray[100] },
                }}
            />
        </GestureHandlerRootView>
    )
}
