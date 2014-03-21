# Ghostium [![Build Status](https://travis-ci.org/oswaldoacauan/ghostium.png)](https://travis-ci.org/oswaldoacauan/ghostium) [![Total views](https://sourcegraph.com/api/repos/github.com/oswaldoacauan/ghostium/counters/views.png)](https://sourcegraph.com/github.com/oswaldoacauan/ghostium)

![Ghostium](http://i.imgur.com/m5VcTBl.png)

> A [Ghost](https://ghost.org/) theme focused on content based on [Medium](https://medium.com) design/ux.

### [→ Live Demo](http://ghostium.oswaldoacauan.com/)
### [→ Download](https://github.com/oswaldoacauan/ghostium/archive/master.zip)

## Table of contents

* [Features](#features)
* [Installing](#installing)
* [Configuring](#configuring)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [History](#history)
* [License](#license)

## Features

* Focused on content
* Fully responsive
* HTML5 semantics, WAI-ARIA and Rich Snippets(microdata) roles
* Asynchronous content loading
* Disqus comments
* Syntax Highlight with [Prism](http://prismjs.com/)
* Google Universal Analytics snippet
* OpenGraph and Twitter Cards meta's
* Baseline HTML5 features, DNS prefetching, responsive meta
* One-file CSS/JS for performance

## Installing

### Using Git
1. Navigate to your Ghost theme directory `ghost/content/themes`
2. Clone the theme repository using the command below
```sh
$ git clone https://github.com/oswaldoacauan/ghostium/ "ghostium"
```
3. Restart ghost and log in to your dashboard
4. In settings under themes select **ghostium** and save
5. That's all, now its time to [configure](#configuring) your theme


### Manually
1. Download the files using the [GitHub .zip download](https://github.com/oswaldoacauan/ghostium/archive/master.zip) option
2. Unzip the files and rename the folder to `ghostium`
4. Copy the folder into your Ghost theme directory `ghost/content/themes`
5. Restart ghost and log in to your dashboard
6. In settings under themes select **ghostium** and save
7. That's all, now its time to [configure](#configuring) your theme

## Configuring

All configurable files are located in `ghostium/partials/custom`.

#### config.hbs

Configurable javascript identifiers.

* `ga_ua`: Your [Google Analitycs](https://support.google.com/analytics/answer/1032385) account identifier
* `disqus_shortname`: Your [Disqus](http://help.disqus.com/customer/portal/articles/466208) unique identifier

#### meta.hbs

Configurable meta tags.

* `twitter:site`: Used for [Twitter Card](https://dev.twitter.com/docs/cards/markup-reference) identification, the twitter @username of the owner of this card's domain
* `twitter:creator`: Used for [Twitter Card](https://dev.twitter.com/docs/cards/markup-reference) identification, the twitter @username of the author of this content
* `google-site-verification`: Used for [Google Webmaster Tools](https://support.google.com/webmasters/answer/35179) identification
* `fb:admins`: Used for [Facebook Insights](https://developers.facebook.com/docs/insights/‎) identification

#### navigation.hbs

Your site navigation items, markup template below.
```html
<li class="drawer-list-item">
  <a href="#" title="My awesome menu">
    My menu
  </a>
</li>
```

## Roadmap

Many features listed here still depend on future implementations in Ghost, take a look at the their [Roadmap](https://github.com/tryghost/ghost/wiki/Roadmap) and [Planned features](https://github.com/tryghost/ghost/wiki/Planned-Features).

- [ ] Cover image for single post
- [ ] Infinite scroll
- [ ] Next post cover

## Contributing

If you want to help, please read the [Contributing](https://github.com/oswaldoacauan/ghostium/blob/master/CONTRIBUTING.md) guide.

## History

For detailed history, see [Changelog](https://github.com/oswaldoacauan/ghostium/blob/master/CHANGELOG.md).

## License

[MIT License](http://oswaldoacauan.mit-license.org/) © Oswaldo Acauan
