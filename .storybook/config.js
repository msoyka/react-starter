import { configure, addParameters } from "@storybook/react";
import unfiTheme from "@myunfi-react/myunfi-storybook";

const req = require.context("../src", true, /.stories.tsx$/);

addParameters({
  options: {
    theme: unfiTheme
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
