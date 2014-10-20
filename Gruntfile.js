'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    release: {
      options: {
        tagMessage: 'version <%= version %>'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('default', ['release']);
};
