import { createStitches, defaultThemeMap } from "@stitches/react";

import * as UITheme from "@lmiguelm-ui/tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: UITheme,
});
