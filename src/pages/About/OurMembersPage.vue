<template>
  <div class="team">
    <div class="container">
      <h1 class="text-left">Our Members</h1>
      <hr class="mb-4" />
    </div>
    <div class style="background:#f4f4f4">
      <div class="container">
        <div class="row mt-30">
          <div
            class="col-sm-12 col-md-6 col-lg-6 col-xl-4 item"
            v-for="item in listedmembers"
          >
            <!-- <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 item" v-for="item in members" :key="item" > -->

            <div class="custom-card">
              <div class="row my-3">
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="cards-image">
                    <img v-lazy="domain + item.image.url" class="img-fluid" v-if="item.image"/>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="custom-card-text">
                    <h2 class="title">{{ item.name }}</h2>
                    <span class="post">{{ item.designation }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueLodash from 'vue-lodash'
export default {
  data() {
    return {
      domain: process.env.VUE_APP_DOMAIN,
      members: [
   
      ],
      sorting: -1
    };
  },

  computed: {
    //   listedmembers() {
    //    return _.orderBy(this.members, 'name')
    // }
    listedmembers() {
      return this.members.sort((a, b) =>
        a.name < b.name ? this.sorting : -this.sorting
      );
    }
  },
  mounted(){
    this.$API.getMembers().then(data=>{
      this.members = data.data.data
    })
  }
};
</script>

<style scoped>
.card-image {
  width: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-card {
  background: #fff;
}
.custom-card:hover {
  /* background: var(--turq); */
  background: #025198;
  color: #fff;
  transition: all 0.2s;
}
.custom-card:hover h2 {
  color: #fff;
  transition: all 0.2s;
}
.card-image img {
  height: 160px;
}

.custom-card-text {
  padding: 15px 10px;

  text-transform: uppercase;
}
.custom-card-text h2 {
  font-size: 18px;
  font-weight: 600;
  color: #716b70;
  text-transform: uppercase;
}
hr {
  /* background-color: #025198; */
  /*  */
  background-color: #faa72f;
}
</style>
