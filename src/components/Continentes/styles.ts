import styled from 'styled-components'

export const Swiper = styled.div`

.swiper {
  width: 100%;
  height: 32rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.55);
}

.swiper-button-next, .swiper-button-prev {
  color: #FFBA08;
  margin-left: 1rem;
  margin-right: 1rem;
  opacity: 0.99;
}

.swiper-pagination-bullet {
  background: #999999;
  opacity: 0.99;
  width: 12px;
  height: 12px;
}

.swiper-pagination-bullet-active {
  background: #FFBA08;
}

`