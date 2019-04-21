
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
        jshint: {
            all: ['src/**/*.js'],
            options: {
                jshintrc: true
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};