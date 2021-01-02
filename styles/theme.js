import React from "react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fonts: {
          body: "'Inter', sans-serif",
          heading: "'Inter', sans-serif",
          mono: "'Inter', monospace",
        },
      },
    },
  },
});

export default theme;
