module.exports = {
  scripts: {

  	 /* Compiles the Markdown source files to HTML output */
    "compile": "harp compile source src/main/webapp/auto-generated",
    
    /* Run using Harp HTTP server */
    "server": "harp server source",

    /* Run using AppEngine Dev Server - Uses Java 8, Jetty 9, and latest App Engine SDK */
    "appengineRun": "java -Dappengine.fullscan.seconds=1 -Duse_jetty9_runtime=true -D--enable_all_permissions=true -Dappengine.sdk.root=/Users/jem/google-cloud-sdk/platform/google_appengine/google/appengine/tools/java -cp /Users/jem/google-cloud-sdk/platform/google_appengine/google/appengine/tools/java/lib/appengine-tools-api.jar com.google.appengine.tools.development.DevAppServerMain --allow_remote_shutdown --disable_update_check --no_java_agent src/main/webapp"
  }
}