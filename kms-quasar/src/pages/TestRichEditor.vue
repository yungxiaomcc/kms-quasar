<template>


  <q-page class="q-pa-sm">

  <div class="row">
    <q-file
      v-model="htmlFile"
      label="Pick one file"
      filled
      style="max-width: 300px"
    />
    <q-btn color="amber" glossy label="Amber" @click="handGetHtml" />


  </div>


  <div class="row">
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="handleChange"
      />


  </div>


  </q-page>
</template>

<script setup lang="ts">

import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted,watchEffect } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'


// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const mode = ref('default')
const htmlFile = ref<File|null>(null)

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: typeof Editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleChange = (editor:typeof Editor) => { console.log('change:', editor.children) }

watchEffect(() => {

  console.log('--------------')
  console.log(htmlFile.value)
  htmlFile.value


  if (htmlFile.value){

    const reader = new FileReader();
    reader.onload = function(e:any) {
    console.log('File content:', e.target.result);
    editorRef.value.setHtml(e.target.result)

  };
    const content = reader.readAsText(htmlFile.value as File)

  }



})

const handGetHtml = ()=>{
  const content  = editorRef.value.getHtml()

  console.log(content)
}


</script>
