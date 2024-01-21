# Bootstrap 5 Demo

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