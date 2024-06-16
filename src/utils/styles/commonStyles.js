import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const typography = StyleSheet.create({
    label: {
        fontSize: 16,
        color: colors.dark,
        fontWeight: '700',
        lineHeight: 24
    },
    commonText: {
        fontSize: 12,
        color: colors.grey,
        lineHeight: 21.6,
        fontWeight: '400'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 25.2,
    },
    inputText: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 21.6,
        color: colors.grey
    }
})

export const textAttr = StyleSheet.create({
    12: {
        fontSize: 12
    },
    14: {
        fontSize: 14,
    },
    16: {
        fontSize: 16,
    },
    18: {
        fontSize: 18
    },
    20: {
        fontSize: 20,
    },
    w400: {
        fontWeight: '400'
    },
    w700: {
        fontWeight: '700'
    }
})

export const containerAttr = StyleSheet.create({
    w100: {
        width: '100%'
    },
    flex: {
        flex: 1
    },
    flex0: {
        flex: 0
    },
    w50: {
        width: '50%'
    },
    h50: {
        height: '50%'
    },
    h100: {
        height: '100%'
    },
    borderColor: {
        borderColor: colors.light
    }
})