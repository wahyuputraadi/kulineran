<template>
  <div id="app">
    <div class="product-mitra">
      <navbar />
      <div class="container mt-4">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb" style="background: white;">
                    <li class="breadcrumb-item"><a style="text-decoration: none;" href="/"><i class="fa fa-home" aria-hidden="true"></i> Home </a></li>
                    <li class="breadcrumb-item active" aria-current="page"><strong>Mitra Pinjem 
                        kurir</strong>
                    </li>
                </ol>
                <hr style="margin-top: -1rem;">
            </nav>
        <div class="row mt-5">
          <div class="col">
            <h2><strong>Laptop SeberID</strong></h2>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Cari barang pada laptop seberID"
                aria-label="Cari"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"
                  ><b-icon-search></b-icon-search></span>
                  
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
            <list-product />
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import ListProduct from "@/components/ListProduct.vue";


export default {
  name: "ProductMitra",
  components: {
    Navbar,
    ListProduct,
  }, 
};
</script>

<style>
</style>
