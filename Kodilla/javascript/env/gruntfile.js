module.exports = function(grunt) {

	//Project configuration
	grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};