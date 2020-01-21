Vue.component('todo-item', {
template:'<li> test for use component </li>' 
})


var app = new Vue({
    el: '#vue-app',
    data: {
        name:"wejdan",
        job:"developer",
        website:"https://www.linkedin.com/in/wejdan-alghamdi/",
        websiteTag:'<a href="https://www.linkedin.com/in/wejdan-alghamdi/"> wejdans website</a>',
        age: 23,
        x:0,
        y:0,
        message: "Hello World",
        messages:"be happay any way",
        seen: true,
        todos:[
        {text:'learn React'},
        {text:'learn Vue'},
        {text:'learn Ai'}],
        names: "",
        ages:20,
        a:0,
        b:0

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
updateXY: function(event){
console.log(event);
this.x = event.offsetX;
this.y = event.offsetY;

},
click: function(){
    alert("click me")
},
logName: function(){

    console.log("u entered your name")
},
logAge: function(){

    console.log("u entered your Age")
},
reversmessage: function(){
 this.messages=this.messages.split('').reverse('').join('')
},



    },
    computed:{
        addA: function(){
            console.log("addA")
        return this.a + this.ages 
        },
        addB: function(){
            console.log("addB")
            return this.b + this.ages
        }
    }
})

app.todos.push({text:" push push new item "})