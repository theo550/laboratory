<template>
  <form action="GET" @submit.prevent="addNewTodo">
    <label for="">Todolist with vue composition API</label>
    <input v-model="newTodo" name="newTodo" type="text">
    <div class="button-wrapper">
      <button>Add</button>
      <button @click.prevent="markAllTodos">Mark all</button>
      <button @click.prevent="removeAllTodos">Remove all</button>
    </div>
  </form>
  <div class="list">
    <ul>
      <li v-for="(todo, index) in arrTodos" :key="index">
        <input v-model="todo.done" class="radio" type="checkbox">
        <p :class="{ done: todo.done}" @click.prevent="toggleDone(todo)">{{ todo.content }}</p>
        <button class="remove" @click.prevent="removeTodo(index)">x</button>
      </li>
    </ul>
  </div>
</template>


<script>
import {useHandleTodoList} from '../composition/todolist/handleTodoList'
import {useToggleTodos} from '../composition/todolist/toggletodos'

export default {
  name: 'TodoList',
  setup (){
    //import useAddNewTodo from ./composition/addnewtodo.js 
    // handle todolist
    const {
      newTodo,
      arrTodos,
      addNewTodo,
      removeTodo,
      markAllTodos,
      removeAllTodos
    } = useHandleTodoList()

    //import useToggleTodos from ./composition/toggletodos.js
    // how to know if a todo is done 
    const {
      toggleDone
    } = useToggleTodos()

    


    return {
      // data
      newTodo,
      arrTodos,
      // methods
      addNewTodo,
      toggleDone,
      removeTodo,
      markAllTodos,
      removeAllTodos
    }
  }  
}
</script>

<style scoped>

  form{
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60vw;

  margin: 0 auto;
}

input{
  width: 60vw;
  height: 30px;

  margin: 40px 0 20px 0;

  outline: none;

  border: none;
  border-bottom: 1px solid #585858;
}

.button-wrapper{
  width: max(100%, 310px);
  max-width: 400px;

  display: flex;
  justify-content: space-around;
}

button{
  width: 100px;
  height: 50px;

  cursor: pointer;

  background: #198754;
  color: white;

  border: none;

  font-weight: bolder;

  border-radius: 4px;
}

button:hover{
  background: #20ad6b;
}

.list ul{
  list-style: none;

  padding: 0;
}

li{
  width: 100%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}

.radio{
  width: 20px;
  position: absolute;

  left: 40px;

  display: none;

  cursor: pointer;
}

li:hover .remove{
  display: block;
}
li:hover .radio{
  display: block;
}

.done{
  text-decoration: line-through ;

  color: rgba(0,0,0,.4);
}

.remove{
  width: 30px;
  height: 30px;

  position: absolute;

  right: 30px;

  display: none;

  cursor: pointer;

  background: rgba(0,0,0,0);
  border: none;

  color: red;

  font-size: 16px;
  font-weight: bold;
}

.remove:hover{
  background: #FFF;
}

p{
  width: 70%;
}

@media screen and (max-width: 435px) {
  .button-wrapper{
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  button{
    margin: 5px 0;
    width: 80%;

    height: 50px;
  }
  input{
    height: 40px;
  }

  .remove{
    display: block;

    right: 10px;
  }
  .radio{
    left: 10px;
  }
  p{
    width: 60%;
  }
}

</style>