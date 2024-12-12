import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const style = StyleSheet.create({
    container: {
        gap: 24,
        flex: 1,
    },
    title: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        color: colors.gray[500],
    },

});
