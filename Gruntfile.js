module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/stylesheets/header.css': 'assets/stylesheets/src/header.scss',
          'assets/stylesheets/about.css': 'assets/stylesheets/src/about.scss',
          'assets/stylesheets/skills.css': 'assets/stylesheets/src/skills.scss',
          'assets/stylesheets/timeline.css': 'assets/stylesheets/src/timeline.scss'
          // 'assets/stylesheets/portfolio.css': 'assets/stylesheets/src/portfolio.scss',
          // 'assets/stylesheets/testimonial.css': 'assets/stylesheets/src/testimonial.scss',
          // 'assets/stylesheets/contact.css': 'assets/stylesheets/src/contact.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css':
          [
           'assets/stylesheets/header.css', 
           'assets/stylesheets/about.css',
           'assets/stylesheets/skills.css',
           'assets/stylesheets/timeline.css'
           // 'assets/stylesheets/portfolio.css',
           // 'assets/stylesheets/testimonial.css',
           // 'assets/stylesheets/contact.css'
          ]  
        }
      }
    }  
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
};