<a name="v2.2.1"></a>
### v2.2.1 (2014-05-27)


#### Bug Fixes

* **js:** Enable Pjax when config is missing  (backward compatibility) ([c0379189](http://github.com/oswaldoacauan/ghostium/commit/c03791891b024212506d3b19ef66d1b31e4f9402))

<a name="v2.2.0"></a>
## v2.2.0 (2014-05-27)


#### Bug Fixes

* **css:** Remove nprogress sass file ([c2574de7](http://github.com/oswaldoacauan/ghostium/commit/c2574de73c9a37cbcb34e66b57a74c1cdee2ba14))
* **js:** Changed disqus comment counter load method. ([48a5df7a](http://github.com/oswaldoacauan/ghostium/commit/48a5df7a3ec24ad91e60cfb9e81ced78e785a5b5), closes [#35](http://github.com/oswaldoacauan/ghostium/issues/35))
* **templates:**
  * Add missing data-pjax on tag anchors ([52bdb5cb](http://github.com/oswaldoacauan/ghostium/commit/52bdb5cbcfdbee82de93d3c42dc231e422c2f756))
  * Add tag link on post template. ([2ff121c3](http://github.com/oswaldoacauan/ghostium/commit/2ff121c3f536d8f5b7fab2a9672cccd2ac12dc94), closes [#92](http://github.com/oswaldoacauan/ghostium/issues/92))


#### Features

* Capitalize project name ([51eecc17](http://github.com/oswaldoacauan/ghostium/commit/51eecc17d3d6f1acf037db1bf1c34626b7d6abbe))
* **js:**
  * Add config to disable asynchronous content loading ([f7945053](http://github.com/oswaldoacauan/ghostium/commit/f7945053db884774f6644d2dcbc0a4f81a0d3d16))
  * Replace NProgress with Pace. ([f0a4adf4](http://github.com/oswaldoacauan/ghostium/commit/f0a4adf4463677c73826feded2167e43c789b055), closes [#42](http://github.com/oswaldoacauan/ghostium/issues/42))
  * Only load GA/Disqus when they are setted. Close #45 ([0872d9d5](http://github.com/oswaldoacauan/ghostium/commit/0872d9d55ffc1ccb9fb3aa0f5e1f6fb90f68a0b2))
  * Add all PrismJS language support and autolink plugin. ([248bd2a4](http://github.com/oswaldoacauan/ghostium/commit/248bd2a4e86d22021cf53905bec34cc19bb5510c), closes [#94](http://github.com/oswaldoacauan/ghostium/issues/94))
* **styles:** Add a background color on cover ([1b7936a1](http://github.com/oswaldoacauan/ghostium/commit/1b7936a1e2f98821346a2fede74ad7f3d0f585b1))
* **templates:**
  * Add a tip with FontAwesome cheatsheet link ([859f74cc](http://github.com/oswaldoacauan/ghostium/commit/859f74cc3a08e261df8025a3d248422842e14ba6))
  * Add new tag template ([e297b2cd](http://github.com/oswaldoacauan/ghostium/commit/e297b2cdad7690fc52a325c8502ffcc39a7219a6))

<a name="v2.1.1"></a>
### v2.1.1 (2014-03-08)

<a name="v2.1.0"></a>
## v2.1.0 (2014-03-07)


#### Bug Fixes

* **template:** Start using {{asset}} Ghost helper. Close #61 ([d26b7063](http://github.com/oswaldoacauan/ghostium/commit/d26b706391f8866e38b8a47efb39cd9767c20942))

<a name="v2.0.2"></a>
### v2.0.2 (2014-02-03)


#### Bug Fixes

* **scripts:** Add correct focus on page load. Close #58 ([58ae72b3](http://github.com/oswaldoacauan/ghostium/commit/58ae72b3b29ff1b32f38fd6728b7c8d65044ed8f))

<a name="v2.0.1"></a>
### v2.0.1 (2014-01-27)


#### Bug Fixes

* **templates:** Fix express-hbs 404 issue introduced with Ghost 0.4. See #47 ([ce92314c](http://github.com/oswaldoacauan/ghostium/commit/ce92314c0a5576f3c84134db27ba009cc066580a))

<a name="v2.0.0"></a>
## v2.0.0 (2014-01-27)


#### Bug Fixes

* Add bundler install as npm install postinstall cmd ([e7e3c2d9](http://github.com/oswaldoacauan/ghostium/commit/e7e3c2d9875b7f98a7505c2d0e2fbc13dd9c945e))
* **bower:** Fix Prism issue dependencie. Rel #27, #33 ([f6aba3ef](http://github.com/oswaldoacauan/ghostium/commit/f6aba3efa4de5cf1a20213edfe997a5f8b45d398))

<a name="v1.2.1"></a>
### v1.2.1 (2013-12-08)


#### Features

* **styles:** Add text-align utility classes ([4a3a3a61](http://github.com/oswaldoacauan/ghostium/commit/4a3a3a611c003fbba701aec8c987b053c3d378c4))

<a name="v1.2.0"></a>
## v1.2.0 (2013-12-08)


#### Bug Fixes

* Fix twitter card meta-tags data ([62753d6b](http://github.com/oswaldoacauan/ghostium/commit/62753d6bf6c84bd44c71da6df1d53680d2a2e368))
* **pjax:** Fix back/foward #1 ([0212b437](http://github.com/oswaldoacauan/ghostium/commit/0212b4370b9e02b0cc234c28b300f0c5b12dff2d))
* **scripts:** Fix not highlight without/invalid language ([8ab92557](http://github.com/oswaldoacauan/ghostium/commit/8ab92557ee5e782257658cc857c3363324b3c996))
* **templates:**
  * Only show pagination if it exists ([4c777533](http://github.com/oswaldoacauan/ghostium/commit/4c77753341027ccd5d0230138ee988b62f59219a))
  * Only show tags when have one ([e32e4f43](http://github.com/oswaldoacauan/ghostium/commit/e32e4f43ce4ded9766fe99d840e7fac97e0a95e0))
  * Add missing [data-pjax] attributes ([fa869766](http://github.com/oswaldoacauan/ghostium/commit/fa86976689af771639b2b00edfed9a391c2d1a78))


#### Features

* Add FastClick plugin. Close #14 ([dc02d8ac](http://github.com/oswaldoacauan/ghostium/commit/dc02d8ac7a6644d0ac9e09c900d2297a22b05073))
* **drawer:** Completely new design #10 ([e97820be](http://github.com/oswaldoacauan/ghostium/commit/e97820beecaa3c1e2e633323c64eab078743aad1))
* **styles:** Add more author info on post. Close #18 ([c0e60856](http://github.com/oswaldoacauan/ghostium/commit/c0e6085665def13056478e75b78011d70cc168fb))
* **template:** Add a custom feature partial ([87b9d565](http://github.com/oswaldoacauan/ghostium/commit/87b9d56535c0a3ebe37c9a058f3503b7f8ecec9c))

<a name="v1.1.1"></a>
### v1.1.1 (2013-11-17)


#### Bug Fixes

* **styles:** Fix pullquote style on small viewports ([89d8d90e](http://github.com/oswaldoacauan/ghostium/commit/89d8d90e023f4f0fb2f7842b9af3fb5370207d25))


#### Features

* **styles:** Hide author avatar on small viewports ([2a9d6db4](http://github.com/oswaldoacauan/ghostium/commit/2a9d6db462ca89a74a96da22675f6eb67aaa0919))

<a name="v1.1.0"></a>
## v1.1.0 (2013-11-17)


#### Bug Fixes

* **partial:**
  * Fix Theme name on footer partial ([a7fd4df2](http://github.com/oswaldoacauan/ghostium/commit/a7fd4df2281c86ca231703544b14c436e4441ebf))
  * Fix Ghost link on footer partial ([7a3c2775](http://github.com/oswaldoacauan/ghostium/commit/7a3c2775d8b5532f3c5899b30971abbbc62aad3a))
* **styles:**
  * Fix iOS Safari choopy scroll #6 ([6366b9b2](http://github.com/oswaldoacauan/ghostium/commit/6366b9b2f5dae87b74236955a94f2026cabbc45d))
  * Add break-word property  on code/pre blocks ([904e6b57](http://github.com/oswaldoacauan/ghostium/commit/904e6b571b7619289144227ef7ffaac0ae551bbb))
* **templates:**
  * Change disqus hash to href #4 ([20ff6eba](http://github.com/oswaldoacauan/ghostium/commit/20ff6eba26cf7995fea921046a0bf21cf4f7e222))
  * Add disqus hash on comment links  #4 ([d2b41bab](http://github.com/oswaldoacauan/ghostium/commit/d2b41bab7db9ec6bad317d03b7cb40b266387959))


#### Features

* **drawer:** Close after clicking on pjax link  #8 ([10134a32](http://github.com/oswaldoacauan/ghostium/commit/10134a32c0a210ff517e05ca97960e638304044f))
* **grunt:** Add grunt-csso in build task #2 ([5472a6a5](http://github.com/oswaldoacauan/ghostium/commit/5472a6a5a296ad8a0e04e2b5f2474e1180412b73))
* **social:** Add post title on twitter share  #9 ([4bce6b22](http://github.com/oswaldoacauan/ghostium/commit/4bce6b22ec4c4332aa5ceb868c514c1a5ab8bcbf))

<a name="v1.0.9"></a>
### v1.0.9 (2013-11-11)


#### Bug Fixes

* Enable jQuery ajax cache ([9086a0c3](http://github.com/oswaldoacauan/ghostium/commit/9086a0c3afce03cc8bb871cb6c9df25acb0c916b))

<a name="v1.0.8"></a>
### v1.0.8 (2013-11-11)


#### Bug Fixes

* **grunt:** Fix clean release task ([5949166d](http://github.com/oswaldoacauan/ghostium/commit/5949166df10adf1486d37331a919278c2feb627c))

<a name="v1.0.7"></a>
### v1.0.7 (2013-11-11)


#### Bug Fixes

* **grunt:** Fix grunt release task ([62c152c7](http://github.com/oswaldoacauan/ghostium/commit/62c152c7e985930471052face33872839ac12213))


#### Features

* **grunt:** Change grunt-bump for grunt-push-release ([410891e8](http://github.com/oswaldoacauan/ghostium/commit/410891e8dd3fba04ae9fde2fcd11bcb56b12ca9b))

<a name="v1.0.5"></a>
### v1.0.5 (2013-11-11)


#### Bug Fixes

* **grunt:** Fix clean release folders ([bb3899c5](http://github.com/oswaldoacauan/ghostium/commit/bb3899c52eff283f68f4b80d43f78f65d720894a))

<a name="v1.0.4"></a>
### v1.0.4 (2013-11-11)


#### Bug Fixes

* **grunt:** Fix clean release task ([37d13e43](http://github.com/oswaldoacauan/ghostium/commit/37d13e43e17dfdbc97a6525e6d25fbd3c823ef67))

<a name="v1.0.3"></a>
### v1.0.3 (2013-11-11)

<a name="v1.0.2"></a>
### v1.0.2 (2013-11-11)


#### Bug Fixes

* **grunt:** Add changelog taks config ([fce4af1a](http://github.com/oswaldoacauan/ghostium/commit/fce4af1aea1f1bc8cf0de4195a5b76f1e53fbc3a))

