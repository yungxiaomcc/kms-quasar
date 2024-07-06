<template>


<q-page-sticky position="top" :offset="[18, 18]">
            <q-btn round color="accent" icon="arrow_back" class="rotate-45" />
          </q-page-sticky>

<div class="row ">
  <q-breadcrumbs gutter="sm">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>
</div>
<div class="row flex-center ">
  <q-input label="Standard" v-model="text_input" outlined  />


  <q-input filled v-model="date">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
</div>

  <div class="row flex-center ">
  <q-table square class="no-shadow" title="Treats" :rows="data" :columns="columns" row-key="name"></q-table>
</div>


</template>

<script setup lang="ts">

import { defineComponent, ref } from 'vue'

import {QTableColumn,QTableProps} from 'quasar'

const text_input = ref('')

const date = ref('2019-02-01 12:44')

interface TblRowT{

name:string

}


const data = [
{
  name: 'Frozen Yogurt',
  calories: 159,
  fat: 6.0,
  carbs: 24,
  protein: 4.0,
  sodium: 87,
  calcium: '14%',
  iron: '1%'
},
{
  name: 'Ice cream sandwich',
  calories: 237,
  fat: 9.0,
  carbs: 37,
  protein: 4.3,
  sodium: 129,
  calcium: '8%',
  iron: '1%'
},
{
  name: 'Eclair',
  calories: 262,
  fat: 16.0,
  carbs: 23,
  protein: 6.0,
  sodium: 337,
  calcium: '6%',
  iron: '7%'
},
{
  name: 'Cupcake',
  calories: 305,
  fat: 3.7,
  carbs: 67,
  protein: 4.3,
  sodium: 413,
  calcium: '3%',
  iron: '8%'
},
{
  name: 'Gingerbread',
  calories: 356,
  fat: 16.0,
  carbs: 49,
  protein: 3.9,
  sodium: 327,
  calcium: '7%',
  iron: '16%'
},
{
  name: 'Jelly bean',
  calories: 375,
  fat: 0.0,
  carbs: 94,
  protein: 0.0,
  sodium: 50,
  calcium: '0%',
  iron: '0%'
},
{
  name: 'Lollipop',
  calories: 392,
  fat: 0.2,
  carbs: 98,
  protein: 0,
  sodium: 38,
  calcium: '0%',
  iron: '2%'
},
{
  name: 'Honeycomb',
  calories: 408,
  fat: 3.2,
  carbs: 87,
  protein: 6.5,
  sodium: 562,
  calcium: '0%',
  iron: '45%'
},
{
  name: 'Donut',
  calories: 452,
  fat: 25.0,
  carbs: 51,
  protein: 4.9,
  sodium: 326,
  calcium: '2%',
  iron: '22%'
},
{
  name: 'KitKat',
  calories: 518,
  fat: 26.0,
  carbs: 65,
  protein: 7,
  sodium: 54,
  calcium: '12%',
  iron: '6%'
}
];
const columns:Array<QTableColumn> = [
{
  name: 'name',
  required: true,
  label: 'Dessert (100g serving)',
  align: 'left',
  field: (row:TblRowT) => row.name,
  format: (val:string) => `${val}`,
  sortable: true
},
{ name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
{ name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
{ name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
{ name: 'protein', label: 'Protein (g)', field: 'protein' },
{ name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
{
  name: 'calcium',
  label: 'Calcium (%)',
  field: 'calcium',
  sortable: true,
  sort: (a:string, b:string) => parseInt(a, 10) - parseInt(b, 10)
},
{
  name: 'iron',
  label: 'Iron (%)',
  field: 'iron',
  sortable: true,
  sort: (a:string, b:string) => parseInt(a, 10) - parseInt(b, 10)
}
];



</script>

