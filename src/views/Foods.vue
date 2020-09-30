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
        <div class="row mt-3">
          <div class="col">
            <div class="input-group mb-3">
              <input
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Makan apa hari ini"
                aria-label="Cari"
                aria-describedby="basic-addon1"
                @keyup="searchFoods"
              />
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"
                  ><b-icon-search></b-icon-search
                ></span>
              </div>
            </div>
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
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFoods() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
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
