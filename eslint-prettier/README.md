# eslint + prettier

Easy cheat sheet for config Prettier and ESLint in VSCode (maybe).
This is for Javascript (Node.js) but you can use this tutorial to apply for many other cases.

## Instalation

### VSCode extensions

Install Prettier and ESlint VSCode extensions.

### npm packages

```bash
npm init

npm install --save-dev eslint prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-node eslint-config-airbnb eslint-config-airbnb-base eslint-config-prettier
```

This will create the `.eslintrc` file in your project, you can use my file for an example.

You may not need to install all npm packages, I prefer that because I can easly switch between the options in `.eslintrc` config file.

\*Optionaly you can:

```bash
npm init

npm install --save-dev eslint
npm npm init @eslint/config
```

and follow the instrucions like your preferences, but maybe this will not install all that you need... but you can install it after 😉

### comma conflict (if needed)

Prettier wants to remove commas like suggested by ES5 and airbnb wants to put it back. If you DONT want to change this behaviour of Prettier globaly in vscode or even in user profile you can use this code in a `.prettierrc` file in the root of your project.

```json
{
  "trailingComma": "all"
}
```

If you want to change in vscode open the settings window `Ctrl+,` and search for `@ext:esbenp.prettier-vscode comma`.

## optional

### ESLint auto fix

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
```

I dont recommend use this on your user or workspace profile because you may have projects that dont use ESLint. Instead enable this only in your project, for that create the `.vscode` folder in the root of your project and create inside a file `settings.json` with this code above.

## I want more info

In the rules of my `.eslintrc` file you will see:

```json
{
  "consistent-return": "off",
  "linebreak-style": ["error", "windows"],
  "quotes": ["error", "double"]
  // "object-shorthand": "off"
  // "no-console":"off"
}
```

### consistent-return

This is because ESLint want functions always return something.

### linebreak-style

This is set because the default linebreak changes in windows / linux...
You need this only if you running VSCode in windows. See [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)

### quotes

Set for double only if want, you dont need this line if you work with single quotes.

### object-shorthand

ESLint dont want to the key name matches name of the assigned variable. See [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)

ESLint error:

```javascript
const data = [1, 2, 3];
return { data: data };
```

ESLint happy:

```javascript
const results = [1, 2, 3];
return { data: results };
```
