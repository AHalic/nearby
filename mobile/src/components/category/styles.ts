import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 36,
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
        gap: 10,
    },
    name: {
        fontSize: 14,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    },

    containerSelected: {
        backgroundColor: colors.green.base,
        borderWidth: 0,
    },
    nameSelected: {
        color: colors.gray[100],
    },
})
