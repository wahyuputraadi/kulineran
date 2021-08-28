<template>
  <div id="app">
    <div class="food-detail">
      <navbar />
      <div class="container">
        <div class="row mt-5">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link class="text-dark" to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link class="text-dark" to="/foods">Foods</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Food Order
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg-6">
            <img
              src="/assets/img/sate-ayam.jpg" 
              class="img-fluid shadow"
            />
          </div>
          <div class="col-md-6">
            <h2>
              <strong>sate ayam</strong>
            </h2>
            <hr />
            <h4>
              Harga : <strong>Rp. 16.000</strong>
            </h4>
            <form class="mt-4" >
              <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesan</label>
                <input
                 
                  type="number"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea
                 
                  class="form-control"
                  placeholder="Keterangan seperti : Pedas, Nasi Setengah"
                />
              </div>
              <button
               
                type="submit"
                class="btn btn-success mt-3"
              >
                <b-icon-cart></b-icon-cart> Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>