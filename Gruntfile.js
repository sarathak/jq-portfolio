
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
        watch: {
            files: ['Gruntfile.js', 'src/**/*.js',],
            tasks: ["concat"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jst');

    // Default task(s).
    grunt.registerTask('default', ['concat']);

};