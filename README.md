# frontend-boilerplates
Boilerplates for building custom security dashboards
##### Build with React + TypeScript + Vite + Tailwind

Build your own custom security dashboard to view your protocols most vital metrics such as Circuit Breakers.

#### Example UI
![](/screenshots/screenshot1.png)
![](/screenshots/screenshot2.png)
![](/screenshots/screenshot3.png)
*this is a demonstrative example of how your fronted could look like using this boilerplate repo.

#### Installation & Setup
run the following commands in your terminal.
1. navigate to the boilerplate folder
```
cd dashboard
cd boilerplate
```

2. install all dependencies
```
yarn
```
3. Initialize the frontend
```
yarn run dev
```
*you can also use ```npm``` or ```pnpm``` instead.  

##### other dependencies include:
- Animate.css
- react-dom
- react-router-dom
- recharts

##### expanding the ESLint configuration

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list