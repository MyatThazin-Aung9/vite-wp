# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

- [Vite](https://vitejs.dev/guide/)

## Create/install Vite project
### Create/install theme in wp-contents theme folder

[Step up theme](https://vitejs.dev/guide/) 

**Step 1 :** Create project name, choose vue and javascript

```
npm create vite@latest
```
```
cd project name
```
```
npm install
```
```
npm run dev
```

#### check terminal output local app_url(eg.Local: http://127.0.0.1:5173/)
Terminate the process and create index.php,functions.php, header.php, footer.php and style.css file in project folder. Added require code to related file.
run
```
npm run build
```
Auto create **dist** folder when run npm run build. Copy **js file name** from **asset** floder of dist and replace main.js of url in index.php. After that active the theme form appearence's theme of wp-admin.

#### install require package
```
npm install vite-plugin-browser-sync
```
Add require code into related vite.config.js file. comment/remove unnecessary code like call back for sass no need for now(necessary for later when installing/compiling sass).