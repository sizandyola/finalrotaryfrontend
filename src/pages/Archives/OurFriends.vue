<template>
  <div class="our-friends">
    <div class="container">
      <h1 class="text-left">Our Friends</h1>
      <hr class="my-4" />

      <p class="text-justify">
        Over the past 30+ years many clubs from around the
        world have visited us here in Kathmandu. If you have
        visited our Club and would like to have your flag included
        here please send to <router-link to="/contact-us/contact-information">‘Contact Us’</router-link> . Here is a
        partial list of our friends and visitors:
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-3 col-sm-3 col-md-2 mt-3 flags" v-for="flag in flags" :key="flag.id">
          <img :src="flag.url" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flags: []
    };
  },
  mounted() {
    this.$API
      .getFlags()
      .then(data => {
        this.flags = data.data[0].acf.flags;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>


<style scoped>
.flags{
    max-height: 250px;
    overflow: hidden;
    transition: 0.5s ease all;
}
.flags:hover{
    transform: scale(1.3);
    z-index: 999;
}
</style>