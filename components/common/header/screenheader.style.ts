import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

type CombinedStyle = ViewStyle & TextStyle & ImageStyle;

const btnImg = (dimension: string): CombinedStyle => ({
  width: dimension,
  height: dimension,
  borderRadius: SIZES.small / 1.25,
});

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default { ...styles, btnImg };
