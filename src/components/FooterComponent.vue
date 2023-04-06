<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-12">
          <ul class="footer d-flex flex-wrap">
                    <nav-item
              v-for="link in links.other"
              :key="link.id"
              classItem="footer__item"
              :link="link.link"
              :text="link.text"
            />
          </ul>
        </div>
      </div>
      
    </div>
  </footer>
</template>
<script>
import NavItem from "./NavItem.vue";
export default {
  components: { NavItem },
  computed: {
    links() {
      return this.$store.getters["getFooterLinks"];
    },
  },
};
</script>
