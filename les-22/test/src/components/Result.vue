<template>
  <div
    :class="{
      'result': true,
      'tag': true,
      'is-large': true,
      'is-dark': state === 0,
      'is-success': state === 1,
      'is-danger': state === 2,
    }"
  >
    Vraag {{ index + 1 }}
  </div>
</template>

<script>
 export default {
   name: 'Result',
   props: {
     state: {
       type: Number,
       required: true,
     },
     index: {
       type: Number,
       required: true,
     }
   }
 }
</script>

<style></style>
