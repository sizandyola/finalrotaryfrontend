<template>
  <div style="background:#f4f4f4 pb-3">
    <div class="container pt-4" id="top">
      <h1 class="text-left">Community Projects</h1>
      <hr class="my-4" />

      

    

      <div class="custom-card">
        <div class="row align-items-center">
          <div class="col-md-12">
            <!-- <h4 class="p-1">Spouses’ Project – Mata Tirtha Old Age Home</h4> -->
            <div class="row p-0">
              <div class="col-md-4">
                <img src="/images/our-projects/Mata Tirtha-1.jpg" class="img-fluid" />
                <img src="/images/our-projects/Martha Tirtha-2.jpg" class="img-fluid mt-3" />
              </div>
              <div class="col-md-8">
                <h4 class="p-1">Spouses’ Project – Mata Tirtha Old Age Home</h4>
                <p class="text-justify p-3">
                 Rotary Club of Kathmandu Midtown and the Spouses’ Joint Project – Matatirtha Old Age Home Year 2019/2020 <br>
Rotary Club Kathmandu Midtown along with the spouses’ team, is eager to make a
difference through this latest project of Matatirtha Old Age Home. It is a community
supported, grass roots level initiative, that has been operating for over twenty years.
The management team has rescued abandoned elder women from the streets of Nepal
and provided them long-term safe home along with food and shelter. They operate on a
very meagre budget. We hope to make a difference by helping them become more
sustainable and by bringing some positive and much-needed change.  <br>
This year, our
Club members in collaboration with spouses, have supported the Matatirtha Old Age
Home based on their needs and request in certain critical areas. Several members
have contributed in cash and kind. With the funds raised we have placed a help who
now looks after the Aamas. Eleven housekeeping students from Silver Mountain School
of Hotel Management, organized an event to clean the home and also teach the
caretaker how to properly utilize the cleaning material.  <br>
Daya Foundation, a non profit
organization offered to provide a free heath camp for these seniors in coordination with
Chhatrapati Free Clinic (CFC). A team of 12 medical personnel from CFC conducted
ENT and whole-body checkup for all the Aamas and the community people. One
member from RCKMT provided curtains and yet another has generously offered to help
with the construction of much-needed toilets. We look forward to seeing these elderly
ladies enjoy certain comfort and care and live with some dignity, good health and
convenience.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- YouthVocationalSkills -->
      <YouthVocationalSkills />

       <div class="custom-card">
        <div class="row align-items-center">
          <div class="col-md-12">
            <!-- <h4 class="p-1">Spouses’ Project – Mata Tirtha Old Age Home</h4> -->
             <h4 class="p-1">Care for Cerebral Palsy Children</h4>
            <div class="row p-0">
              <div class="col-md-4">
                <img src="/images/our-projects/cerebral.jpg" class="img-fluid mt-4" />
              </div>
              <div class="col-md-8">
               
                <p class="text-justify p-3">
              For more than two decades the Rotary and Rotract Clubs of Kathmandu Mid-Town have worked with the Self Help Group of Cerebral Palsy (SGCP) in Dhapakhel, Lalitpur (not far from Nepal’s capital in Kathmandu) and with the affiliated Chitrapur Day Care Center for Cerebral Palsy Children through Mid-Town Past President Dr Chandra Lekha Tuladhar. The SGCP center houses some children with residential care and provides them with the physiotherapy that they need as well, offers services for the neighboring community as well as more distant areas through its outreach program. At its headquarters in Dhapakhel, the SGCP welcomes parents and affected children from remote areas and gives them much-needed awareness training and counseling. The practical advice that they receive helps them to deal with day-to-day situations back in their villages so that children can grow up in their own communities. The Chitrapur center provides much-needed day care facilities for these children. <br>

                </p>
              </div>
            </div>
            Recently, a former member and his club of RC Capitol Hill Washington DC, provided the Chitrapur Day Care Center with some essentials such as special tables and chairs standing frame , gym ball, notice boards, wheel chair, blankets, rice cooker, food warming containers, and the like. See photo below.  <br>

Please reach out to us at <router-link to="/contact-us/contact-information">‘Contact Us’</router-link>  if you would like to visit the Center or make a donation. <br> <br>
<button class="btn btn-info">
 <router-link :to="{name:'Looking For Funding',hash:'#care-for-cerebral'}" class="text-white">Looking For Funding</router-link>
 </button>
          </div>
        </div>
      </div>

      <!-- Digital library -->
      <!-- <DigitalLibrary /> -->
        <div class="custom-card">
        <div class="row">
          <div class="col-md-4">
            <img src="/images/our-projects/gift-of-sight.jpg" class="img-fluid" alt />
          </div>

          <div class="col-md-8">
            <h4 class="p-1">Gift of Sight Eye Camp</h4>
            <p class="text-justify p-3">
              Gift of Sight Eye Camp is an ongoing project conducted every year with the help of the Rotary Club of Singapore Garden City, Singapore in collaboration with the Tilganga Institute of Ophthalmology in Hetauda. This project annually brings a few hundred villagers from remote areas to the eye hospital for cataract surgery and eye care. To date, thousands of poor people have received the ‘gift of sight’ thanks to this generous donation.
              <br />
              <b>See Previous Years</b>
              <br />
              <br />
              <a
                class="gift-of-sight"
                href="/images/our-projects/Gift of Sight 2014.pdf"
                taget="_blank"
              >Gift Of Sight 2014</a>
              &nbsp;
              <a
                class="gift-of-sight"
                href="/images/our-projects/Gift of Sight 2015.pdf"
                taget="_blank"
              >Gift Of Sight 2015</a>
              &nbsp;
              <a
                class="gift-of-sight"
                href="/images/our-projects/Gift of Sight 2016.pdf"
                taget="_blank"
              >Gift Of Sight 2016</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import DigitalLibrary from "./DigitalLibrary";

import YouthVocationalSkills from "./YouthVocationalSkills";

export default {
  components: {
    DigitalLibrary,
    YouthVocationalSkills
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.logo {
  width: 150px;
}
.how-section1 {
  /* margin-top: -15%;
  padding: 10%; */
}
.how-section1 h4 {
  /* color: #019fcb;
  font-weight: bold;
  font-size: 20px; */
}
.how-section1 .subheading {
  color: #3931af;
  font-size: 20px;
}
.how-section1 .row {
  margin-top: 6%;
}

.custom-card {
  margin-top: 20px;
  padding: 15px 15px;
  background: #fff;
}

.custom-card-text {
  /* padding: 10px 20px; */
}
.row .col-md-4 img {
  width: 100%;
  margin-bottom: 12px;
}
.gift-of-sight {
  padding: 7px;
  border-color: darkblue;
  border: 0.5px solid;
  border-radius: 5px;
  color: darkblue;
  margin-right: 8px;
}
.gift-of-sight:hover {
  background-color: darkblue;
  color: #fff;
  border-color: darkblue;
  text-decoration: none;
}
hr {
  background-color: #faa72f;
}
@media only screen and (max-width: 768px) {
  .gift-of-sight {
    display: block;
    text-align: center;
    padding: 5px;
  }
}
@media only screen and (max-width: 1004px) {
  .gift-of-sight {
    display: block;
    text-align: center;
    padding: 7px;
  }
}

.btn-info{
background-color: #025198;
}
</style>


