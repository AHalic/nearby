import { IconProps } from "@tabler/icons-react-native";
import { ComponentType } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";


export default function Info({ description, icon: Icon }: {
    description: string,
    icon: ComponentType<IconProps>,
}) {
    return (
        <View style={styles.container}>
            <Icon size={16} color={colors.gray[400]} />

            <Text style={styles.text}>
                {description}
            </Text>
        </View>
    )
}
