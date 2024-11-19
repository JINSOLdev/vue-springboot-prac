<template>
  <div class="orders">
    <div class="container">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>번호</th>
          <th>주문자</th>
          <th>주소</th>
          <th>결제 수단</th>
          <th>구입 항목</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(o, idx1) in state.orders" :key="idx1">
          <td>{{ state.orders.length - idx1 }}</td>
          <td>{{ o.name }}</td>
          <td>{{ o.address }}</td>
          <td>{{ o.payment }}</td>
          <td>
            <div v-for="(o, idx2) in o.items" :key="idx2">{{ o.name }}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>


import {reactive} from "vue";
import lib from "@/scripts/lib";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      orders: []
    })

    axios.get('/api/orders', {withCredentials: true})  // withCredentials 설정
        .then((response) => {
          // console.log("성공이다:", response.data);  // 응답 내용 확인
          // state.orders = response.data;  // 응답 데이터를 상태에 저장
          // console.log("첫번째 주문이다:", response.data[1].items)  // 첫번째 주문의 items 데이터

          state.orders = response.data.map((order) => {
            // order.items가 JSON 문자열인지 확인 후 파싱
            if (typeof order.items === "string"){
              try {
                order.items = JSON.parse(order.items);
              } catch (error) {
                console.error("items 파싱 실패:", error);
                order.items = [];       // 파싱 실패 시, 빈 배열로 초기화
              }
            }
            return order;
          });
          console.log("파싱 후 주문 데이터:", state.orders);  // 최종 상태 데이터 확인
        })
        .catch((error) => {
          console.error("주문 목록을 가져오는 데 실패했습니다.", error.response ? error.response.data : error.message);
        });


    return {state, lib}
  }
}
</script>

<style scoped>
.table {
  margin-top: 30px;
}

.table tbody{
  border-top: 1px solid #eee;
}
</style>