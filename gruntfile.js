module.exports = function(grunt) {

     // Project configuration.
     grunt.initConfig({
        sass: {
            options: {                sourceMap: true
            },
            dist: {
                files: {
                    'style.css': 'style.sass'
                }
            }
        },

        watch: {
            scripts: {
                files: ['style.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'style.css',
                        'index.html',
                        'scripts.js'
                    ]
                },
                options: {
                    watchTask: true, 
                        server: { 
                            baseDir: './'
                        }
                }
            }
        }
     });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // Default task(s).
    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
    };