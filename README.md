# Events4u App

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Development Requirements

* [Node.js](https://nodejs.org/en/) v14 (LTS version): This has to be installed locally on development computer.
* [Visual Studio Code](https://code.visualstudio.com/)
*    install in Visual: Git Extension Pack 
* Modern WebBrowser: Chrome, Firefox, Edge, ...
* Account for [Airtable](https://www.airtable.com)
* [GitHub](https://github.com) Account

To get the project copie in GitHup (Code) the "HTTPS" link. 
Then go to the "Clone Repository" and put the link inside the upcomming URL bar.
After that you save the Projekt in a new folder.

## Project setup

Please ask the  team for the .env file. Without it no connection to Airtable can be established.

All following commands are executed in project root directory.

To install all required library dependencies:

```sh
npm install
```

**Note:** This has to be done only once or to update (added) dependencies. It will create a sub directory `node_modules` with a lot files.

### Compiles and hot-reloads for development

```sh
npm run serve
```

The App is available after starting at: [http://localhost:8080](http://localhost:8080)

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```

---

## Customize configuration

See file [`.env`](.env). To modify it, create a local copy `.env.local`

### Variables

* **VUE_APP_AIRTABLE_BASE:** The coded name of the base.
* **VUE_APP_AIRTABLE_API_KEY:** Generated API-Key to access the base.

---

See also [Configuration Reference](https://cli.vuejs.org/config/) of vue.js.

---

## License

[MITLICENSE](LICENSE)
