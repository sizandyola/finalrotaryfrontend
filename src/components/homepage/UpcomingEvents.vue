<template>
  <div class="py-5" style="background:#f5f5f5; ">
    <div class="container">
      <div class="row no-marginLR">
        <div class="col-md-6">
          <div class="custom-card scrollbar" id="style-1">
            <div>
              <div class="card-custom-header py-3">
                <h2 class="ml-2 text-center">
                  <i class="far fa-calendar-alt mr-2"></i>Upcoming Events
                </h2>
                <hr />
              </div>
              <div v-if="!isLoaded">
                <div class="d-flex justify-content-center align-items-center h-100">
                  <div class="loader"></div>
                </div>
              </div>
              <div class="card-custom-body" v-if="isLoaded">
                <!-- <div class="row" v-for="(ev,index) in sortedEvents" :key="index">
                  <div class="col-md-3 col-sm-3 col-3">
                    <p class="month">{{ev.acf.event_date | getMonth}}</p>
                    <p class="date">{{ev.acf.event_date | getDate}}</p>
                  </div>
                  <div class="col-md-9 col-sm-9 col-9 event-desc">
                    <p class="event-title">{{ev.acf.event_name}}</p>
                    <p>
                      <i class="fas fa-map-marker-alt text-white mr-3"></i>
                      Location: {{ev.acf.venue}}
                    </p>
                    <p>
                      <i class="far fa-clock text-white mr-3"></i>
                      Time: {{ev.acf.event_time}}
                    </p>
                  </div>
                </div>-->
                <div class="events container" v-for="(ev,index) in compareDate" :key="index">
                  
                  <div class="row">
                    <div class="col-md-12" style="padding-left:0">
                      <p class="event-title mb-2">{{ev.acf.event_name}}</p>
                    </div>
                    <div class="col-md-4" style="padding-left:0" v-if="ev.acf.image">
                      <div class="img-wrapper">
                        
                        <img :src="ev.acf.image"  class="img-fluid" alt="">
                      </div>
                      
                    </div>

                    <div :class="ev.acf.image?'col-md-8':'col-md-12'" style="padding-left:0">
                       <div>
                    
                    <p class="event-timing">
                      <i class="fas fa-calendar-week events-icon mr-2"></i>
                      {{ev.acf.event_date}}
                      <span
                        v-if="ev.acf.event_end_date"
                      >To {{ev.acf.event_end_date}}</span>
                    </p>
                    <p class="event-timing">
                      <i class="fas fa-map-marker-alt events-icon mr-2"></i>
                      Location: {{ev.acf.venue}}
                    </p>
                    <p class="event-timing">
                      <i class="far fa-clock mr-2 events-icon"></i>
                      Time: {{ev.acf.event_time}}
                    </p>

                   
                    
                  </div>
                    </div>
                    <div class="col-md-12 mt-3" style="padding-left:0">
                       <p class="details">{{ev.acf.details}}</p>
                         <hr class="bg-white" />
                    </div>
                  
                  </div>
                 
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center" v-if="compareDate.length<1">
  <h2
                  class="text-white text-center mt-5"
                  
                >No Events at the moment</h2>
                <p class="text-center text-white">Please Check Again Later</p>
                 <p ><router-link class="text-white" to="/contact-us/contact-information"> Contact Us</router-link></p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
           
            <div class="col-md-12 card mt-2">
              <!-- <h2 class="mt-2 pt-2">
                <i class="fab fa-facebook mr-2" style="color:#3b5998"></i>Facebook Feed
              </h2>-->
              <center>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRotaryClubOfKathmanduMidtown%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=454191771605285"
                  width="100%"
                  height="300"
                  style="border:none;overflow:hidden"
                  scrolling="no"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </center>
            </div>
             <div class="col-md-12 card">
              <h2 class="mt-2 pt-2 pb-2 text-center">
                <i class="fas fa-users mr-2"></i>Listen To Our Members and Guests
              </h2>
              <iframe
                width="100%"
                height="250"
                :src="featuredVideo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
const Moment = require("moment");
export default {
  data() {
    return {
      isLoaded: false,
      events: [],
      featuredVideo: "",
      currentMonth: new Date().getMonth(),
      currentDate: Moment().format()
    };
  },
  methods: {
    // compareDates(date) {
    //   return (
    //     new Moment(this.currentDate).format("MMDDYYYY") <=
    //     new Moment(date).format("MMDDYYYY")
    //   );
    // }
  },
  computed: {
    sortedEvents() {
    return this.events.sort(
        (a, b) =>
          new Date(a.acf.event_date) -
          new Date(b.acf.event_date)
      );
    
    },
    compareDate() {
      return this.sortedEvents.filter(item => 
        new Moment(this.currentDate).format("YYYY-MM-DD") <=
          new Moment(item.acf.event_date).format("YYYY-MM-DD")
      );
      
    }
  },

  mounted() {
    this.$API
      .getEvents()
      .then(data => {
        this.events = data.data;
        
        this.isLoaded = true;
      })
      .catch(error => {
        console.log(error);
      });

    this.$API.getFeaturedVideo().then(data => {
      this.featuredVideo = data.data[0].acf.featured_video;
    });
  }
};
</script>

<style scoped>
.events p {
  margin-bottom: 5px;
  color: #fff;
}
.event-timing {
  margin-top: 10px;
  font-size: 14px;
}
.details {
  font-size: 14px;
}
.card-body .row {
  border-bottom: 1px solid #cccc;
  margin-top: 15px;
}
.card-custom-header {
  padding: 10px;
  color: var(--rotary-gold);
  /* background: var(--azure); */
  /* background: #faa933; */
  /* background: #2ecc70; */
}
.date {
  text-align: center;
  background: #eee;
  padding: 10px 0;
  margin-top: 0px !important;
  font-weight: bold;
  font-size: 20px;
}

.designated-month {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
  padding: 6px 15px;
  color: #000;
}
/* .events p{
  color:#FAA72F;
} */

.month {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  padding: 2px 2px;
  text-align: center;
  /* background: var(--azure); */
  color: #fff;
}
.event-desc {
  font-size: 14px;
  font-weight: bold;
}
.event-desc p {
  line-height: 5px;
  color: #fff;
  font-weight: bold;
}

.event-title {
  font-size: 18px;
  color: #fff;

  /* font-weight: bold; */
}

.custom-card {
  /* background: var(--turq); */
  background: #025198;

  padding-bottom: 10px;
}

.card-custom-body {
}

.card-custom-body .row {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  margin-bottom: 20px;
  /* background: #f7a81b; */
  display: flex;
  align-items: center;
}

hr {
  border-color: #faa72f;
}

.read-more {
  color: var(--primary-red);
  border-bottom: 1px solid var(--primary-red);
  display: table;
}

.read-more a {
  color: var(--primary-red);
  text-decoration: none;
}

.no-padding {
  padding: 0px;
}
.no-marginLR {
  margin-left: 0;
  margin-right: 0;
}

.scrollbar {
  height: 650px;
  overflow: scroll;
}

#style-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

.events-icon {
  color: var(--rotary-gold) !important;
  font-size: 18px;
  min-width: 20px;
  text-align: center;
}
</style>


