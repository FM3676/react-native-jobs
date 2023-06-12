import React from "react";
import { View, Text } from "react-native";

import styles from "./screenheader.style";

export interface IScreenHeaderBtnProps {
  iconUrl: any;
  dismension: string;
}

const ScreenHeaderBtn = (props: IScreenHeaderBtnProps) => {
  return (
    <View>
      <Text>ScreenHeaderBtn</Text>
    </View>
  );
};

export default ScreenHeaderBtn;
