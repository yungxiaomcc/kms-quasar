<template>


  <q-page class="q-pa-sm">
    <TableFilterDemo
    ></TableFilterDemo>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import TableFilterDemo from 'src/components/TableFilterDemo.vue';

defineOptions({
  name: 'IndexPage'
});


</script>
