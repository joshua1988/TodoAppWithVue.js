<template>
  <div id="inputArea">

    <input type="text" id="inputTodoText" v-model="todoText" placeholder="여기에 할 일을 입력해주세요."/>

    <div class="container" style="display:inline-block;float:right;">
      <button id="addTodoBtn" v-on:click="funcAddTodo()" class="btn-3">등록</button>
    </div>
  </div>
</template>

<script>

var storageKey = "myTodoApp";
var currentKey = "currentKey";

function getNextKey() {
  var stor = localStorage.getItem(storageKey);

  if ( stor ) {
    var obj = JSON.parse(stor);

    var key = obj[currentKey];



    if ( key ) {
      console.log("key : " + key);
      console.log("key : " + key.split('_')[0]);
      console.log("key : " + key.split('_')[1]);

      var num = key.split('_')[1];


      return key.split('_')[0] + (parseInt(num)+1);
    }
  }

  return "todoKey_1";

  /*
  if ( key ) {
    var num = key.split('_')[1];

    return key.split['_'][0] + (num+1);
  } else {
    return "todoKey_1";
  }
  */
}

function addData(text) {

  var key = getNextKey();
  var stor = localStorage.getItem(storageKey);
  var obj = null;

  if ( stor ) {
    obj = JSON.parse(stor);
  } else {
    // data가 없는 경우..
    obj = {};
  }

  obj[key] = text;
  obj[currentKey] = key;

  localStorage.setItem(storageKey, JSON.stringify(obj));
}

export default {
  data : function() {
    return {
      todoText : ''
    }
  },
  methods: {
    funcAddTodo() {

      if ( this.todoText ) {
        //alert(this.todoText);
        addData(this.todoText);
        this.todoText = '';
      } else {
        alert("입력해주세요!");
      }

    }
  }
}



</script>

<style>
#inputArea {
  width:100%;
  padding-top:10px;
  padding-bottom:10px;
  border-bottom:3px solid #eeeeee;
}
#inputTodoText {
  background: #2ecc71;
  width:calc(100% - 80px);
  height:30px;
  line-height:30px;
  font-size:15px;
  border:0px;
  margin-left:3px;
}

#addTodoBtn {

}


.container {
  /*padding: 1px;*/
  padding-left:3px;
  padding-right:3px;
}

/* GENERAL BUTTON STYLING */
button,
button::after {
  -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
    transition: all 0.3s;
}

button {
  background: none;
  border: 3px solid #fff;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 1.6em;
  font-weight: bold;
/*  margin: 1em auto;*/
  padding: 3px 15px;
  position: relative;
  text-transform: uppercase;
}

button::before,
button::after {
  background: #fff;
  content: '';
  position: absolute;
  z-index: -1;
}

button:hover {
  color: #2ecc71;
}

/* BUTTON 1 */
.btn-1::after {
  height: 0;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-1:hover:after {
  height: 100%;
}

/* BUTTON 2 */
.btn-2::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}

.btn-2:hover:after {
  width: 100%;
}

/* BUTTON 3 */
.btn-3::after {
  height: 0;
  left: 50%;
  top: 50%;
  width: 0;
}

.btn-3:hover:after {
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

/* BUTTON 4 */
.btn-4::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-4::after {
  background: #2ecc71;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-4:hover:after {
  height: 0;
  left: 50%;
  top: 50%;
  width: 0;
}

/* BUTTON 5 */
.btn-5 {
  overflow: hidden;
}

.btn-5::after {
  /*background-color: #f00;*/
  height: 100%;
  left: -35%;
  top: 0;
  transform: skew(50deg);
  transition-duration: 0.6s;
  transform-origin: top left;
  width: 0;
}

.btn-5:hover:after {
  height: 100%;
  width: 135%;
}
</style>
