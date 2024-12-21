import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
    },
    content: {
        gap: 12,
        paddingBottom: 100,
        paddingVertical: 24,
        paddingHorizontal: 8,
    },
    indicator: {
        width: 80,
        height: 4,
        backgroundColor: colors.gray[300],
    },
    title: {
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: fontFamily.regular,
        marginBottom: 16,
    }
})