<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide" class="carousel-img"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://images.pexels.com/photos/70362/oil-monahans-texas-sunset-70362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      ></b-carousel-slide>

       <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
        <h1>Hello world!</h1>
      </b-carousel-slide>


    </b-carousel>

  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style lang="scss">

#carousel1{
  margin-bottom:5vh;  
}
.carousel-img {
  height: 96vh !important;;
}
</style>
<!-- carousel.vue -->