import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const style = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        marginTop: 24,
        marginBottom: 28,
    },
    title: {
        fontFamily: fontFamily.bold,
        fontSize: 24,
        color: colors.gray[600],
    },
    subtitle: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        color: colors.gray[500],
        marginTop: 12,
    },

});
