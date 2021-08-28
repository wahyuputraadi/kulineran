<template>
  <div id="app">
    <div class="home">
      <navbar />
      <div class="container">
        <hero />
        <div class="row mt-5">
          <div class="col">
            <h3> <strong>Mitra</strong> Kami</h3>
           
          </div>
          <div class="col">
            <router-link class="btn btn-outline-secondary float-right" to="/foods"
              ><b-icon-eye /> Lihat Semua
            </router-link>
          </div>
        </div>
        <div class="row">
           <card-product/>
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


export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  
 
 
};
</script>
