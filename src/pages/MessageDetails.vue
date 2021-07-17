<template>
<div class="container">
    <div class="message from mt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="message-image ">
              <img :src="msg.acf.image" class="img-fluid" />
            </div>

        
            </div>
            <div class="col-md-8">
                 
            <div class="">
            <div class="message-name">
              <h2>
                {{msg.title.rendered}}
              </h2>
              
            </div>
            <div class="message-title">
               {{msg.acf.designation}}
            </div>

            <div class="message" v-html="msg.acf.message" >
              
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
            msg:{}
        }
    },

    mounted(){
        let slug = this.$route.params.name;
         this.$API.getMessagesFromSlug(slug).then(data=>{
      
      this.msg = data.data[0];
      
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