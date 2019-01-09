<template>
  <div>
    {{ msg }}
    <form>
      <button>Add Todo</button>
      <button>Delete Finished Todo</button>
      <p>input: <input type="text"></p>
      <p>task :</p>
    </form>
    <div class="todo-list">
      <label class="todo-list__item">
        <input type="checkbox"><button>Edit</button>vue-router
      </label>
      <label class="todo-list__item">
        <input type="checkbox"><button>Edit</button>vuex
      </label>
      <label class="todo-list__item">
        <input type="checkbox"><button>Edit</button>vue-loader
      </label>
      <label class="todo-list__item--checked">
        <input type="checkbox" checked><button>Edit</button>awesome-vue
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
