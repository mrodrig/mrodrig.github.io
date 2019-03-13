# Personal Website (mrodrig.github.io)

## Background
After recently looking at upgrading one of my development team's old AngularJS
application's dependencies, I began to look at my own AngularJS personal 
website. At that point, I realized that my previous AngularJS site was using 
libraries that ranged from three to four years years old and were no longer 
supported. Instead of upgrading to newer, yet still unsupported versions of 
those libraries, I identified this as an opportunity to further my VueJS
development skills and as a great time to examine new technologies that could
simplify the development process. There were several new technologies that I was
able to get hands-on experience with through this side-project, including the
new [Vue CLI Service](https://cli.vuejs.org/).

## Technologies
* [VueJS](https://vuejs.org/)
* [Vue-Router](https://router.vuejs.org/) which allows for a "single-page" webapp.
* [Vue CLI Service](https://cli.vuejs.org/)
* [PDFVuer](https://www.npmjs.com/package/pdfvuer) using [Mozilla's PDF.js](https://mozilla.github.io/pdf.js/)
* [Vue-Instagram](https://www.npmjs.com/package/vue-instagram)
* [Vue-Material-Design-Icons](https://www.npmjs.com/package/vue-material-design-icons) for a wide variety of performant SVG icons.
* [Vue-Analytics](https://www.npmjs.com/package/vue-analytics) for seamless Google Analytics integration
* [Rollbar](https://rollbar.com) for client-side error logging
* [ESLint](https://eslint.org/) with a Vue plug-in for a clean, consistent code style
* [Less](http://lesscss.org/)

## Project Workflow
### Install dependencies
```
npm install
```

### Local development - compiles and hot-reloads changes
```
npm run serve
```

### Production build - compiles and minifies code
```
npm run build
```

Build files are placed into the `dist/` directory.

### Production deploy - compiles and deploys to `master` branch
```
npm run deploy
```

Note: This compiles the site's files using `npm run build` first.

Unfortunately, GitHub Pages requires the primary site to be served
out of the `master` branch, which means that a branch other than master
must be used as the primary branch so that `master` can serve as the branch
which built files are deployed to.

### Lints and fixes files
```
npm run lint
```

### Customize Vue CLI Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
