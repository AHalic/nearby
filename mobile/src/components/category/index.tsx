import { Text, Pressable, PressableProps } from "react-native";
import { styles } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";

type Props = PressableProps & {
    iconId: string
    isSelected?: boolean
    name: string
}

export default function Category({ iconId, isSelected, name, ...props }: Props) {
    const Icon = categoriesIcons[iconId]

    return (
        <Pressable 
            style={[styles.container, isSelected && styles.containerSelected]}
            {...props}
        >

            <Icon color={colors.gray[isSelected ? 100 : 400]} />

            <Text
                style={[styles.name, isSelected && styles.nameSelected]}
            >
                {name}
            </Text>
        </Pressable>
    )
}
