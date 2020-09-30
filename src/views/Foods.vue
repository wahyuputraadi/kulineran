<template>
  <div id="app">
    <div class="Foods">
      <navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h1>Daftar <strong>Makanan</strong></h1>
          </div>
        </div>
        <div class="row mb-3">
          <div
            class="col-md-4 mt-5 mb-5"
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
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
    data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};



</script>

<style>
</style>
