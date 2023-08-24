<template>
<div class="container">
    <div class="message from mt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="message-image ">
                  <img :src="domain+ msg.image[0].url" class="img-fluid" />
            </div>

        
            </div>
            <div class="col-md-8">
                 
            <div class="">
            <div class="message-name">
              <h2>
                {{msg.name}}
              </h2>
              
            </div>
            <div class="message-title">
               {{msg.designation}}
            </div>

            <div class="message" v-html="msg.message" >
              
            </div>
            </div>
            
        </div>
    </div>
    </div>
</div>
</template>


<script>
export default {
    data(){
        return{
          domain: process.env.VUE_APP_DOMAIN,
            msg:{}
        }
    },

    mounted(){
        let slug = this.$route.params.id;
         this.$API.getMessagesFromId(slug).then(data=>{
      
      this.msg = data.data.data;
      
    }).catch(error=>{
      console.log(error);
    })
    }
}
</script>


<style scoped>
.message-image{
    min-height: 300px;
    width: 100%;
}

.message-image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.message-title{
  font-weight: bold;
  margin-bottom: 10px;
}
</style>