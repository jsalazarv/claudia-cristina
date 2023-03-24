<template>
  <div>
    <header
      class="site-header ha-header-1 absolute-header sticky-init fixed-header d-lg-block d-none"
      :class="{ 'sticky-header': isFixed }">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="main-navigation">
              <ul class="main-menu @@menuColor">
                <li class="menu-item has-children">
                  <NuxtLink :to="localePath('/')">{{
                    $t('menu.home')
                  }}</NuxtLink>
                </li>
                <li class="menu-item has-children">
                  <NuxtLink :to="localePath('/shop')">{{
                    $t('menu.shop')
                  }}</NuxtLink>
                </li>
                <li class="menu-item has-children">
                  <NuxtLink :to="localePath('/gallery')">{{
                    $t('menu.gallery')
                  }}</NuxtLink>
                </li>
                <li class="menu-item has-children">
                  <NuxtLink :to="localePath('/books')">{{
                    $t('menu.books')
                  }}</NuxtLink>
                </li>
                <li class="menu-item has-children">
                  <NuxtLink :to="localePath('/blog')">{{
                    $t('menu.blog')
                  }}</NuxtLink>
                </li>
                <li class="menu-item has-children">
                  <NuxtLink :to="localePath('/events')">{{
                    $t('menu.events')
                  }}</NuxtLink>
                </li>
                <li class="menu-item">
                  <NuxtLink :to="localePath('/contact')">{{
                    $t('menu.contact')
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-xl-3 offset-lg-1 offset-xl-0">
            <NuxtLink :to="localePath('/')">
              <img width="300" src="/images/logo-white.png" alt="" />
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-xl-4">
            <div class="header-top-widget">
              <ul class="header-links">
                <li class="sin-link">
                  <a href="#" class="search-trigger link-icon"
                    ><i class="ion-ios-search-strong"></i
                  ></a>
                </li>
                <li class="sin-link">
                  <NuxtLink
                    :to="localePath('/cart')"
                    class="cart-link link-icon">
                    <i class="ion-bag"></i>
                  </NuxtLink>
                  <div class="sin-dropdown cart-dropdown">
                    <div class="inner-single-block">
                      <div class="cart-product">
                        <div class="icon">
                          <img
                            src="image/products/home-1/cart-product-1.jpg"
                            alt="" />
                          <div class="product-badge-3">1x</div>
                        </div>
                        <div class="description">
                          <h4>Yuqidong Sudaderas</h4>
                          <span class="price">€500.00</span>
                          <ul class="attr-content">
                            <li><span>size :</span> S</li>
                            <li><span>color :</span> Beige</li>
                          </ul>
                        </div>
                        <a href="#" class="cart-item-cross">
                          <i class="fas fa-times"></i>
                        </a>
                      </div>
                    </div>
                    <div class="inner-single-block">
                      <ul class="cart-details">
                        <li>
                          <span class="label">{{
                            $t('menu.cart.subtotal')
                          }}</span>
                          <span class="value">€500.00</span>
                        </li>
                        <li>
                          <span class="label">{{
                            $t('menu.cart.shipping')
                          }}</span>
                          <span class="value">€7.00</span>
                        </li>
                        <li>
                          <span class="label">{{ $t('menu.cart.taxes') }}</span>
                          <span class="value">€0.00</span>
                        </li>
                        <li>
                          <span class="label">{{ $t('menu.cart.total') }}</span>
                          <span class="value">€507.00</span>
                        </li>
                      </ul>
                    </div>
                    <div class="inner-single-block">
                      <NuxtLink class="btn w-100" to="/checkout">
                        {{ $t('menu.cart.checkout') }}
                      </NuxtLink>
                    </div>
                  </div>
                </li>
                <li class="sin-link">
                  <a href="#" class="link-icon hamburgur-icon"
                    ><i class="ion-navicon"></i
                  ></a>
                  <div class="sin-dropdown option-dropdown">
                    <div class="inner-single-block">
                      <h4 class="option-title">
                        {{ $t('menu.submenu.language') }}
                        <i class="fas fa-angle-down"></i>
                      </h4>
                      <ul class="option-list">
                        <li>
                          <NuxtLink :to="switchLocalePath('en')">
                            {{ $t('menu.submenu.english') }}
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="switchLocalePath('es')">
                            {{ $t('menu.submenu.spanish') }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                    <div class="inner-single-block">
                      <h4 class="option-title">my account</h4>
                      <ul class="option-list">
                        <li>
                          <NuxtLink :to="localePath('/my-account')">
                            {{ $t('menu.submenu.myAccount') }}
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="localePath('/checkout')">
                            {{ $t('menu.submenu.checkout') }}
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="localePath('/auth')">
                            {{ $t('menu.submenu.signIin') }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>

              <div class="search-wrapper">
                <div class="search-wrapper-inner">
                  <div class="container">
                    <button class="search-dismiss">
                      <i class="fas fa-times"></i>
                    </button>
                    <form action="#">
                      <div class="search-box">
                        <input type="text" placeholder="Search Our catalog" />
                        <button class="search-button">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header class="mobile-header d-lg-none absolute-header">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-md-4 col-7">
            <NuxtLink :to="localePath('/')">
              <img width="300" src="/images/logo-white.png" alt="" />
            </NuxtLink>
          </div>
          <div class="col-md-8 col-5 text-right">
            <div class="mobile-header-btns header-top-widget">
              <ul class="header-links">
                <li class="sin-link">
                  <NuxtLink class="art-link link-icon" to="/cart">
                    <i class="ion-bag"></i>
                  </NuxtLink>
                </li>
                <li class="sin-link">
                  <a
                    href="#"
                    class="link-icon hamburgur-icon off-canvas-btn"
                    @click="handleAside">
                    <i class="ion-navicon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!--Off Canvas Navigation Start-->
    <aside class="off-canvas-wrapper" :class="{ open: isOpenAside }">
      <div class="btn-close-off-canvas" @click="handleAside">
        <i class="ion-android-close"></i>
      </div>
      <div class="off-canvas-inner">
        <!-- search box start -->
        <div class="search-box offcanvas">
          <form>
            <input type="text" placeholder="Search Here" />
            <button class="search-btn">
              <i class="ion-ios-search-strong"></i>
            </button>
          </form>
        </div>
        <!-- search box end -->
        <!-- mobile menu start -->
        <div class="mobile-navigation">
          <!-- mobile menu navigation start -->
          <nav class="off-canvas-nav">
            <ul class="mobile-menu">
              <li class="menu-item-has-children">
                <NuxtLink to="/">{{ $t('menu.home') }}</NuxtLink>
              </li>
              <li class="menu-item-has-children">
                <NuxtLink :to="localePath('/shop')">{{
                  $t('menu.shop')
                }}</NuxtLink>
              </li>
              <li class="menu-item-has-children">
                <NuxtLink :to="localePath('/gallery')">{{
                  $t('menu.gallery')
                }}</NuxtLink>
              </li>
              <li class="menu-item-has-children">
                <NuxtLink :to="localePath('/books')">{{
                  $t('menu.books')
                }}</NuxtLink>
              </li>
              <li class="menu-item-has-children">
                <NuxtLink :to="localePath('/blog')">{{
                  $t('menu.blog')
                }}</NuxtLink>
              </li>
              <li class="menu-item-has-children">
                <NuxtLink :to="localePath('/events')">{{
                  $t('menu.events')
                }}</NuxtLink>
              </li>
              <li class="menu-item-has-children">
                <NuxtLink :to="localePath('/contact')">{{
                  $t('menu.contact')
                }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <!-- mobile menu navigation end -->
        </div>
        <!-- mobile menu end -->
        <div class="off-canvas-bottom">
          <div class="contact-list mb--10">
            <!--<a href="" class="sin-contact"><i class="fas fa-mobile-alt"></i>(12345) 78790220</a>-->
            <a href="mailto: contacto@claudiacristina.art" class="sin-contact">
              <i class="fas fa-envelope"></i>
              contacto@claudiacristina.art
            </a>
          </div>
          <div class="header-social social-normal">
            <a
              target="_blank"
              href="https://www.facebook.com/claudiacristinamx"
              class="single-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/claudiacristinamx/?hl=es-la"
              class="single-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isFixed = ref(false);
const isOpenAside = ref(false);

const handleScroll = () => {
  isFixed.value = window.scrollY > 0;
};

const handleAside = () => {
  isOpenAside.value = !isOpenAside.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>
