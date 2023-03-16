<template>
  <div>
    <section class="hero-area section-margin">
      <div class="handart-slick-slider hero-slider" data-slick-setting='{
        "autoplay": true,
        "autoplaySpeed": 8000,
        "slidesToShow": 1,
        "arrows": true,
        "prevArrow":{"buttonClass": "slick-prev","iconClass":"ion-ios-arrow-left"},
        "nextArrow":{"buttonClass": "slick-next","iconClass":"ion-ios-arrow-right"}
    }'>
        <div class="single-slider hero-content bg-image"
             data-bg="image/bg-images/home-1/home-slider-image-1.jpg">
          <div class="container position-relative">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="icon">
                  <img src="image/icon/slider-icon-1.png" alt="">
                </div>
                <h1>Hand Made Product</h1>

                <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>

                <div class="slider-btn">
                  <a href="shop-grid.html" class="btn btn-outlined">Shop Now</a>
                </div>

              </div>
            </div>

          </div>
          <span class="herobanner-progress"></span>
        </div>
        <div class="single-slider hero-content bg-image"
             data-bg="image/bg-images/home-1/home-slider-image-2.jpg">
          <div class="container position-r
            elative">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="icon">
                  <img src="image/icon/slider-icon-2.png" alt="">
                </div>
                <h1>Sale Off Hand Made</h1>

                <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>

                <div class="slider-btn">
                  <a href="shop-grid.html" class="btn btn-outlined">Shop Now</a>
                </div>

              </div>
            </div>
          </div>
          <span class="herobanner-progress"></span>
        </div>
        <div class="single-slider hero-content bg-image"
             data-bg="image/bg-images/home-1/home-slider-image-2.jpg">
          <div class="container position-r
            elative">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="icon">
                  <img src="image/icon/slider-icon-3.png" alt="">
                </div>
                <h1>Home Decor Product</h1>

                <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>

                <div class="slider-btn">
                  <a href="shop-grid.html" class="btn btn-outlined">Shop Now</a>
                </div>

              </div>
            </div>
          </div>
          <span class="herobanner-progress"></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'public'
});
</script>

<style scoped>
</style>
