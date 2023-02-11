# @higoralves Style Guide

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;
- Import order
- Storybook Plugin
- Promise plugin

## Setup

Install the dependencies

```bash
npm i --save-dev @higoralves/eslint-config
```

Create a `.eslintrc.json` file extending the config:

```json
{
  "extends": ["@higoralves/eslint-config/<react | node>"]
}
```