module.exports = function(grunt) {
    
    grunt.initConfig({
      watch: {
        options: {
          livereload: true /*,
          debounceDelay: 50 */
        },
        files: ['source/**/*'],
        tasks: ['harp:dist'],
      },
      harp: {
        server: {
          server: true,
          source: 'source'
        },
        dist: {
          source: 'source',
          dest: 'war/auto-generated'
        }
      },
      sitemap: {
        dist: {
            pattern: ['war/auto-generated/**/*.html', '!war/auto-generated/**/google*.html'], // this will exclude 'google*.html' 
            siteRoot: 'war/auto-generated/',
            homepage: '/'
        }
      }
    });


    /**
     * Syntax:
     *
     * $ grunt generate
     *
     * Builds the static site and generates a sitemap.
     *
     */
    grunt.registerTask("generate", ["harp:dist", "sitemap"]);
    

    /**
     * npm tasks
     */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-harp');
    grunt.loadNpmTasks('grunt-sitemap');
};
