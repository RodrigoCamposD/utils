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

You may not need to install all npm packages, I prefer that because I can easly switch between the options in `.eslintrc` config file.

Optionaly you can:

```bash
npm init

npm install --save-dev eslint
npm init @eslint/config
```

and follow the instrucions like your preferences, but maybe this will not install all that you need... but you can install it after 😉

### 1.3 comma conflict (if needed)

Prettier wants to remove commas like suggested by ES5 and airbnb wants to put it back. If you DONT want to change this behaviour of Prettier globaly in vscode or even in user profile you can use this code in a `.prettierrc` file in the root of your project.

```json
{
  "trailingComma": "all"
}
```

If you want to change in vscode globaly open the settings (user or workspace) window `Ctrl+,` and search for `@ext:esbenp.prettier-vscode comma`.

### 1.4 default formatter

You can select the default formatter to ESLint configuring in `settings.json` in `.vscode` folder.

```json
"editor.defaultFormatter": "dbaeumer.vscode-eslint"
```

I dont recommend use this on your user or workspace profile because you may have projects that dont use ESLint.
See that file in this project folder the example. This maybe avoid the problem above (1.3).

## 2. optional

### 2.1 ESLint auto fix

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```

I dont recommend use this on your user or workspace profile because you may have projects that dont use ESLint. Instead enable this only in your project, for that create the `.vscode` folder in the root of your project and create inside a file `settings.json` with this code above.

## 3. I want more info

In the rules of my `.eslintrc` file you will see:

### 3.1 consistent-return

This is because ESLint want functions always return something.

### 3.2 linebreak-style

This is set because the default linebreak changes in windows / linux...
You need this only if you running VSCode in windows. See [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)

### 3.3 quotes

Set for double only if want, you dont need this line if you work with single quotes.

### 3.4 object-shorthand

ESLint dont want to the key name matches name of the assigned variable. See [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)

ESLint 😢:

```javascript
const data = [1, 2, 3];
return { data: data };
```

ESLint 😁:

```javascript
const results = [1, 2, 3];
return { data: results };
```
