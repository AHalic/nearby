import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
    },
    title: {
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
        marginBottom: 12,
        fontSize: 14,
    },
    content: {
        flexDirection: "row",
        backgroundColor: colors.green.soft,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 8,
        alignItems: "center",
        gap: 10,
    },
    code: {
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        textTransform: "uppercase",
    },
})
