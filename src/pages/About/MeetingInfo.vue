<template>
  <div class="meeetingInfo">
    <div class="container">
      <h1 class="text-left">Meeting Information</h1>

      <table class="table table-center col-md-8">
        <tr>
          <td>Official Name</td>
          <td>Rotary Club of Kathmandu Mid-Town</td>
          <!--  -->
        </tr>
        <tr>
          <td>Logo</td>
          <td>
            <img src="/images/midtown-logo.jpg" alt />
          </td>
        </tr>

        <tr>
          <td>RI District</td>
          <td>3292 Nepal-Bhutan</td>
        </tr>
        <tr>
          <td>RI Club ID</td>
          <td>26776</td>
        </tr>
        <tr>
          <td>Language</td>
          <td>English</td>
        </tr>
        <tr>
          <td>Weekly Meeting</td>
          <td>Please check the calendar on our home page for the latest meeting information.</td>
        </tr>
        <tr>
          <td>Web page</td>
          <td>
            <a href="https://rotarymidtown.org.np/#/">https://rotarymidtown.org.np/#/</a>
          </td>
        </tr>
        <tr>
          <td>Meeting location</td>
          <td v-html="$store.state.site_details.meeting_hours"></td>
          <!-- <td>Hotel de l’Annapurna, Durbar Marg</td> -->
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetingInfo",
  metaInfo: {
    title: "Meeting Information",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content:
          "Every Friday morning meet at 7:30AM for breakfast and fellowship. The meeting proper runs from 8 to 9 AM, followed by more breakfast and fellowship."
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
</script>


<style scoped>
.table {
  border: 0 !important;
}

tr > :first-child {
  font-weight: bold;
  width: 250px;
  /* border-bottom-color:#FAA72F; */
}
tr {
}
hr {
  background-color: #025198;
}
a {
  color: #025198;
}
</style>