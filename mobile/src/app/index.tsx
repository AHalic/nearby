import { View } from "react-native";

import { router } from "expo-router";

import { Button } from "@/components/button";
import Steps from "@/components/steps";
import Welcome from "@/components/welcome";


export default function App() {
    return (
        <View style={{
            flex: 1,
            padding: 40,
            gap: 40,
        }}>
            <Welcome />

            <Steps />

            <Button onPress={() => router.navigate("/home")}>
                <Button.Title>Start</Button.Title>
            </Button>
        </View>
    )
}
