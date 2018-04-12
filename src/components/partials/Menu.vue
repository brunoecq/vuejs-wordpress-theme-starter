<template>
 <div>
    <div v-if="allPagesLoaded">
      <router-link v-for="page in allPages" :to="{ name: 'Page-Template', params: { page_id: page.id }}" :key="page.id">{{ page.title.rendered }}</router-link>
    </div>
    <div v-else>
      Loading...
    </div>
 </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  
  computed: {
    ...mapGetters({
 		allPagesLoaded: 'allPagesLoaded',
 		allPages: 'allPages',
    })
  }
}
</script>