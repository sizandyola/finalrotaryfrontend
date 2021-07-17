<template>
  <div id="top" class="main">
    <Slider />
    <UpcommingEvents />
    <MessageFromChairman />



       <Blog2 />
    <RecentProjects />

 
  </div>
</template>

<script>
import RecentProjects from "../components/homepage/RecentProjects";
import MessageFromChairman from "../components/homepage/MessageFromChairman";
import Blog2 from "../components/homepage/Blog";
import Slider from "../components/homepage/Slider";
import UpcommingEvents from "./../components/homepage/UpcomingEvents";

export default {
  name: "HomePage",
  metaInfo: {
    title: "Home | Rotary Club of Kathmandu-Mid-Town",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content:
          "The Rotary Club of Kathmandu Mid-Town was chartered on the 8th of November 1989 with 26 members"
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  components: {
    RecentProjects,
    MessageFromChairman,
    Slider,
    Blog2,
    UpcommingEvents
  }
};
</script>

<style scoped>
</style>


