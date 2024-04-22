# React Component Library Starter Kit

This template provides a extensive setup to create a component library of React Components.

This template comes with the following technologies configured and ready to go:
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)
- Automated CI testing, linting, formatting and coverage with GitHub Actions
- Release automation with GitHub Actions and publishing to NPM
- GitHub Pages Dashboard with API Docs, Storybooks and Test Coverage
- Automatic Documentation Generation with [TypeDoc](https://typedoc.org/)
- [Winston](https://github.com/winstonjs/winston) for logging. There is a logging utility that can be used to log to the console

## Getting Started

Begin via any of the following:

- Press the "*Use this template*" button

- Use [degit](https://github.com/Rich-Harris/degit) to execute: 

    ```
    degit github:dream-aim-deliver/dad-ui-components-starter-template
    ```
    
- Use [GitHub CLI](https://cli.github.com/) to execute: 

    ```
    gh repo create <name> --template="https://github.com/dream-aim-deliver/dad-ui-components-starter-template"
    ```
    
- Simply `git clone`, delete the existing .git folder, and then:

    ```
    git init
    git add -A
    git commit -m "Initial commit"
    ````

## Customizing the Template

Please go through the following checklist to ensure you have configured the template correctly:

- [ ] Push your code to a new GitHub repository.
- [ ] Update the test coverage thresholds in the `vite.config.ts` file.
- [ ] Remember to use `npm search <term>` to avoid naming conflicts in the NPM Registry for your new package name.
- [ ] Update the `package.json` file with your package `name`, `version`, `description`, `author` and `repository` information.
- [ ] Add or update the `LICENSE` file.
- [ ] In the GitHub repository, go to the "*Settings*" tab and select "*Pages*" section. Then select the source as "*Github Actions*".
- [ ] Generate a new [NPM Access Token](https://docs.npmjs.com/creating-and-viewing-access-tokens).
- [ ] [Create a secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) in the GitHub repository called `NPM_TOKEN` with the value of the npm access token from the previous step.
- [ ] Update the `README.md` file by replacing <MY_COMPONENT_LIBRARY> with the name of your component library. Also, please update the `href` to point to your GitHub Pages URL.
- [ ] Please read and update the [Contributing Guidelines](./CONTRIBUTING.md) before contributing to this project.
- [ ] Please go through the [Release Guidelines](./RELEASE_GUIDELINES.md) before releasing a new version of this project.
- [ ] Please make sure your developers have read the [Development Guidelines](./DEVELOPMENT_GUIDELINES.md) before starting development.
- [ ] Please remember to define the theme of your component library (colors, shades, fonts, animations, breakpoints etc..) in the `lib/tailwind/config.ts` file.
- [ ] Once you have completed the above steps, you can delete the contents of this `README.md` file from here above. Please add any additional information about your component library at the end of this README. This file is used to generate the homepage for your NPM Package on npmjs.com and is also the homepage for your TypeDoc dashboard.

## Add-On Resources
### Picking a Color Palette

When picking a color palette for your component library, consider using a tool like [Coolors](https://coolors.co/) to generate a color palette. You can then define the colors in the `lib/tailwind/config.ts` file.
The template ships with a default color palette that you can use as a starting point, but you should customize it to match your brand.
[![Picking a Color patelle](https://img.youtube.com/vi/yYwEnLYT55c/0.jpg)](https://www.youtube.com/watch?v=yYwEnLYT55c)

### Icons

You can use [Heroicons](https://heroicons.com/) to find icons for your component library. You can then use the `Icon` component in the template to render the icons in your components.
Another great resource for icons is [Lucide Icon](https://lucide.dev/icons/) and [Radix Icons](https://www.radix-ui.com/icons).


### Working with other UI Libraries/Components

We can recommend [Radix UI](https://www.radix-ui.com/), [Shadcn](https://ui.shadcn.com/) as a great resource for building accessible and composable UI components. You can use these components in your component library to build more complex components.


---
Your README.md Content goes here:

# <MY_COMPONENT_REPOSITORY>

<div style="text-align:center;">

<table style="border:1px solid #ccc; border-collapse: collapse; width:100%;">
  <tr>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/dad-ui-components-starter-template/">
        <img src="https://bischrob.github.io/images/githubpages/githubpages.jpeg" alt="Github Pages" width="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/dad-ui-components-starter-template/storybook">
        <img src="https://storybook.js.org/images/logos/icon-storybook.png" alt="Storybook" width="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/dad-ui-components-starter-template/docs">
        <img src="https://user-images.githubusercontent.com/21266147/101224549-386fb400-368f-11eb-8390-6db2ecd1fe61.png" alt="Docs" height="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/dad-ui-components-starter-template/coverage">
        <img src="https://vitest.dev/logo.svg" alt="Coverage" width="100px" height="100px" style="border-radius: 10px;">
      </a>
    </td>
  </tr>
</table>
</div>

## Usage
The component library built with this template can be used in any project that supports TailwindCSS. After publishing your component library to NPM, you can install it in your project by running:

```
npm install <my-component-library>
```

You should then configure the `tailwind.config.js` file in your project to include the styles from the component library.

First, import the tailwind config exported from the component library:

```js
import { defaultTheme } from "<my-component-library>";
```

Then, include the theme in your project's `tailwind.config.js` file:

```js
export default {
  theme: {
    ...defaultTheme,
    extend: {
    },
  },
  plugins: [],
};
```

Additionally, modify the `content` array in the Tailwind Config to include the components from the component library:

```js
export default {
  content: [
    "<my-component-library>/dist/**/*.js",
    ...other sources
  ],
  theme: {
    ...defaultTheme,
    // other theme configurations, be careful not to override the default theme or provide a merged theme object here
  },
}
```

Then, include the plugins from the component library in your project's `tailwind.config.js` file:

```js
import { defaultPlugins } from "<my-component-library>";

export default {
  plugins: [defaultPlugins.map((plugin) => require(plugin))].extend([
    // other plugins
  ]),
};
```

Additionally, modify the `content` array in the Tailwind Config to include the components from the component library:

```js
export default {
  content: [
    "<my-component-library>/dist/**/*.js",
    ...other sources
  ],
  theme: {
    ...defaultTheme,
    // other theme configurations
  },
}
```

An example of a `tailwind.config.ts` file that includes the component library is shown below:

```ts
import type { Config } from "tailwindcss"
import { defaultTheme, defaultPlugins } from "<my-component-library>"

const config = {
  darkMode: ["class"],
  content: [
    './node_modules/<my-component-library>/dist/**/*.js',
    ...your content sources
  ],
  prefix: "",
  theme: {
    extend: {
      ...defaultTheme.extend
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
  plugins: [defaultPlugins.map((plugin: string) => require(plugin))],
  // plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

The corresponding `tailwind.config.js` file is shown below:

```js
/** @type {import('tailwindcss').Config} */
import {
  defaultTheme,
  defaultContent,
  defaultPlugins,
} from "./lib/tailwind/config";
module.exports = {
  content: ['/node_modules/<my-component-library>/dist/**/*.js', ...defaultContent],
  prefix: "",

  theme: {
    ...defaultTheme,
  },
  plugins: [defaultPlugins.map((plugin) => require(plugin))],
};

```


Then you can import and use the components in your project:

```tsx
import { Button } from '<my-component-library>';
```

### Dark Mode
You might have to add the following to your `tailwind.config.js` file to enable dark mode:

```js
module.exports = {
  darkMode: 'class',
  // other configurations
}
```

Then you can use the dark mode classes in your project:

```html
<div class="bg-white dark:bg-black">
  <!-- content -->
</div>
```

Please check the `lib/tailwind/config.ts` file and the `tailwind.config.js` file in this ui kit to see if you need  to include any other configurations in your project.


## Development
### Local Development
To start the development server, run:

```
npm run dev
```

This will start the `Storybook` server at `http://localhost:6006`.

### Development against a project


#### Setup
To develop against a project, you can link the component library to the project. First, build the component library:

```
npm run build
```

Then, link the component library to the project:

```
cd dist
npm link
```

In the project, link the component library:

```
npm link my-component-library
```

Then, start the development server in the component library:

```
npm run build:watch
```

After that configure TailwindCSS as desribed in the [Usage](#usage) section.


#### Cleanup
To unlink the component library from the project, run:

```
npm unlink my-component-library
```

Then, unlink the component library:

```
cd dist
npm unlink
```

In case you forgot to unlink the component library, 

```
npm rm --global "my-component-library"
```

Verify the global package is removed:

```
npm list -g --depth=0
```

Then, in the project, do a clean install:

```
npm ci 
```