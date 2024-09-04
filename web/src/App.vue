<script setup>
import { ref, watch } from "vue";
import { cloneDeep } from "lodash";
import myButton from "./components/Button.vue";

const msg = ref("Hello World");

const value = ref("");
const todos = ref([
  {
    text: "吃饭",
    done: false,
  },
  {
    text: "睡觉",
    done: false,
  },
  {
    text: "打豆豆",
    done: true,
  },
]);

let oldTodos = cloneDeep(todos.value);

function w(newValue, oldValue) {
  console.log("newTodos:", newValue);
  console.log("oldTodos:", oldValue);

  oldTodos = cloneDeep(newValue);
}

watch(
  todos,
  (newValue) => {
    w(newValue, oldTodos);
  },
  { deep: true }
);

function add() {
  todos.value.push({
    text: value.value,
    done: false,
  });
  value.value = "";
}

function del(index) {
  todos.value.splice(index, 1);
}

function handleOK(msg) {
  console.log(msg);
}
</script>

<template>
  <div class="todo-app">
    <div class="title">Todo App Plus</div>
    <div class="todo-form">
      <input
        v-model="value"
        type="text"
        placeholder="Add Todo ... "
        class="todo-input"
      />
      <div @click="add" class="todo-btn">Add todo</div>
    </div>

    <div
      v-for="(item, index) in todos"
      :key="index"
      :class="[item.done ? 'done' : 'todo-item', 'todo-item']"
    >
      <div>
        <input v-model="item.done" type="checkbox" />
        <span class="name">{{ item.text }}</span>
      </div>
      <div @click="del(index)" class="del">del</div>
    </div>

    <div class="btn-group">
      <myButton @ok="handleOK" text="点赞"></myButton>
      <myButton @ok="handleOK" text="收藏"></myButton>
      <myButton @ok="handleOK" text="投币"></myButton>
    </div>
  </div>
</template>

<style>
body {
  background: linear-gradient(to right, purple, rgb(39, 39, 223));
}

.btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.name {
  margin-left: 5px;
}

.del {
  color: red;
  cursor: pointer;
  user-select: none;
}

.done {
  text-decoration: line-through;
  opacity: 0.4;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 50px;
  box-sizing: border-box;

  margin: 10px auto;
  padding: 16px;

  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 5px 8px 10px;
}

.todo-app {
  width: 98%;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 1%;
  padding-top: 30px;
  box-sizing: border-box;
}

.title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.todo-form {
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
}

.todo-input {
  width: 70%;
  height: 50px;
  border: 1px solid gray;
  outline: none;
  border-radius: 20px 0 0 20px;
  padding-left: 15px;
  margin-bottom: 20px;
}

.todo-btn {
  width: 100px;
  height: 53px;
  background: linear-gradient(to right, purple, rgb(39, 39, 223));
  color: white;
  text-align: center;
  line-height: 53px;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  user-select: none;
}
</style>
