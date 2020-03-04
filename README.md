# lazydemo
This is a simple demo showing how to:
1. Lazy Load Components in Vue 2
2. Lazy Load Routes in Vue 2

**Bonus:** vue.config.js shows how to split out vendor's chunk

## Lazy Load Components
In the /views/home.vue component, Bella is shown by default so we can lazy load the Daisy component since it's not visible on the initial page load.

What to Lazy Load? Anything that isn't visible on initial page load. (using v-if)
- Tabs (other than the default)
- Side Panel
- Modals


## Lazy Load Routes
In the /router/index.js, the About page is already lazy loaded.

Typcially, there's not much value in lazy loading the home page, since it is the entry point of the application. If you have multiple entry points, then you may want to lazy load those.

To Lazy Load the Bella and Daisy routes, just change the import to a dynamic import. Change this:
```
import Bella from '@/components/bella'
```
to this:
```
const Bella = () => import('@/components/bella')
```

### Specifying Webpack Chunk Name
1. Babel.config.js must have comments to true for this to work.
2. Add the webpack magic comment to the dynamic import

```
const Bella = () => import(/*webpackChunkName: "dogs" */ '@/components/bella')
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

