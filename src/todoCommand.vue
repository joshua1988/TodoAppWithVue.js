<template>
  <div id="commandArea">
    <button id="removeAll" class="btn-3" v-on:click="funcRemoveAll()">모두 삭제</button>
  </div>
</template>

<script>

export default {
  methods: {
    funcRemoveAll() {
      localStorage.clear();
    }
  }
}
</script>

<style>
#commandArea {
  width:100%;
  padding-top:10px;
},
#removeAll {
  width:120px;
}
</style>
