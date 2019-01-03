var app = new Vue({
  el: '#app',
  data: {
    count:0
  },
  methods: {
    increment: function(){
      this.count++; // thisはコンストラクタ内なのでVueを指す
    }
  }
})
