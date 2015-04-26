This is an example website template powered by Grunt, grunt-watch, and HarpJS, to use live-reload to make development faster while also serving users lightning-fast static pages.

#Folder structure

 - app-engine-seed-harpjs-java
   - node_modules: grunt-watch, HarpJS, etc.
   - source: All of the EJS, SASS, CSS, LESS, images, and other static resources.
      - js
      - css
      - images
      - *.ejs files
   - war: Google App Engine project files
      - auto-generated: The output folder containing the generated HTML/CSS and JavaScript to be served in production and development.
      - WEB-INF: Hidden folder in production, contains all Java configuration and class files.
        - appengine-web.xml: App Engine configuration file, modified to serve static files from war/auto-generated
   - src: Java source files


#How it Works

EJS is not run as a server side process. Instead, all resources are precompiled so when served at runtime they are lightning fast, static resources. To make development faster, we use grunt watch to watch for changes in the source files and then regenerate the static resources on the fly.  Lastly, we automatically reload the page in the browser using the [Chrome LiveReload plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

Upon hitting save, changes are instantly viewable in the browser.

#Benefits

Traditionally, while static HTML files are served faster than any dynamically-created resource, development of large websites can be cumbersome without a way to create templates for reusable components. This approach combines the ability to create templates in development with the ability to compile static HTML files for deployment to the Web server.


# Getting Started

## Install dependencies

HarpJS requires the following development dependencies:

### Node.js

Download and install Node.js from http://nodejs.org.


### Grunt

Install Grunt globally:

```bash
$ npm install -g grunt
```

## Install grunt modules

```bash
$ npm install
```

## Install LiveReload plugin

In Chrome, browse to the [LiveReload Chrome Web Store page](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) and install the extension.

# Developing

- Start the Google App Engine debugger from Eclipse.
- Run 'grunt watch'

```bash
$ grunt watch
```

Start coding.  When changes are saved, they'll be copied to the war/auto-generated folder.


# Deploying to Google App Engine

From the project root, the folder containing the 'war' folder, run the following command:

```bash
$ grunt generate
```

Then from Eclipse, deploy the project as you normally would, using the Google App Engine plugin.  Alternatively, you may run the following command:

```bash
$ appcfg.sh update war
```
