import Vue from 'vue'

import todoHeader from './todoHeader.vue'
import todoInput from './todoInput.vue'
import todoList from './todoList.vue'
import todoCommand from './todoCommand.vue'


new Vue({
  el: '#todoApp',
  components: {
    'header-comp' : todoHeader,
    'input-comp' : todoInput,
    'list-comp' : todoList,
    'command-comp' : todoCommand,
  }
})
