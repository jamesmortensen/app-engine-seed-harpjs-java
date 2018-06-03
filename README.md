This is an example website template powered by Grunt, grunt-watch, and HarpJS, to use live-reload to make development faster while also serving users lightning-fast static pages.

# Folder structure

 - app-engine-seed-harpjs-java
   - node_modules: grunt-watch, HarpJS, etc.
   - source: All of the EJS, SASS, CSS, LESS, images, and other static resources.
      - js
      - css
      - images
      - *.ejs files
   - src/main/webapp: Google App Engine project files
      - auto-generated: The output folder containing the generated HTML/CSS and JavaScript to be served in production and development.
      - WEB-INF: Hidden folder in production, contains all Java configuration and class files.
        - appengine-web.xml: App Engine configuration file, modified to serve static files from src/main/webapp/auto-generated
   - src/main/java: Java source files


# How it Works

EJS is not run as a server side process. Instead, all resources are precompiled so when served at runtime they are lightning fast, static resources. To make development faster, we use grunt watch to watch for changes in the source files and then regenerate the static resources on the fly.  Lastly, we automatically reload the page in the browser using the [Chrome LiveReload plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

Upon hitting save, changes are instantly viewable in the browser.

# Benefits

Traditionally, while static HTML files are served faster than any dynamically-created resource, development of large websites can be cumbersome without a way to create templates for reusable components. This approach combines the ability to create templates in development with the ability to compile static HTML files for deployment to the Web server.


# Getting Started

## Install dependencies

HarpJS requires the following development dependencies:

### Node.js

Download and install Node.js from http://nodejs.org.


### HarpJS

```bash
$ npm install -g harp@0.25.0
```

### Grunt

Install Grunt globally:

```bash
$ npm install -g grunt
```

## Install grunt modules

```bash
$ npm install
```

## Install Gradle

If your website is only a static website, then you may skip this step. However, if you need servlet support or other server-side development, then you'll need Gradle in order
to compile the Java code and run Google App Engine's development server.

See [the Gradle Installation page](https://gradle.org/install/) for installation instructions. When completed, you should see this output when running from the terminal:

```
$ gradle -v

------------------------------------------------------------
Gradle 4.6
------------------------------------------------------------

Build time:   2018-02-28 13:36:36 UTC
Revision:     8fa6ce7945b640e6168488e4417f9bb96e4ab46c

Groovy:       2.4.12
Ant:          Apache Ant(TM) version 1.9.9 compiled on February 2 2017
JVM:          1.8.0_162 (Oracle Corporation 25.162-b12)
OS:           Mac OS X 10.13.4 x86_64
```

## Install LiveReload plugin

In Chrome, browse to the [LiveReload Chrome Web Store page](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) and install the extension.

# Developing

- Start Google App Engine Development Server:

-- If client-side only:

```bash
$ nps appengineRun
```

-- Otherwise, if you're also developing server-side code, use Gradle instead:

```bash
$ gradle appengineRun
```

Start coding.  


# Deploying to Google App Engine

From the project root, the folder containing the 'src' folder, run the following command:

```bash
$ nps compile
```

Then from Eclipse, deploy the project as you normally would, using the Google App Engine plugin.  Alternatively, you may run the following command:

```bash
$ appcfg.sh update war
```
