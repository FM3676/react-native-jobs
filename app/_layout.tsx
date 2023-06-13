import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";

import { useCallback } from "react";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.

    return <SplashScreen />;
  }
  // Render the children routes now that all the assets are loaded.

  return <Slot />;
};

export default Layout;
