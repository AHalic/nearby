import { View, Text } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { style } from "./styles";
import { ComponentType } from "react";
import { colors } from "@/styles/colors";

export default function Step({ title, description, icon: Icon }: 
{ 
    title: string, 
    description: string,
    icon: ComponentType<IconProps>,
}) {
    return (
        <View style={style.container}>
            
            {/* Icon */}
            {Icon && <Icon size={32} color={colors.red.base} />}


            <View style={style.details}>
                <Text style={style.title}> 
                    {title}    
                </Text>
                <Text style={style.description}>
                    {description}
                </Text>
            </View>
        </View>
    )
}
