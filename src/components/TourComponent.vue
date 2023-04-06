<template>
  <a @click="onEmit(tour.id)">
                <div class="item-wrapper d-flex flex-column mb-4">

                 
<img  :src="require(`@/assets/img/${tour.image}`)"
      :alt="tour.image.substring(0, tour.image.length - 4)" />

                    <h3 class="">{{tour.title}}</h3>
                    <div class="description">
                       {{tour.description | truncate(350)}}
                        <br>
                        <span>{{ ''|addMore }}</span>
                    </div>
                </div>
            </a>
</template>
<script>


export default {
 props: {
           tour: {
      type: Object,
      required: true,
    }
  },
   methods:{
    onEmit(id){
      this.$emit('onNavigate', id)
    }
  }
}
</script>
