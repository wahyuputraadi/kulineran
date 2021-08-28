<template>
  <div id="app">
    <div class="Foods">
      <navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h1>Daftar <strong>Toko Mitra</strong></h1>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Makan apa hari ini"
                aria-label="Cari"
                aria-describedby="basic-addon1"
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
            <card-product />
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";


export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    
  },
 
 
};
</script>

<style>
</style>
