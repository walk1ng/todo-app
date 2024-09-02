<template>
  <div @click="send(text)" class="button">{{ text }}</div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["ok"]);

function send(msg) {
  emits("ok", msg);
}
</script>

<style>
.button {
  width: 100px;
  height: 50px;
  background-color: lightgreen;
  color: white;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
  margin: 5px auto;
  user-select: none;
  cursor: pointer;
  box-shadow: lightgreen 2px 5px 10px;
}
</style>
