<template>
  <div class="designated mt-4">
    <div class="container">
      <h1 class="text-left mt-5">
        Rotary Club of Kathmandu Mid-Town Speaker Calendar for the Rotary Year
        2021-2022
      </h1>
      <hr class="" />

      <div class="calender">
        <div class="calender-content">
          <!-- <h2 class="mb-3">July 2020</h2> -->
          <div class="row py-5 border-bottom" v-for="(item,index) in items" :key="index">
            <div class="col-md-4">
              <div class="image">
                <img :src="'/images/weeklymeeting/2021-2022/'+item.featuredImage " class="img-fluid" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="content ml-3">
                <h4 class="mb-3">{{item.date}}</h4>
                <p>
                  {{item.description}}
                </p>
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
    return {
        items: [
            {
                featuredImage: "july2.jpg",
                date: "July 2",
                description: "Dr Sanjib Shrestha  -- a personal reminiscence on my 26 years journey in USA, the current COVID situation and the heartbreak of losing my mother and not be there to bid her farewell in person.",
                extraImage : "",
            },
             {
                featuredImage: "july9.jpg",
                date: "July 9",
                description: "DGE Jitendra Rajbandari will share some of his experiences in Rotary",
                extraImage : "",
            },
            // {
            //     featuredImage: "",
            //     date: "July 16",
            //     description: "",
            //     extraImage : "",
            // },
            {
                featuredImage: "july23.jpg",
                date: "July 23",
                description: "Dr Max Caws will talk on, “The Flying Pharmacy: Drone Networks for Healthcare in Rural Nepal”",
                extraImage : "",
            },
            {
                featuredImage: "july30.jpg",
                date: "July 30",
                description: "Dr. Bharat Rawat is Associate Director of Cardiology and a Life Style Guide at Medanta Hospital Indore, India.Tentative title of talk, “Healthier Life Style for Healthier Heart”",
                extraImage : "",
            }
        ]
    };
  },
  mounted() {
   
  },
  computed: {
    
  },
};
</script>



<style scoped>
.image {
  max-height: 300px;
  overflow: hidden;
}

.image img {
  width: 300px;
}

.calender-content {
  margin-top: 4em;
}
hr {
  background-color: #faa72f;
}

p {
  text-align: justify;
}
</style>
