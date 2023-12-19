import { Text, TextProps } from "@lmiguelm-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta fuga optio, facere sequi expedita, aliquid explicabo beatae autem a quos natus ad qui sunt libero esse porro! Repudiandae, porro",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const Customtag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
