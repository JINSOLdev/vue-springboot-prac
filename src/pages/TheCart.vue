<template>
  <div class="cart">
    <div class="container">
      <ul>
        <li v-for="(i, idx) in state.items" :key="idx">
          <img :src="i.imgPath"/>
          <span class="name">{{ i.name }}</span>
          <span class="price">{{  }}</span>
          <i class="fa fa-trash" @click="remove(i.id)"></i>
        </li>
      </ul>
      <router-link to="/order" class="btn btn-primary">구입하기</router-link>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import {reactive} from "vue";
import lib from "@/scripts/lib";

export default {
  setup() {
    const state = reactive({
      items: []
    })

    const load = () => {
      axios.get("/api/cart/items", {withCredentials: true}).then((response) => {
        console.log('응답데이터:', response.data)
        state.items = response.data;      // response.data로 할당
        console.log('Fetched items with details:', state.items);
      }).catch(error => {
        console.error('Error fetching cart items: ', error)
      })
    };

    const remove = (itemId) => {
      axios.delete(`/api/cart/items/${itemId}`, {withCredentials: true}).then(() => {
        // 요청 성공 후 state.itesm 배열에서 삭제된 아이템 제거
        state.items = state.items.filter(item => item.id !== itemId);
        // load();
      }).catch(error => {
        console.error(`Error deleting cart item:`, error);
      })
    }

    load();

    return {state, lib, remove}
  }
}
</script>

<style scoped>
.cart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart ul li {
  border: 1px solid #eee;
  margin-top: 25px;
  margin-bottom: 25px;
}

.cart ul li img {
  width: 150px;
  height: 150px;
}

.cart ul li .name {
  margin-left: 25px;
}

.cart ul li .price {
  margin-left: 25px;
}

.cart ul li i {
  float: right;
  font-size: 20px;
  margin-top: 65px;
  margin-right: 50px;
}

.cart .btn {
  width: 300px;
  display: block;
  margin: 0 auto;
  padding: 30px 50px;
  font-size: 20px;
}
</style>