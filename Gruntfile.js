module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            build: {
                files: {
                    'app/build/style.css': 'app/style/main.less'
                }
            }
        },

        browserify: {
            options: {
                transform: [
                    require('grunt-react').browserify
                ]
            },

            build: {
                src: 'app/js/app.jsx',
                dest: 'app/build/app.js'
            }
        },

        watch: {

            js: {
                files: [
                    'app/js/*.js',
                    'app/js/**/*.jsx'
                ],
                tasks: ['browserify:build'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },

            less: {
                files: [
                    'app/**/*.less'
                ],
                tasks: ['less:build'],
                options: {
                    spawn: false
                }
            },

            livereload: {
                files: [
                    'app/style/**/*.less',
                    'app/*.html',
                    'app/js/*.js',
                    'app/js/**/*.jsx'
                ],
                options: {
                    spawn: false,
                    interrupt: true,
                    livereload: true
                }
            }
        },

        connect: {
            dev: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    livereload: true,
                    base: 'app/'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('server', function () {

        grunt.task.run(['connect:dev', 'less:build', 'browserify:build', 'watch']);

    });

    grunt.registerTask('build', function () {

        grunt.task.run(['less:build', 'browserify:build']);

    });
};
