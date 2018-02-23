<template>
  <div id="listArea">
    <ul id="todoList">
      <li v-for="todoItem in todoItems">
        {{todoItem}}
      </li>
    </ul>
  </div>

</template>

<script>

var storageKey = "myTodoApp";
var currentKey = "currentKey";

function showList(items) {
  var stor = localStorage.getItem(storageKey);

  if ( stor ) {
    var obj = JSON.parse(stor);
  
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && key !== currentKey) {
          console.log(key + " -> " + obj[key]);
          items.push(obj[key]);
      }
    }
  } else {
    items.push("등록된 할 일이 없습니다.")
  }
}

export default {
  data() {
    return {
      todoItems:[]
    }
  },
  created() {
    showList(this.todoItems);
  }
}



</script>

<style>
#listArea {
  font-size:1.5em;
}
#nothingTodo {
  width:100%;
  height:100px;
  padding-top:10px;
  padding-bottom:10px;
  border-bottom:3px solid #eeeeee;
},
#todoList {
  width:100%;
  height:100px;
  display:none;
}
</style>
