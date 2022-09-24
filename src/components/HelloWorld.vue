<script setup>
import { reactive, ref } from 'vue'
import api, { excel } from '../api'
let data = ref([])
let loading = ref(false)
let zpData = reactive({
  currentPage: 1,
  pageSize: 15,
  totalPage: 1,
  status: true,
  layout: 'prev, pager, next, jumper',
})

function getData(currentPage) {
  loading.value = true
  api(currentPage)
    .then((res) => {
      data.value = res.items
      zpData.pageSize = res.pageSize
      zpData.totalPage = res.totalPage
    })
    .finally(() => {
      loading.value = false
    })
}

function handleCurrentChange(currentPage) {
  getData(currentPage)
}

getData(zpData.currentPage)
excel()
</script>

<template>
  <div class="inform">
    <div class="title">求职职位</div>
    <el-table
      class="table card"
      :data="data"
      max-height="580"
      v-loading="loading"
      element-loading-text="Loading..."
    >
      <el-table-column label="公司">
        <template #default="scope">
          <a
            :href="
              'http://xsjy.whu.edu.cn/jyxt/sczp/zpztgl/ckZpgwList.zf?dwxxid=' + scope.row.dwxxid
            "
            target="_blank"
            >{{ scope.row.dwmc }}</a
          >
        </template>
      </el-table-column>
      <el-table-column prop="zwmc" label="招聘职位"></el-table-column>
      <el-table-column prop="zpzt" label="招聘主题"></el-table-column>
      <el-table-column prop="fbsj" label="发布时间"></el-table-column>
    </el-table>
    <el-pagination
      class="pagenation"
      background
      :hide-on-single-page="zpData.status"
      :layout="zpData.layout"
      :page-size="zpData.pageSize"
      :page-count="zpData.totalPage"
      :total="zpData.totalResult"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="less" scoped>
.inform {
  position: relative;
  .title {
    font-size: 18px;
    text-align: center;
    padding: 5px 0;
  }
}
.el-pagination {
  padding: 5px 0;
  justify-content: center;
}
</style>
