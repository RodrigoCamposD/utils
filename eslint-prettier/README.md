# eslint + prettier

Easy cheat sheet for config Prettier and ESLint in VSCode (maybe).
This is for Javascript (Node.js) but you can use this tutorial to apply for many other cases.

## 1. Instalation

### 1.1 VSCode extensions

Install Prettier and ESlint VSCode extensions.

### 1.2 npm packages

```bash
npm init
npm install --save-dev eslint prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-node eslint-config-airbnb eslint-config-airbnb-base eslint-config-prettier
```

This will create the `.eslintrc` file in your project, you can use my file for an example.

You may not need to install all npm packages, I prefer that because I can easly switch between in `.eslintrc` config file.

Optionaly you can:

```bash
npm init
npm install --save-dev eslint
npm init @eslint/config
```

And follow the instrucions like your preferences, but maybe this will not install all that you need... but you can install it after 😉

### 1.3 comma conflict (if needed)

Prettier wants to remove commas like suggested by ES5 and airbnb wants to put it back. For this you can use this code below in a `.prettierrc` file in the root of your project. Example in this project!

```json
{
  "trailingComma": "all"
}
```

If you want to change in vscode globaly open the settings (user or workspace) window `Ctrl+,` and search for `@ext:esbenp.prettier-vscode comma`.

### 1.4 default formatter

You can set the default formatter to ESLint configuring in `settings.json` file in `.vscode` folder in the root of your project.

```json
"editor.defaultFormatter": "dbaeumer.vscode-eslint"
```

I dont recommend use this on your user or workspace profile because you may have projects that dont use ESLint.
This maybe avoid the problem above (1.3). Example in this project!

## 2. optional

### 2.1 ESLint auto fix

You can set the ESLint auto fix in `settings.json` file in `.vscode` folder in the root of your project.

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```

I dont recommend use this on your user or workspace profile because you may have projects that dont use ESLint. Example in this project!
