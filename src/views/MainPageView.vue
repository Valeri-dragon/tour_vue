<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="col">
            <nav-bar-component />
          </div>
        <div class="grid d-flex justify-content-between flex-wrap">
                <tour-component
                v-for="tour in tours"
                :key="tour.id"
                 :tour="tour"
                 @onNavigate="navigate"
                            />
        </div>
    </div>
      <footer-component />
</div>
</template>
<script>
import TourComponent from '@/components/TourComponent.vue';


export default{
    components:{TourComponent},
     data(){
return{
  name: 'tour'
}
  },
   computed: {
    tours() {
      return this.$store.getters["getTours"];
    },
  },
   methods: {
    navigate(id) {
      this.$router.push({
        name: this.name,
        params: {
          id: id,
        },
      });
    },
  },
}
</script>
