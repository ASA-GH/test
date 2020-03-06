module.exports = function(){
    var faker = require("faker");
    var lodash = require("lodash");
    return{
      items: lodash.times(100, function(n){
        return{
            id: n,
            name:faker.internet.userName(),
            uniqueUrlName: null,
            photos: {
                small:faker.image.avatar(),
                large:faker.image.imageUrl()
              },
              status:faker.hacker.phrase(),
              followed: false
        }
      }),
    options:{
    totalCount: 100,
    error: null
    }
}}


















