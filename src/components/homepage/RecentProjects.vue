<template>
  <div class="section py-5">
    <div class="container">
      <h1>Recent Global Grants Projects</h1>
      <hr />

      <div class="row">
       

        <div class="col-md-4 mt-3">
          <div class="card" style="display:table">
            <div class="card-img-top" style="min-height: 290px; display: flex; align-items: center;">
              <img src="https://rotary.circallstrading.com/uploads/career_connection_efec7d5c62.png" class="img-fluid" alt />
            </div>
            <div class="card-body">
              <div class="card-title">
                <h2>Career Connection</h2>
              </div>
              <div class="card-text read-more">
                <i class="fas fa-external-link-alt mr-2"></i>
                <router-link :to="{name:'Global Grants',hash:'#career-connection'}">Read More</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mt-3">
          <div class="card" style="display:table">
            <div class="card-img-top">
              <img src="/images/our-projects/snakebite.jpg" class="img-fluid" alt />
            </div>
            <div class="card-body">
              <div class="card-title">
                <h2>Snakebite Prevention and Awareness Project</h2>
              </div>
              <div class="card-text read-more">
                <i class="fas fa-external-link-alt mr-2"></i>
                <router-link
                  :to="{name:'Global Grants',hash:'#snakebite'}"
                >Read More</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="card" style="display:table">
            <div class="card-img-top">
              <img src="/images/our-projects/first-steps.jpg" class="img-fluid" />
            </div>
            <div class="card-body">
              <div class="card-title">
                <h2>Early Years Education Support Project in Nuwakot and Sindulpalchowk</h2>
              </div>
              <div class="card-text read-more">
                <i class="fas fa-external-link-alt mr-2"></i>
                <router-link :to="{name:'Global Grants',hash:'#education-support'}">Read More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.section {
  background-color:#FAA72F; 
  
}
h1 {
  color: #fff;
  /* color: #ffd700; */
}
hr {
  border-color: #fff;
}
.pad0 {
  padding: 0px;
}
.bg_redish {
  background: rgba(0, 0, 0, 0.7);
}
.block-blog {
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(226, 223, 223, 0.61);
}
.transperent_block {
  padding: 0px;
  position: relative;
  overflow: hidden;
  height: 250px;
}
.transperent_block img {
  height: 100%;
}
.transperent_block:hover .black_hover_block {
  opacity: 1;
  transform: translateY(-150px);
  -webkit-transform: translateY(-150px);
  -moz-transform: translateY(-150px);
  -ms-transform: translateY(-150px);
  -o-transform: translateY(-150px);
}
.transperent_block img {
  z-index: 4;
}
.transperent_block .black_hover_block {
  position: absolute;
  bottom: 3%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 100%;
}
.transperent_block:hover .black_hover_block,
.black_hover_block:hover {
  bottom: 20%;
  transition: all 0.3s ease-in-out;
}
.transperent_block .blur {
  background-color: rgba(0, 0, 0, 0.7);
  height: 400px;
  z-index: 5;
  position: absolute;
  width: 100%;
}
.transperent_block .black_hover_block_text {
  z-index: 10;
  color: #fff;
  /* color:#ffd700; */
  position: absolute;
  height: 400px;
  text-align: center;
  top: -40px;
  width: 100%;
}
.block_header {
  margin-top: 5px;
}
.black_hover_block_text i:hover {
  color: #77132f;
  /* color:#ffd700; */
}
.black_hover_block_text i {
  padding: 10px 10px;
  font-size: 18px;
  color: #fff;
}
.black_hover_block_text i:hover {
  color: #ffffffa6;
}

.black_hover_block_text:hover .titl-h5 {
  background-color: rgba(119, 19, 47, 0.6);
}
.titl-h5 {
  /* border-top: 2px solid #77132f;
  border-bottom: 2px solid #77132f; */
  padding: 10px;
  margin-top: 0px;
  line-height: 20px;
  text-transform: uppercase;
}
.btn-pink {
  background-color: #77132f;
  color: #fff;
  border: 4px solid #77132f;
}
.btn-pink:hover {
  color: #fff;
  background-color: #6f0f2a9e;
  border: 4px solid #6f0f2a4e;
}
.btn-sm {
  margin-top: 10px;
}
.black_hover_block_text li:hover {
  background-color: #77132f;
  cursor: pointer;
  color: #fff;
  width: 33.34%;
}
.black_hover_block_text li {
  list-style: none;
  border: none !important;
}

.read-more {
  color: var(--primary-red);
  /* border-bottom: 1px solid var(--primary-red); */
  display: table;
}

.read-more a {
  color: var(--primary-red);
  text-decoration: none;
}

.card-img-top {
  overflow: hidden;
}
.card-img-top img:hover {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  transition: all 1s;
}

.card-title {
  /* min-height: 500px; */
  font-size: 15px;
  height: 80px;
  overflow: hidden;
}
.read-more {
  color: #faa72f;
  display: table;
  padding-top: 2px;
  height: 35px;
}
.read-more:hover {
  border-bottom: 1px solid #faa72f;
}
.read-more a {
  /* color: #025198; */
  color: #faa72f;
}
@media only screen and (max-width: 768px) {
  body{
    text-align: center;
  }
}
</style>


