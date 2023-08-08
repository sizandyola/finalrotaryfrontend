<template>
  <div style="background:#f4f4f4" class="pb-3">
    <div class="container pt-4" id="top">
      <h1 class="text-left">Global Grants</h1>
      <hr class="my-4" />

        <p id="snakebite"></p>
       <div class="custom-card container">
        <h4 class="p-3">Ongoing Global Grant: Snakebite Prevention and Awareness Project</h4>
         
        <div class="row align-items-center">
          <div class="col-md-4 text-center">
            <img src="/images/our-projects/snakebite.jpg" class="img-fluid snakebite" />
          </div>
          <div class="col-md-8">
             <h5 class="text-justify pl-2">
              <i>"A Nepal where no one dies from snakebite"</i>
            </h5>
            <p>
              Snakebite is one of the most neglected public health issues in rural Nepal.  Estimates show that every year at least 40,000 people are bitten (due to lack of awareness) and some 1000 die (from inadequate medical care). Not only do rural communities lack awareness on how to prevent and treat snakebite, but they also lack a political voice as evinced by the fact that snakebite has been severely neglected by both international and national policy-makers and donors, the pharmaceutical industry, the media, and academia. To date, there has not been any concerted, coordinated effort to eradicate this problem in Nepal. 
              <br>
              See more information at  <a
                href="http://snakebitenepal.org/"
                target="_blank"
              >
                <b>snakebitenepal.org</b>
              </a> 


            </p>
        
        
          </div>
        </div>
        <p class="text-justify mt-2">
          The recently awarded GG2099153 will help to reduce mortality and morbidity caused by snakebite in Nepal by promoting prevention through public awareness. It will inform that portion of the population who is most at risk to the dangers of snakebite by sharing information on awareness, prevention, and first-aid through a four-year, country-wide, multi-media campaign. In addition, since each public service announcement will carry the Rotary logo, this country-wide campaign will enhance Rotary’s public image as an organization dedicated to serving the country. This Global Grant will roll out in early 2021 and will deploy a coordinated ‘media package’ (in five local languages) that targets Nepal’s most vulnerable through radio, social media, app, posters, street theatre, web page and the like.
We are happy to acknowledge our partners: The Rotary Club of Salt Lake City, RID 5420 USA, RID 3722 & RID 3510 S. Korea, RC Higashiosaka-Nishi Japan, and the BP Koirala Institute of Health Sciences, Dharan, NEPAL.
        </p>
      </div>

      <p id="education-support"></p>
      <div class="custom-card">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h4 class="p-3">Ongoing Global Grant: Early Years Education Support Project in Nuwakot and Sindulpalchowk</h4>

            <p class="text-justify p-3">
              <img
                v-lazy="'/images/our-projects/first-steps-logo.png'"
                class="img-fluid float-left logo mr-3"
              />
              Early years Education Support Project, Sindhupalchok, Nepal, (Global Grant 1979704) in collaboration with RC Ellon, District 1010, Scotland. Schools in Sindhupalchok and Nuwakot areas of rural Nepal will be supported to improve learning in 13 classrooms in selected schools. The program will support schools that have shown willingness to change and are most in need. The grant will support upgrading the standard of the schools in terms of physical environment, teaching and the quality of education. Teachers will be given support and training to adopt modern child friendly learning methods and to take ownership and responsibility for the school environment.
              The project is implemented through our partners at First Steps Himalaya. First Steps Himalaya—Giving children a childhood in the rural Himalaya.
              <a
                href="/images/our-projects/Global Grant First Steps.pdf"
                target="_blank"
              >See Detailed Report</a>
            </p>
            <p></p>
          </div>
          <div class="col-md-4 text-center">
            <img src="/images/our-projects/first-steps.jpg" class="img-fluid" />
          </div>
        </div>
      </div>

      <p id="simpani-gairigaon"></p>
      <div class="custom-card">
        <div class="row">
          <div class="col-md-4 text-center">
            <img src="/images/our-projects/simpani-gairigaon-closure.jpg" class="img-fluid" />
          </div>
          <div class="col-md-8">
            <h4
              class="p-3"
            >Recently Closed: Simpani Gairigaon Lift Water Supply for Drinking and Sanitation (GG1754006) in collaboration with Masan-East Rotary Club (S Korea)</h4>

            <p
              class="text-justify p-3"
            >These villagers lost their water supply when natural springs dried up because of the 2015 earthquake. More than 30 families in the village of Simapani (Dhading) are now benefiting from this new water system. This project has helped to keep the community together by redirecting water to their village so that they do not need to relocate.
            
            <br> <br>
            <router-link to="/our-projects/global-grants/simpani-gairigaon">Read More</router-link>
            </p>
            
          </div>
        </div>
      </div>

     



      <p id="hearing-loss"></p>
      <div class="custom-card">
        <div class="row">
          <div class="col-md-8">
            <h4
              class="p-3"
            >Recently Closed: Preventing Hearing Loss Among Nepalese Children (GG1637950)</h4>

            <p class="text-justify">
              <img
                src="/images/our-projects/hearing-loss-logo.jpg"
                class="float-left logo mr-3 p-3"
                alt
              />
              This year with the help of the Rotary Club of Potomac-Bethesda, RID 7620, USA, we helped to preventing hearing loss among Nepalese children by providing auditory screening and surgical equipment, by screening children for correctible ear problems, by providing ear surgery for children and by promoting increased awareness and prevention.
            </p>
            
          </div>
          <div class="col-md-4 text-center">
            <img src="/images/our-projects/hearing-loss-project.jpg" class="img-fluid" />
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
      projects: [
        {
          title: "Gift of Sight Eye Camp",
          description: "",
          image: ""
        }
      ]
    };
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
  padding: 15px 15px;
  background: #fff;
}

.custom-card-text {
  /* padding: 10px 20px; */
}
.col-md-8 p a {
  color: #025198;
}
.col-md-8 p a:hover {
 text-decoration-color: #FAA72F;
}
hr{
  background-color: #FAA72F;
}
</style>


