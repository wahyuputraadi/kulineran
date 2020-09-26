<template>
  <div id="app">
    <div class="home">
      <navbar />
      <div class="container">
        <hero />
        <div class="row mt-5">
          <div class="col">
            <h2>Best <strong>Foods</strong></h2>
          </div>
          <div class="col">
            <router-link class="btn btn-success float-right" to="/semua-item"
              ><b-icon-eye /> Lihat Semua
            </router-link>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-3 mt-3"
            v-for="product in products"
            :key="product.id"
          >
            <card-product :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
