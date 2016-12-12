# Adding More Languages to Prism.js

### Solve Dependencies

First you must make sure to have `ruby` and `nodejs` installed.
To solve dependencies needed to compile the minified `css` and `js` you must run these commands (within the ghostium directory):

```
sudo gem install bundler
bundle install

sudo npm install -g bower
bower install
sudo npm install
```

These commands should solve all dependencies needed.

### Edit src/default.hbs

Next it's time to edit `src/default.hbs` like so:

```
    <!-- build:js /assets/js/head-scripts.min.js -->
    <scirpt src="/assets/_components/prismjs/prism.js"></script>
    <script src="/assets/_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->
```

### Build and Copy

Within the ghostium root directory run `grunt dryrun`. This will compile new minified `css` and `js`.

This also replaces all the files built formerly without the support for other languages, and that's it!

Note: If doing this within the already installed ghostium theme, you must restart Ghost for the changes to take effect.
