module.exports = function(grunt){
    grunt.initConfig({
        htmlmin:{
            options:{
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files:{
                src:'./index.html',
                dest:'dist/index.html'
            }
        },
        cssmin: {  
            files:{
                src:'./app.css',
                dest:'dist/app.css'
            }
          },
        uglify: {
            // my_target:{
              files: {
                src:'./*.js',
                dest:'dist/*.js'
              } 
            // }
        },
        htmlmin:{
          options:{
              collapseWhitespace: true,
              preserveLineBreaks: false
          },
          files:{
              src:'./index.html',
              dest:'res/index.html'
          }
      },
      cssmin: {  
          files:{
              src:'./app.css',
              dest:'res/app.css'
          }
        },
      uglify: {
          // my_target:{
            files: {
              src:'./*.js',
              dest:'res/*.js'
            } 
          // }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('default',['htmlmin','cssmin','uglify']);
  };