<template>
  <div>
    <!-- TODO: Delete this section and replace it with the carousel -->
    <section class="hero-area section-margin" style="height: 100vh; background-color: #BCBCBC;">
     <div class="d-flex justify-content-center align-items-center h-100">
       <h1>{{ $t('home.carousel') }}</h1>
     </div>
    </section>
    <!-- ---------------------------------------------------------- -->

    <section class="section-margin welcome-section">
      <div class="container">
        <div class="row justify-content-center section-padding border-bottom">
          <div class="col-lg-8">
            <div class="welcome-content">
              <h6 class="title-xs">Who We Are</h6>
              <div class="section-title">
                <h2>Welcome To Handart</h2>
                <div class="title-sep">
                  <img src="/image/icon/title-sep-icon.png" alt="">
                </div>
              </div>
              <article class="welcome-description">
                <h4 class="sr-only">Welcome Article</h4>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                  consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue
                  duis
                  dolore te feugait nulla facilisi.</p>
              </article>
              <div class="author-block">
                <a href="#"> <span class="font-weight-mid text-black text-uppercase">Jhon doe</span> -
                  CEO Handart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="section-title">
          <h2>Featured Products</h2>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum
            formas.</p>
        </div>
        <div class="ha-custom-tab">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="shop-tab" data-toggle="tab" href="#shop" role="tab"
                 aria-controls="shop" aria-selected="true">
                <span class="icon"><img src="/image/icon/tab-nav-icon-1.png" alt=""></span>
                Shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="men-tab" data-toggle="tab" href="#men" role="tab"
                 aria-controls="men" aria-selected="true">
                <span class="icon"><img src="/image/icon/tab-nav-icon-2.png" alt=""></span>
                Men
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="woman-tab" data-toggle="tab" href="#woman" role="tab"
                 aria-controls="woman" aria-selected="false">
                <span class="icon"><img src="/image/icon/tab-nav-icon-3.png" alt=""></span>
                Women
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="elements-tab" data-toggle="tab" href="#elements" role="tab"
                 aria-controls="elements" aria-selected="false">
                <span class="icon"><img src="/image/icon/tab-nav-icon-4.png" alt=""></span>
                Elements
              </a>
            </li>
          </ul>
          <div class="tab-content space-db--30" id="myTabContent">
            <div class="tab-pane fade show active" id="shop" role="tabpanel" aria-labelledby="shop-tab">
              <div class="row">
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-1.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-2.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                      <span class="product-badge-2">-5%</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> zyfg men sweatshirts
                        casual ethnic
                        style pattern</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-3.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-4.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html">yuqidong sudaderas
                        hombre hip hop
                        zipper</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-5.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-6.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Inside Autumn Winter</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html">SexeMara Sweatshirts
                        Hoodies Male
                        Tracksuit</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-7.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-8.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> zengker winter
                        hooded with fat
                        thickening </a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-9.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-10.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-11.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-1.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-13.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-12.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-6.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-5.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="men" role="tabpanel" aria-labelledby="men-tab">
              <div class="row">
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-3.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-4.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html">yuqidong sudaderas
                        hombre hip hop
                        zipper</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-1.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-2.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> zyfg men sweatshirts
                        casual ethnic
                        style pattern</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-7.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-8.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> zengker winter
                        hooded with fat
                        thickening </a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-5.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-6.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Inside Autumn Winter</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html">SexeMara Sweatshirts
                        Hoodies Male
                        Tracksuit</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-11.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-1.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-9.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-10.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-6.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-5.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-13.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-12.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="tab-pane fade" id="woman" role="tabpanel" aria-labelledby="woman-tab">
              <div class="row">
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-1.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-2.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> zyfg men sweatshirts
                        casual ethnic
                        style pattern</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-3.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-4.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                      <span class="product-badge">new</span>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html">yuqidong sudaderas
                        hombre hip hop
                        zipper</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-9.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-10.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-5.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-6.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Inside Autumn Winter</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html">SexeMara Sweatshirts
                        Hoodies Male
                        Tracksuit</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-7.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-8.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> zengker winter
                        hooded with fat
                        thickening </a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-6.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-5.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-11.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-1.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-13.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-12.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="elements" role="tabpanel" aria-labelledby="elements-tab">
              <div class="row">
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-1.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-2.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> zyfg men sweatshirts
                        casual ethnic
                        style pattern</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-5.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-6.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Inside Autumn Winter</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html">SexeMara Sweatshirts
                        Hoodies Male
                        Tracksuit</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-6.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-5.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-7.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-8.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> zengker winter
                        hooded with fat
                        thickening </a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-9.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-10.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-11.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-1.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-13.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-12.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html"> Vantiorango PU
                        Patchwork Knitted
                        Plus</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb--30">
                  <div class="product-card">
                    <div class="image">
                      <img src="/image/products/home-1/product-3.jpg" alt="">
                      <div class="hover-content">
                        <a href="product-details.html" class="hover-image">
                          <img src="/image/products/home-1/product-4.jpg" alt="">
                        </a>

                        <div class="hover-btns">
                          <a href="cart.html" class="sin-btn"><i class="ion-bag"></i></a>
                          <a href="compare.html" class="sin-btn"><i
                              class="ion-android-options"></i></a>
                          <a href="javascript:" class="sin-btn" data-toggle="modal"
                             data-target="#quickModal"><i class="ion-android-open"></i></a>
                        </div>

                      </div>
                    </div>
                    <div class="description-block">
                      <div class="description-header">
                        <h5 class="description-tag"><a href="">Fashion Manufacturer</a></h5>
                        <div class="rating-block">
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline star_on"></span>
                          <span class="ion-android-star-outline"></span>
                          <span class="ion-android-star-outline"></span>
                        </div>
                      </div>
                      <h3 class="post-title"> <a href="product-details.html">yuqidong sudaderas
                        hombre hip hop
                        zipper</a></h3>

                      <p class="mb-0 price"><del class="price-old">€500.00</del> <span
                          class="price-new">€500.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- TODO: Delete this section and replace it with the carousel -->
    <section class="bg-image section-margin section-padding section-padding-top"
             data-bg="/image/bg-images/home-1/bg-testimonial.jpg" style="height: 50vh; background-color: #BCBCBC;">
      <div class="d-flex justify-content-center align-items-center h-100">
        <h1>CAROUSEL</h1>
      </div>
    </section>
    <!-- ---------------------------------------------------------- -->



    <section class="section-padding">
      <h2 class="sr-only">Promotion Imgaes</h2>
      <div class="container">
        <div class="row space-db--30">
          <div class="col-lg-6 mb--30">
            <a href="#" class="overflow-image">
              <img src="/image/others/promo-images.jpg" alt="">
            </a>
          </div>
          <div class="col-lg-6 mb--30">
            <a href="#" class="overflow-image">
              <img src="/image/others/promo-images-2.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-margin">
      <h2 class="sr-only">Method section</h2>
      <div class="container">
        <div class="row  border-bottom section-padding space-dt--30">
          <div class="col-md-4 col-sm-6 mt--30">
            <div class="method-card">
              <div class="icon">
                <img src="/image/icon/method-icon-1.png" alt="">
              </div>
              <article class="text">
                <h3 class="method-title"><a href="#">FREE SHIPPING WORLDWIDE</a></h3>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram</p>
              </article>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mt--30">
            <div class="method-card">
              <div class="icon">
                <img src="/image/icon/method-icon-2.png" alt="">
              </div>
              <article class="text">
                <h3 class="method-title"><a href="#">MONEY BACK GUARANTEE</a></h3>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram</p>
              </article>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mt--30">
            <div class="method-card">
              <div class="icon">
                <img src="/image/icon/method-icon-3.png" alt="">
              </div>
              <article class="text">
                <h3 class="method-title"><a href="#">ONLINE SUPPORT 24/7</a></h3>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container">
        <div class="section-title mb--25">
          <h2>Latest Blog</h2>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum
            formas.</p>
        </div>
        <div class="row ">
          <div class="col-lg-4 col-md-6 mt--30">
            <div class="blog-card">
              <a href="/image/others/blog-card-1.jpg" data-fancybox class="blog-image">
                <img src="/image/others/blog-card-1.jpg" alt="">
                <div class="date-badge">
									<span class="month">
										august
									</span>
                  <h5>16</h5>
                </div>
                <div class="plus-icon">
                  <i class="fas fa-plus-circle"></i>
                </div>
              </a>
              <div class="text">
                <h3 class="blog-title"><a href="blog-details.html">5 Disadvantages Of Handcraft</a></h3>
                <span class="post-meta"><i class="fas fa-user"></i>Demo Handart</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys standard
                  dummy text ever since the ...</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt--30">
            <div class="blog-card">
              <a href="/image/others/blog-card-1.jpg" data-fancybox class="blog-image">
                <img src="/image/others/blog-card-1.jpg" alt="">
                <div class="date-badge">
									<span class="month">
										august
									</span>
                  <h5>16</h5>
                </div>
                <div class="plus-icon">
                  <i class="fas fa-plus-circle"></i>
                </div>
              </a>
              <div class="text">
                <h3 class="blog-title"><a href="blog-details--gallery-format.html">How You Can
                  Workaround Handcraft</a></h3>
                <span class="post-meta"><i class="fas fa-user"></i>Demo Handart</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys standard
                  dummy text ever since the ...</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt--30">
            <div class="blog-card">
              <a href="/image/others/blog-card-slider-3.jpg" data-fancybox class="blog-image">
                <img src="/image/others/blog-card-slider-3.jpg" alt="">
                <div class="date-badge">
									<span class="month">
										august
									</span>
                  <h5>16</h5>
                </div>
                <div class="plus-icon">
                  <i class="fas fa-plus-circle"></i>
                </div>
              </a>
              <div class="text">
                <h3 class="blog-title"><a href="blog-details.html">7 Awesome Things You Can Learn</a>
                </h3>
                <span class="post-meta"><i class="fas fa-user"></i>Demo Handart</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys
                  standard
                  dummy text ever since the ...</p>
              </div>
            </div>
          </div>
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
