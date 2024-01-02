//import {Roboto_400Regular, Roboto_900Black, Roboto_700Bold} from "@expo-google-fonts/roboto";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    // largeTitle: {fontFamily: Roboto_400Regular, fontSize: SIZES.largeTitle, lineHeight: 55 },
    // h1: { fontFamily: Roboto_900Black, fontSize: SIZES.h1, lineHeight: 36 },
    // h2: { fontFamily: Roboto_700Bold, fontSize: SIZES.h2, lineHeight: 30 },
    // h3: { fontFamily: Roboto_700Bold, fontSize: SIZES.h3, lineHeight: 22 },
    // h4: { fontFamily: Roboto_700Bold, fontSize: SIZES.h4, lineHeight: 22 },
    // body1: { fontFamily: Roboto_400Regular, fontSize: SIZES.body1, lineHeight: 36 },
    // body2: { fontFamily: Roboto_400Regular, fontSize: SIZES.body2, lineHeight: 30 },
    // body3: { fontFamily: Roboto_400Regular, fontSize: SIZES.body3, lineHeight: 22 },
    // body4: { fontFamily: Roboto_400Regular, fontSize: SIZES.body4, lineHeight: 22 },
    // body5: { fontFamily: Roboto_400Regular, fontSize: SIZES.body5, lineHeight: 22 },
    largeTitle: {fontWeight: 'normal', color: 'black', fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontWeight: 'normal', color:'black', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontWeight: 'bold', color: 'black', fontSize: SIZES.h2, lineHeight: 30 },
    h3: {fontWeight: 'bold', color: 'black', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontWeight: 'bold', color: 'black', fontSize: SIZES.h4, lineHeight: 22 },
    //h2: { fontWeight: 200, color: 'lightGray2', fontSize: SIZES.h2, lineHeight: 30 },
    body1: { fontWeight: 'normal', color: 'black', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontWeight: 'normal', color: 'black', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontWeight: 'normal', color: 'black', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontWeight: 'normal', color: 'black', fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontWeight: 'normal', color: 'black', fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;