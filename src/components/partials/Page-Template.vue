<template>
  <div class="page-template">	
    <div v-if="allPagesLoaded">
      <b-container v-html="currentPage.content.rendered">
      <!-- Content here -->
      </b-container>
    </div>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
    	allPagesLoaded: 'allPagesLoaded',
    	onepage: 'onepage'

    }),
    currentPage: {
        get () {
           let _id = this.$route.params.page_id;
           return this.$store.getters.onepage(_id)
        }
    }
  }


}
</script>
<style lang="scss" scoped>
.page-template {
  margin-top: 20vh;
}


</style>