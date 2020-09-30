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
              :src="'/assets/img/' + product.gambar"
              class="img-fluid shadow"
            />
          </div>
          <div class="col-md-6">
            <h2>
              <strong>{{ product.nama }}</strong>
            </h2>
            <hr />
            <h4>
              Harga : <strong>Rp. {{ product.harga }}</strong>
            </h4>
            <form class="mt-4" v-on:submit.prevent>
              <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesan</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="pesan.jumlah_pesanan"
                />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea
                  v-model="pesan.keterangan"
                  class="form-control"
                  placeholder="Keterangan seperti : Pedas, Nasi Setengah"
                />
              </div>
              <button
                type="submit"
                class="btn btn-success mt-3"
                @click="pemesanan"
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
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      // console.log(this.pesan);
      this.pesan.products = this.product;
      axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => {
          this.$toast.success("Sukses Masuk Keranjang", {
           type: 'success',
           position: 'top',
           duration: '2000',
           dismissible: true
          });
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>