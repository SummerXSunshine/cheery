/** @type { import('@storybook/vue-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // 添加别名配置
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, '../src'),
    };
    return config;
  },
};
export default config;
