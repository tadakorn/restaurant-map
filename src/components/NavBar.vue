<template>
  <nav>
    <div class="container py-2">
      <div class="row align-items-center">
        <div class="col-2 col-md-6">
          <a href="#">
            <img src="img/restaurant.png" class="img-fluid" width="32" />
          </a>
        </div>
        <div class="col-10 col-md-6">
          <div class="d-flex gap-2">
            <input
              ref="searchInput"
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="restaurantStore.search"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRestaurantStore } from "../stores/store";

export default {
  setup() {
    const restaurantStore = useRestaurantStore();
    return { restaurantStore };
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
  methods: {
    search() {
      console.log("eiei");
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #5677fc;
}
</style>
