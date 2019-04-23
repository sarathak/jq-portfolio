
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/**\n' + ' * <%= pkg.name %> v<%= pkg.version %> (https://github.com/sarathak/jq-portfolio)\n'
                    //   + ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n'
                    + ' * Licensed under: <%= pkg.license %>\n' + ' */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            },
        },
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js',],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: [ 'last 2 versions', 'ie 7', 'ie 8', 'ie 9', 'ie 10', 'ie 11' ]
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.css': 'src/<%= pkg.name %>.css'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.css': 'src/<%= pkg.name %>.css'
                }
            }
        },
        // connect: {
        //     server: {
        //         options: {
        //             port: 8080,
        //             base: 'docs',
        //             keepalive:true,
        //         }
        //     }
        // },
        watch: {
            files: ['Gruntfile.js', 'src/**/*.js', 'src/**/*.css',],
            tasks: ["concat",'autoprefixer'],
            // options: {
            //     livereload: true
            // },
        }
    });
    // grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('debug', ['connect','cssmin']);
    grunt.registerTask('build', ['uglify','cssmin']);
    grunt.registerTask('default', ['concat','autoprefixer']);

};