// add new todo - onsubmit fonctionality
import {ref} from 'vue'

export function useHandleTodoList() {
  const newTodo = ref('');
  const arrTodos = ref([]);
  
  /*
  ** Add new todo
  */
  function addNewTodo() {
    arrTodos.value.push({
      done: false,
      content: newTodo.value,
    });
  
    newTodo.value = ''
  }

  /*
  ** remove one todo
  */
  function removeTodo(index) {
    arrTodos.value.splice(index, 1)
  }

  /*
  ** toggle done for all todos 
  */ 
  function markAllTodos() {
    arrTodos.value.map(todo => todo.done = true)
  }

  /*
  ** remove all todos
  */
  function removeAllTodos() {
    arrTodos.value = []
  }

  return {
    //data
    arrTodos,
    newTodo,
    //methods
    addNewTodo,
    removeTodo,
    removeAllTodos,
    markAllTodos
  }
}
