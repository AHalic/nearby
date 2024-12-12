import { ActivityIndicator, View } from "react-native"

import { style } from "./styles"
import { colors } from "@/styles/colors"

export default function Loading() {
    return (
        <View style={style.container}>
            <ActivityIndicator size="large" color={colors.green.base} />
        </View>
    )
}
