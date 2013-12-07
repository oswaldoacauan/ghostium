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

Now, go to the [Prism.js download page](http://prismjs.com/download.html) and configure Prism to your liking.
Then, download both the `css` and `js` generated at the bottom of the page.
Place these files in `ghostium/src/assets/_components/prismjs/`, replacing the ones downloaded by bower.

Next it's time to edit `src/default.hbs` like so:

```
    <!-- build:js /assets/js/head-scripts.min.js -->
    <scirpt src="/assets/_components/prismjs/prism.js"></script>
    <script src="/assets/_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->
```

Now, within the ghostium root directory run `grunt`. This will compile minified `css` and `js` within the build directory.

All that is left to do now is to copy the build directory to the ghostium root directory. This can be done by running:

```
cd build
cp -r * ..
```

This replaces all the files built formerly without the support for other languages, and that's it!

Note: If doing this within the already installed ghostium theme, you must restart Ghost for the changes to take effect.
