<template>
  <GoogleMap
    :api-key="GOOGLE_MAP_API_KEY"
    class="map"
    :center="center"
    :zoom="11.5"
  >
    <GoogleMapMarker
      v-for="restaurant in restaurantStore.filterRestaurantList"
      :key="restaurant.id"
      :options="{
        position: restaurant.position,
      }"
    >
      <InfoWindow :options="{ minWidth: 350, maxWidth: 350 }">
        <RestaurantCard :data="restaurant" />
      </InfoWindow>
    </GoogleMapMarker>
  </GoogleMap>
</template>

<script>
import {
  GoogleMap,
  Marker as GoogleMapMarker,
  InfoWindow,
} from "vue3-google-map";
import { storeToRefs } from "pinia";
import { useRestaurantStore } from "../../stores/store";
import RestaurantCard from "./RestaurantCard.vue";

export default {
  components: {
    GoogleMap,
    GoogleMapMarker,
    InfoWindow,
    RestaurantCard,
  },
  mounted() {
    this.restaurantStore.searchRestaurant();
  },
  setup() {
    const restaurantStore = useRestaurantStore();
    const { search } = storeToRefs(restaurantStore);

    const center = { lat: 13.7802931, lng: 100.5274307 };
    const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
    return { center, restaurantStore, search, GOOGLE_MAP_API_KEY };
  },
  watch: {
    search() {
      this.restaurantStore.searchRestaurant();
    },
  },
};
</script>

<style scoped>
.map {
  height: calc(100vh - 54px);
}
</style>
