<template>
  <div class="card">
    <img :src="`/img/${data.img}.png`" class="card-img-top" height="250" />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <div class="d-flex flex-column gap-2 info">
        <div class="d-flex align-items-center gap-2">
          <img src="/img/food.png" class="icon-info" />
          <div>{{ data.info }}</div>
          <div class="ms-3">
            <img src="img/stars.png" width="20" class="icon-info" />
          </div>
          <div>{{ data.stars }}</div>
        </div>

        <div class="d-flex align-items-center gap-2">
          <img src="/img/location.png" class="icon-info" />
          <div>
            {{ data.address }}
          </div>
        </div>

        <div class="d-flex align-items-center gap-2">
          <div>
            <img src="/img/clock.png" class="icon-info" />
          </div>
          <div>
            {{ data.timeOpen }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRestaurantStore } from "../../stores/store";
export default {
  props: {
    data: Object,
  },
  // setup() {
  //   const restaurantStore = useRestaurantStore();
  //   return { restaurantStore };
  // },
};
</script>

<style scoped>
.info {
  font-size: 15px;
}
.icon-info {
  width: 20px;
  height: 20px;
}
.card-body {
  flex-grow: 0;
}
</style>
