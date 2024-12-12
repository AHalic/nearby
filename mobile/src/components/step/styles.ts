import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 16,
    },
    details: {
        flex: 1,
    },
    title: {
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
        color: colors.gray[600],
    },
    description: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.gray[500],
        marginTop: 14,
    }
});
