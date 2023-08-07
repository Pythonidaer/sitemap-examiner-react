# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Day 2 References

(ChatGPT)[https://chat.openai.com/share/192339fd-109d-4118-bd0e-b0a512092394]
(My Old App)[https://github.com/Pythonidaer/reddie/blob/main/frontend/src/components/Header.js]
(Axios Docs)[https://axios-http.com/docs/instance]
(MDN CORS)[https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS]
(SearchBox)[https://github.com/Pythonidaer/reddie/blob/main/frontend/src/components/SearchBox.js]
(Typeahead)[http://ericgio.github.io/react-bootstrap-typeahead/]

## Day 5 Challenges

Currently struggling with CORS

1. I have identified that to avoid CORS for this challenge, I need to make the request from the server-side to avoid browser strict origin issues

2. I have manually logged title/author/price from a node file by using a package called 'cheerio'

3. I just recreated a searchbox from a previous project that has all the SKUs looped into it

4. My next goal will be to console log the corresponding URL where the SKU matches
