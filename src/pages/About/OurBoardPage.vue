<template>
  <div>
    <div class="container">
      <h1 class="text-left">Board Members  {{$store.state.site_details.current_year }}</h1>
      <hr class="my-4" />
      <!-- <div class="row">
        <div class="board-members col-md-6">
          <img src="/images/about/board-members.jpg" alt class="img-fluid" />
        </div>
        <div class="col-md-6">
          <b>Back row (left to right):</b>
          <p
            class="members"
          >Public Relations Chair William Ma, Club Administration Chair Walter Diller, Secretary PP RR Shrestha, IPP Jo Logghe, TRF Chair Dr Isa C B Khadka, 1st VP Lisa Choegyal, Service Projects Chair Paras Rana, Joint Secretary Arun Man Sherchand.</p>
          <b>Front row (left to right):</b>
          <p
            class="members"
          >2nd VP Ganesh Gurung, President Neeva Mathema Pradan, Treasurer Ajay Staphit.</p>
          <b>Not in the photo:</b>
          <p
            class="member"
          >Sergeant-at-Arms Shyam Thapaliya, Membership Chair Mani D Joshi, and Yourh Service Chair Dr C.Lekha Tuladhar</p>
        </div>
      </div> -->
    </div>
    <div  style="background:#f4f4f4">
      <div class="container">
        <!-- <h3 class="text-left mt-5">Board Members 2020-2021</h3>
        <hr class="my-4" /> -->
        <div class="row mt-30">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4" v-for="item in members" :key="item">
            <div class="custom-card">
              <div class="row my-3">
                <div class="col-md-6 col-sm-6 col-6" style="padding-right:0">
                  <div class="cards-image" v-if="item.image">
                    <img v-lazy="imageBase+item.image.url" class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="custom-card-text">
                    <h2 class="title" :class="item.name=='Neeva Mathema Pradhan'?'smaller-title':''">{{item.name}}</h2>
                    <span class="post">{{item.title}}</span>
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
// const imageBase = "/images/about/board/";
export default {
  data() {
    return {
      imageBase: process.env.VUE_APP_DOMAIN,
      members: [
          {
          name: "Lista Choegyal",
          imageUrl: `choegyal.jpg`,
          title: "President"
        },
         {
          name: "Bhim Udas",
          imageUrl: ``,
          title: "Vice President"
        },
          {
          name: "Dr. Nirmal Rijal",
          imageUrl: `nirmal-rijal.jpg`,
          title: "Immediate Past President"
        },
        {
          name: "Rupy Singh",
          imageUrl: `rupy.jpg`,
          title: "Preseident Elect"
        },
        {
          name: "Jo Logghe Sherpa",
          imageUrl: `logghe.jpg`,
          title: "Treasurer"
        },
        {
          name: "Kalpana Prajuli",
          imageUrl: `kalpana.jpg`,
          title: "Secretary"
        },
        {
          name: "Amy Bunnell",
          imageUrl: `amy.jpg`,
          title: "Secretary"
        },
        {
          name: "Isabella Khadka",
          imageUrl: `isa.jpg`,
          title: "Membership Chair"
        },
        {
          name: "Paras SJB Rana",
          imageUrl: `paras.jpg`,
          title: "Projects Chair"
        },
        {
          name: "Sangeeta Thapa",
          imageUrl: `sangeeta-rana-thapa.jpg`,
          title: "Club Admin"
        },
        
        {
          name: "Dr. Chadra Lekha Tuladhar",
          imageUrl: `clekha.jpg`,
          title: "Youth Services"
        },
        {
          name: "TRF Chair",
          imageUrl: `gopal.jpg`,
          title: "Gopal Kakshapati"
        },
        //    {
        //   name: "Abhisekh Raj",
        //   imageUrl: `abhishek.jpg`,
        //   title: "Secretary"
        // },
        //    {
        //   name: "Rachana Thapa",
        //   imageUrl: `rachana thapa.jpg`,
        //   title: "Treasurer"
        // },
       
       
        //  {
        //   name: "Paras SJB Rana",
        //   imageUrl: `paras.jpg`,
        //   title: "Community Project Chair"
        // },
       
        // {
        //   name: "Neeva Mathema Pradhan",
        //   imageUrl: `neeva.jpg`,
        //   title: "Public Image & Vocational/ Community Dev. Chair"
        // },
       
     
       
      ]
    };
  },
  methods: {
    getImgUrl(img) {
      var url = this.imageBase + img;
      return require(`${url}`);
    }
  },
  mounted(){
    console.log("VUE_APP_BASE_URL",process.env.VUE_APP_BASE_URL)
    this.$API.getBoardMembers().then(data=>{
      console.log("data", data.data.data)
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
  background:#025198;
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
  padding: 15px 10px 15px 5px;

  text-transform: capitalize;
}
.custom-card-text h2 {
  font-size: 18px;
  font-weight: 600;
  color: #716b70;
  text-transform: capitalize;
}
hr{
  background-color: #FAA72F;
}

.smaller-title{
  font-size: 16px !important;
}
</style>
