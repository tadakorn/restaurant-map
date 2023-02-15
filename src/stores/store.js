import { defineStore } from "pinia";

export const useRestaurantStore = defineStore("restaurant", {
  state: () => ({
    search: "Bang Sue",
    filterRestaurantList: [],
    restaurantList: [
      {
        img: "copper",
        title: "Copper Buffet",
        info: "นานาชาติ",
        id: 1,
        address: "Pin Klao, Bangkok",
        timeOpen: "11:00 - 19:00",
        position: {
          lat: 13.7795794,
          lng: 100.4726523,
        },
        stars: "4.8",
      },
      {
        img: "maxbeef",
        title: "Maxbeef",
        info: "ไทย",
        id: 2,
        address: "Chatuchak, Bangkok",
        timeOpen: "12:00 - 22:00",
        position: {
          lat: 13.8459562,
          lng: 100.5630748,
        },
        stars: "4.5",
      },
      {
        img: "chinda",
        title: "สุกี้จินดา",
        info: "จีน",
        id: 3,
        address: "Huay Kwang, Bangkok",
        timeOpen: "11:30 - 04:00",
        position: {
          lat: 13.7791128,
          lng: 100.5741808,
        },
        stars: "4.0",
      },
      {
        img: "resto",
        title: "Pasta and Espresso Osteria",
        info: "นานาชาติ",
        id: 4,
        address: "Phra Khanong, Bangkok",
        timeOpen: "11:00 - 22:00",
        position: {
          lat: 13.7014772,
          lng: 100.6011255,
        },
        stars: "5.0",
      },
      {
        img: "star",
        title: "สโตน แอนด์ สตาร์",
        info: "นานาชาติ",
        id: 5,
        address: "Pathum Wan, Bangkok",
        timeOpen: "11:00 - 22:00",
        position: {
          lat: 13.7468507,
          lng: 100.5424042,
        },

        stars: "4.1",
      },
      {
        img: "yuhuu",
        title: "ร้านอาหาร ครัวยู้ฮู",
        info: "ไทย",
        id: 6,
        address: "Bang Sue, Bangkok",
        timeOpen: "10:00 - 22:30",
        position: {
          lat: 13.8076584,
          lng: 100.5131221,
        },
        stars: "4.1",
      },
      {
        img: "kosupa",
        title: "KOSUPA! Sushi Bar (โคสึปะ ซูชิ บาร์) - บางซื่อ",
        info: "ญี่ปุ่น",
        id: 7,
        address: "Bang Sue, Bangkok",
        timeOpen: "11:30 - 21:30",
        position: {
          lat: 13.8062894,
          lng: 100.5243726,
        },

        stars: "4.6",
      },
      {
        img: "khiang",
        title: "เขียง บางซื่อ",
        info: "ไทย",
        id: 8,
        address: "Bang Sue, Bangkok",
        timeOpen: "09:00 - 22:00",
        position: {
          lat: 13.8075784,
          lng: 100.5218699,
        },
        stars: "4.9",
      },
    ],
  }),
  actions: {
    searchRestaurant() {
      this.filterRestaurantList = this.restaurantList.filter(
        (item) =>
          item.address.includes(this.search) || item.title.includes(this.search)
      );
    },
  },
});
