import { Box, BoxProps } from "@lmiguelm-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
