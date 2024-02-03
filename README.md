# Bootstrap 5 Demo

Vue3 + Vite + Scss + Bootstrap5

## Document

1. [Template](https://github.com/hexschool/vue3-course-api-wiki/wiki/%E8%AA%B2%E7%A8%8B%E9%83%A8%E5%88%86%E6%A8%A1%E6%9D%BF)
2. [API](https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89)
3. [My Product API](https://vue3-course-api.hexschool.io/)

## Packages
- [bootstrap](https://getbootstrap.com/)
- [axios](https://axios-http.com/docs/intro)
- [js-cookie](https://github.com/js-cookie/js-cookie/tree/latest#readme)

## Install Step

1. install
```bash
yarn add bootstrap @popperjs/core
yarn add -D sass
```

2. Create scss folder and file

add scss folder in src and create style.scss

```scss
// src/scss/style.scss
@import "bootstrap/scss/bootstrap";
```

3. Edit main.js
```js
// src/main.js
import * as bootstrap from 'bootstrap'
import './scss/style.scss'
```

## Set bootstrap variables

1. Create customize variables file
- src/scss/helper/_variables.scss
- src/scss/helper/_variables-dark.scss

2. Import variables
```scss
// src/scss/style.scss
@import "bootstrap/scss/functions";
@import "./helper/variables";
@import "./helper/variables-dark";
@import "bootstrap/scss/bootstrap";
```

## Add Vue-Router
1. create file
- src/router/index.js

2. Edit main.js
```js
// src/main.js
const app = createApp(App)
app.use(router)
app.mount('#app')
```

## ENV
1. Environment variables start with VITE_
2. Use ```import.meta.env``` to get environment variables

Example:
```
VITE_APP_API=https://vue3-course-api.hexschool.io
```

```js
const url = import.meta.env.VITE_APP_API;
const api = `${url}/admin/signin`;
// const api = url + '/admin/signin';
```