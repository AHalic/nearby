import { ActivityIndicator, View } from "react-native"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.green.base} />
        </View>
    )
}
