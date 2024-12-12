import { Image, Text, View } from "react-native";

import { style } from "./styles";

export default function Welcome() {
    return (
        <View>
            <Image
                source={require("@/assets/logo.png")}
                style={style.logo}
            />

            <Text style={style.title}>Welcome to Nearby!</Text>

            <Text style={style.subtitle}>
                Get advantage coupons to use in your favorite establishments.
            </Text>
        </View>
    )
}
