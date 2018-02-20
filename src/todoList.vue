<template>
  <div id="listArea">
    <div id="nothingTodo">
      등록된 할 일이 없습니다!
    </div>
    <div id="todoList">
      <ul>
      </ul>
    </div>
  </div>

</template>

<script>

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
