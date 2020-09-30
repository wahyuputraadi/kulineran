<template>
  <div id="hero">
    <!-- dekstop -->
    <div class="d-none d-md-block">
      <div class="row mt-5">
        <div class="col-lg-6">
          <div class="d-flex h-100">
            <div class="justify-content-between align-self-center">
              <h1>
                <strong>Delicius Food Menu,</strong> <br />
                in Your Gadget
              </h1>
              <p>Ayo segera pilih dan pesan makanan favorit anda</p>
              <router-link class="btn btn-success" to="/Foods"
                >Pesan <b-icon-arrow-right />
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <img src="/assets/img/hero-foods.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-5">
        <div class="col-lg-6">
          <img src="/assets/img/hero-foods.png" width="100%" />
        </div>
        <div class="col-lg-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1>
                <strong>Delicius Food Menu,</strong> <br />
                in Your Gadget
              </h1>
              <p>Ayo segera pilih dan pesan makanan favorit anda</p>
              <router-link class="btn btn-success" to="/pesan"
                >Pesan <b-icon-arrow-right></b-icon-arrow-right
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>