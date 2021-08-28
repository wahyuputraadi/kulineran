<template>
  <div class="keranjang">
    <navbar :updateKeranjang="keranjangs" />
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
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div v-if="refresh" class="table-responsive mt-5">
            <table class="table">
              <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Foto</th>
                <th scope="col">Makanan</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Total Harga</th>
                <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'/assets/img/' + keranjang.products.gambar"
                      class="img-fluid shadow"
                      width="200"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td>{{ keranjang.jumlah_pesanan }}</td>
                  <td>Rp. {{ keranjang.products.harga }}</td>
                  <td align="right">
                    <strong
                      >Rp.
                      {{
                        keranjang.products.harga * keranjang.jumlah_pesanan
                      }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash
                     
                    ></b-icon-trash>
                  </td>
                </tr>

                <!-- penjumlahan -->
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga</strong>
                  </td>
                  <td align="right">
                    <strong>Rp . {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" >
            <div class="form-group">
              <label >Nama :</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Nomor Meja</label>
              <input type="text" class="form-control" />
            </div>

            <button
            
              type="submit"
              class="btn btn-success mt-3 float-right"
            >
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";


export default {
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
   
  },
 
  
};
</script>

<style>
</style>