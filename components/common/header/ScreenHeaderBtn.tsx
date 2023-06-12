import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

export interface IScreenHeaderBtnProps {
  iconUrl: any;
  dismension: string;
  handlePress?: (...args: any) => any;
}

const ScreenHeaderBtn = (props: IScreenHeaderBtnProps) => {
  const { iconUrl, dismension, handlePress } = props;
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dismension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
