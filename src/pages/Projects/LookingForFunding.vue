<template>
  <div>
    <h1 class="text-left container pt-3">Looking For Funding</h1>
    <hr class="my-4 container" />

    <NavikaranOrphanage />

<!--  -->
  <div class="container p-2" id="vocational-training">
    <div class="custom-card">
      <div class="row ">
        <div class="col-md-4 text-center">
          <img src="/images/our-projects/Vocational Jan 2020.jpg" class="img-fluid mt-4" alt />
        </div>
        <div class="col-md-8 ">
          <h4>Youth Vocational/Leadership Skills Development</h4>

          <p class="text-justify">
             The Rotary Club of KTM Mid-town has been focusing on skills
            development and vocational training for youth from various walks of
            life – few colleges, Rotaracts and entrepreneurs. The objective is
            to help develop their skills and equip them with various skill sets
            that they can apply in the practical field. This initiative started
            last year. To continue this training, we have a team of qualified
            and experienced resource persons from various professional
            backgrounds both from local and international fields. The workshop
            and training sessions will focus on critical topics pertinent to
            youth. These topics were selected after several meetings with the
            colleges and other institutions working for youth welfare. We are
            creating a committee to take this initiative forward. We will be
            collaborating with the following institutions: Silver Mountain
            School of Hotel Management, Xavier Academy, Daya Foundation, and
            Kathmandu Engineering College. Majority of the resource persons are
            from our own club, the Rotary District and other Rotaries. Some of
            the institutions that have and will be providing the training and
            resources are –Nepal Ambulance Services, Nepal Entrepreneurs HUB,
            Toastmasters Club.
          </p>
          <button class="btn btn-info container">
            <a href="#">LOOKING FOR FUNDING</a>
          </button>
        </div>
      </div>
    </div>
  </div>

<p id="care-for-cerebral"></p>
    <div class="container">
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

Please reach out to us at <router-link to="/contact-us/contact-information">‘Contact Us’</router-link>  if you would like to visit the Center or make a donation.
  <button class="btn btn-info container mt-2">
            <a href="#">LOOKING FOR FUNDING</a>
          </button>
          </div>
        </div>
      </div>
    </div>
<!--  -->

  </div>
</template>


<script>
import NavikaranOrphanage from "./NavakiranOrphanage";
export default {
  components: {
    NavikaranOrphanage,
  }
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
  /* margin-bottom: 15px; */
  padding: 15px 15px;
  background: #fff;
}

.custom-card-text {
  /* padding: 10px 20px; */
}
button {
  /* margin-top: 8px; */
  border-radius: 10px;
  margin-bottom: 20px;
  /* margin-left: 10px; */
}
button a {
  color: #fff;
  text-decoration: none;
}
.snakebite {
  border-radius: 12px;
}
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
  /* margin-top: 5px; */
  padding: 15px 15px;
  background: #fff;
}

.custom-card-text {
  /* padding: 10px 20px; */
}

.list {
  font-weight: bold;
  font-size: 14px;
}
button {
  /* margin-top: 8px; */
  border-radius: 10px;
  margin-bottom: 20px;
  /* margin-left: 10px; */
}
button a {
  color: #fff;
  text-decoration: none;
}
.btn-info{
background-color: #025198;
}
hr{
background-color: #FAA72F;
}
</style>