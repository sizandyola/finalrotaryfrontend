<template>
  <div>
    <div class="container">
      <h1 class="text-left">Board Members 2020-2021</h1>
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
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="cards-image">
                    <img v-lazy="imageBase+item.imageUrl" class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="custom-card-text">
                    <h2 class="title">{{item.name}}</h2>
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
      imageBase: "/images/about/board/",
      members: [
          {
          name: "Lt. Gen. KNS Thapa (Ret’d.)",
          imageUrl: `khrishna-thapa.jpg`,
          title: "President"
        },
          {
          name: "Promod Paudel",
          imageUrl: `promod-poudel.jpg`,
          title: "President Elect"
        },
        {
          name: "Neeva Mathema Pradhan",
          imageUrl: `neeva.jpg`,
          title: "Immediate Past President"
        },
       
          {
          name: "Rabindra Shrestha",
          imageUrl: `rabindra-shrestha.jpg`,
          title: "Vice Presidient"
        },
          {
          name: "Dr. Nirmal Rijal",
          imageUrl: `nirmal-rijal.jpg`,
          title: "Secretary"
        },
         {
          name: "Ramraj Shrestha",
          imageUrl: `ramraj-shrestha.jpg`,
          title: "Joint Secretary"
        },
       {
          name: "Ajay Staphit",
          imageUrl: `ajay.jpg`,
          title: "Treasurer"
        },
       
        {
          name: "Bhairaja Panday",
          imageUrl: `bhairaja.jpg`,
          title: "Fund Raising Chair"
        },
         {
          name: "Dr. Chadra Lekha Tuladhar",
          imageUrl: `clekha.jpg`,
          title: "Youths Service Chair"
        },
           {
          name: "Mani Dhoj Joshi",
          imageUrl: `mani.jpg`,
          title: "Membership Chair"
        },
          {
          name: "William Ma",
          imageUrl: `william.jpg`,
          title: "Public Relations Chair"
        },
         {
          name: "Paras SJB Rana",
          imageUrl: `paras.jpg`,
          title: "Community Projects Chair"
        },
         {
          name: "Govinda Chipalu",
          imageUrl: `govinda-chipalu.jpg`,
          title: "Club Administration Chair"
        },
         {
          name: "Rabi Karmacharya",
          imageUrl: `rabi-karmacharya.jpg`,
          title: "The Rotary Foundation Chair"
        },
         {
          name: "Shyam Thapaliya",
          imageUrl: `rabindra.jpg`,
          title: "Sergeant-at-Arms"
        },
       
      ]
    };
  },
  methods: {
    getImgUrl(img) {
      var url = this.imageBase + img;
      return require(`${url}`);
    }
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
  padding: 15px 10px;

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
</style>
