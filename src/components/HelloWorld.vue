<template>
  <div>
    {{ msg }}
    <form>
      <button @click="addTodo()">Add Todo</button>
      <button @click="deleteCheckedTodos()">Delete Finished Todo</button>
      <p>input: <input type="text" v-model="newTodo"></p>
      <p>task: {{ newTodo }}</p>
    </form>
    <div class="todo-list">
      <label class="todo-list__item"
             :class="{'todo-list__item--checked': todo.done}"
             v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <button @click="toggleTodoEdit(todo)">{{ editButtonText(todo) }}</button>
        <input v-if="todo.editing" type="text" v-model="todo.text">
        <span v-else>{{ todo.text }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function() {
    return {
      msg: 'Welcome to Your Vue.js App',
      newTodo: '',
      todos: [{
        text: 'vue-router',
        editing: false,
        done: false
      }, {
        text: 'vuex',
        editing: false,
        done: false
      }, {
        text: 'vue-loader',
        editing: false,
        done: false
      }, {
        text: 'awesome-vue',
        editing: false,
        done: true
      }]
    }
  },
  computed: {
    editButtonText: function() {
      return (todo) => {
        if (todo.editing) return 'Enter';
        return 'Edit';
      };
    }
  },
  methods: {
    addTodo: function(event) {
      const newText = this.newTodo? this.newTodo.trim(): null;
      if (!newText) return;

      this.todos.push({
        text: newText,
        done: false
      });
      this.newTodo = '';
    },
    deleteCheckedTodos: function(event) {
      const newTodos = this.todos.filter((todo) => {
        return !todo.done;
      });
      this.todos = newTodos;
    },
    toggleTodoEdit: function(todo) {
      todo.editing = !todo.editing;
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: --webit-flex;
  display: --moz-flex;
  display: --ms-flex;
  display: --o-flex;
}

.todo-list {
  @include flex-vender;

  flex-direction: column;
  align-items: center;

  &__item {
    width: 270px;
    text-align: left;

    &--checked {
      color: #85a6c6;
    }
  }
}
</style>
