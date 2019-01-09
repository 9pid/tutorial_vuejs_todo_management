<template>
  <div>
    {{ msg }}
    <form>
      <button v-on:click="addTodo()">Add Todo</button>
      <button>Delete Finished Todo</button>
      <p>input: <input type="text" v-model="newTodo"></p>
      <p>task: {{ newTodo }}</p>
    </form>
    <div class="todo-list">
      <label class="todo-list__item"
             v-for="todo in todos">
        <input type="checkbox"><button>Edit</button>{{ todo.text }}
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
        done: false
      }, {
        text: 'vuex',
        done: false
      }, {
        text: 'vue-loader',
        done: false
      }, {
        text: 'awesome-vue',
        done: true
      }]
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
      width: 270px;
      text-align: left;
      color: #85a6c6;
    }
  }
}
</style>
