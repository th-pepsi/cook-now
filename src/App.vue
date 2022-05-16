<script setup lang="ts">
let count = ref(20);
</script>

<template>
  <div>
    <div>
      {{ count }}
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div h-full text-center flex select-none all:transition-400>
      <div ma>
        <div
          text-5xl
          fw100
          animate-bounce-alt
          animate-count-infinite
          animate-duration-1s
        >
          unocss
        </div>
        <div op30 text-lg fw300 m1>
          The instant on-demand Atomic CSS engine.
        </div>
      </div>
    </div>
    <div absolute bottom-5 right-0 left-0 text-center op30 fw300>
      on-demand · instant · fully customizable
    </div>
  </div>

  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

function ref(arg0: number) {
  throw new Error("Function not implemented.");
}
