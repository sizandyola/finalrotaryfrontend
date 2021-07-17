<template>
  <div class="blog mt-5 pb-5" v-if="!loading">
    <div class="container">
     
      <img :src="data.acf.image.url" alt />
      <!-- <p class="date">{{data.acf.date}}</p> -->
       <h1 class="center mt-5">{{data.acf.title}}</h1>
      <p class="center text-justify mt-3" v-html="data.acf.description"></p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: {},
      loading: true
    };
  },
  mounted() {
    this.loading = true;
    this.current = this.$route.params.id;
    this.$API.getNewsById(this.current).then(data => {
      this.data = data.data;
      this.loading = false;
    });
  }
};
</script>


<style scoped>

.container {
  width: 60%;
  margin: 0 auto;
}
.blog img {
  width: 100%;
}

.date {
  margin-top: 10px;
  font-size: 14px;
  color: var(--primary-blue);
}

 .img-wrapper{
        width: 100%;
        height: 300px;
    }

.img-wrapper img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

  @media only screen and (max-width: 600px) {
    .container{
      width: 90%;
    }
  }
</style>