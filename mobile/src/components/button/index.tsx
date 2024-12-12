import { 
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    TextProps,
    ActivityIndicator
} from "react-native";

import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { ComponentType } from "react";

type ButtonProps = TouchableOpacityProps & {
    loading?: boolean;
}

type IconProps = TablerIconProps & {
    icon: ComponentType<TablerIconProps>;
}

function Button({ children, style, loading, ...props }: ButtonProps) {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={[styles.button, style]}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator size="small" color={colors.gray[100]} />
            ) : (
                children
            )}
        </TouchableOpacity>
    )
}

function Title({ children }: TextProps) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    )
}


function Icon({ icon: Icon }: IconProps) {
    return (
        <Icon size={24} color={colors.gray[100]} />
    )
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
