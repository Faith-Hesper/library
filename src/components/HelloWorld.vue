<script setup>
import { ref } from 'vue'
import api from '../api'

let data = ref([])
function getData() {
  api().then((res) => {
    let response = res
    data.value = response.items
    // console.log(data)
  })
}

getData()
</script>

<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>公司</th>
          <th>发布时间</th>
          <th>招聘职位</th>
          <th>招聘主题</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.row_id">
          <td>
            <a
              :href="'http://xsjy.whu.edu.cn/jyxt/sczp/zpztgl/ckZpgwList.zf?dwxxid=' + item.dwxxid"
              target="_blank"
              >{{ item.dwmc }}</a
            >
          </td>
          <td>{{ item.fbsj }}</td>
          <td>{{ item.zwmc }}</td>
          <td>{{ item.zpzt }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagenation">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.table td:nth-child(1) {
  text-align: left;
}
</style>
