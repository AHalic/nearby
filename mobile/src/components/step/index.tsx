import { View, Text } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { styles } from "./styles";
import { ComponentType } from "react";
import { colors } from "@/styles/colors";

export default function Step({ title, description, icon: Icon }: 
{ 
    title: string, 
    description: string,
    icon: ComponentType<IconProps>,
}) {
    return (
        <View style={styles.container}>
            
            {/* Icon */}
            {Icon && <Icon size={32} color={colors.red.base} />}


            <View style={styles.details}>
                <Text style={styles.title}> 
                    {title}    
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
        </View>
    )
}
