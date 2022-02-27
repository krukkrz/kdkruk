# kdkruk.pl

This is a website for KD KRUK, a hotel placed in Łódź, Poland.

## Development

In order to start up a webserver locally, run:
```shell
npm install
npm start
```

## Landing page

In order to edit a landing page you should work on the following files:

- `static/admin/config.yml` where you can modify fields that are modifiable in CMS
- `src/templates/index-page.js` where is a react component with a template for landing page
- `src/pages/index.md` where you set up the default value of modifiable fields