export default {
  name: 'hello',
  data: function() {
    return {
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
