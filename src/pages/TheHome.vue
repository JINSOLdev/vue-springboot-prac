<template>
  <main>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in state.items" :key="idx">
            <CardView :item="item"></CardView>
          </div>

        </div>
      </div>
    </div>

  </main>
</template>

<script>
import CardView from '@/components/TheCard.vue';
import axios from 'axios';
import {reactive} from "vue";


export default {
  name: 'TheHome',
  components: {CardView},
  setup() {
    const state = reactive({
      items: []
    })

  axios.get("/api/items").then(({data}) => {
    // console.log(res);
    state.items = data
  })

    return {
      state
    }
  }
}
</script>

<style scoped>

</style>