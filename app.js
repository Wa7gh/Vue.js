new Vue({
    el: '#vue-app',
    data: {
        name:"wejdan",
        job:"developer",
        website:"https://www.linkedin.com/in/wejdan-alghamdi/",
        websiteTag:'<a href="https://www.linkedin.com/in/wejdan-alghamdi/"> wejdans website</a>',
        age: 23,
        x:0,
        y:0

    },
    methods:{
greet: function( time ){
    return 'you will be what you want ' + time + this.name
},
add: function(inc){
    this.age += inc
},
subtract: function(dec){
    this.age -= dec
},
UpdateXY: function(event){
console.log(event);

}


    }
})