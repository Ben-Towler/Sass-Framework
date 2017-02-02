# The counterfeiter

This toy problem is designed to train your HTML and CSS skills! Choose a website of your choice, and make a copy of their home page, as accurate as you can.

You need to make your own layout, and obviously can’t copy entire HTML or CSS assets from the original website, but you can use Chrome developer tools to inspect the page.

You know you’re doing well when people have a hard time figuring out which one is the original!

## Getting started

To install the required dependencies run `npm install`.

Use the `/public` folder to save all your public assets:

- `index.html` - Includes your HTML structure, and the imports for any other required resources (e.g. scripts and CSS).
- `style.css` - This is where your CSS rules go.
- `/images` - Is the folder for any image files.

Once you’re all set, run the `gulp` command from the project folder: this will open the browser on `index.html`, and automagically reload the page any time you modify HTML, CSS, JS, or image files (if you want to disable automatic syncing, you can do it from the control panel at `http://localhost:3001/sync-options`).

Consider you might receive this exercise more than once throughout the program, so before starting to code create a separate [Git branch](https://www.atlassian.com/git/tutorials/using-branches) for your current website.

Feel free to use a CSS framework and save it as a dependency through [Bower](https://bower.io/), or import it through a CDN.

Make sure to make small, incremental, and descriptive commits along the way. Before committing check your syntax through `gulp lint`.

## Extra credits

Use a CSS pre-processor and take advantage of the useful features it offers, like variables, modularity, auto-prefixing, etc.

For example, try integrating [PostCSS](http://postcss.org/) and [cssnext](http://cssnext.io/) with the [Gulp](http://gulpjs.com/) `watch` task, so that Gulp automatically recompiles your CSS each time it’s modified.

For this you’ll need [gulp-postcss](https://github.com/postcss/gulp-postcss) (on top of which you can add the [postcss-import](https://github.com/postcss/postcss-import) plugin to make your CSS modular).

Finally remember to ignore the compiled processed CSS through `.gitignore`, since it doesn’t need to be part of your repo.
