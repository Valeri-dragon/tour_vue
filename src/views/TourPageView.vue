<template>
  <div class="wrapper mt-5">
  <div class="container ">
      <div class="col">
            <nav-bar-component />
          </div>
      <div class="col-lg-10 offset-1">
      <img  :src="require(`@/assets/img/${tour.image}`)"
      :alt="tour.image.substring(0, tour.image.length - 4)" />
          <h2>{{ tour.title }}</h2>
          <div class="description">
             {{tour.description}}
          </div>
      </div>
      
  </div>
   <footer-component />
   </div>
   
</template>
<script>


export default {
  computed: {
    pageName() {
      return this.$route.name;
    },
        tour() {
      return this.$store.getters["getToursById"](this.$route.params.id)
         },
  },
};
</script>