<template>
<table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品圖片</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody v-if="state.products.length">
    <tr v-for="product in state.products" :key="product.id">
      <td>{{ product.category }}</td>
      <td>
        <img :src="product.imageUrl" :alt="product.title" width="100" />
      </td>
      <td>{{ product.title }}</td>
      <td class="text-right">
        {{ product.origin_price }}
      </td>
      <td class="text-right">
        {{ product.price }}
      </td>
      <td>
        <span v-if="product.is_enabled" class="text-success">啟用</span>
        <span v-else class="text-danger">不啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm">編輯</button>
          <button class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script setup>
import { reactive } from 'vue'
import { getProducts, getProductsAll } from '../apis/products'

const state = reactive({
  products: [],
  pagination: {
    total_pages: 1,
    current_page: 1,
    has_pre: false,
    has_next: false,
    category: null
  }
})

const fetchData = (page = 1) => {
  getProducts(page)
  .then(res => {
    if (res.data.success) {
      state.products = res.data.products;
      state.pagination = res.data.pagination;
    }
  })
}

fetchData()

</script>