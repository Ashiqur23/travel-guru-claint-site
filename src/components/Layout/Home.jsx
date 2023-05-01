import React, { useRef, useEffect, useState } from "react";
import "./common.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

import { Link, useNavigate } from "react-router-dom";

const Home = ({ setImg }) => {
  const [cards, setCards] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [singleCard, setSingleCard] = useState({});
//   const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://travel-guru-server-site.vercel.app/card`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setSingleCard(data[0]);
      });
  }, []);
  const handleCardDetails = (id) => {
    fetch(`https://travel-guru-server-site.vercel.app/card/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleCard(data));
  };
  return (
    <div
      className="d-lg-flex justify-content-between align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="text-white ">
        <h1>{singleCard?.title}</h1>
        <p style={{ width: "80%" }}>
          {singleCard?.description?.slice(0, 200)}...
        </p>
        <Link to={`/place/${singleCard.id}`}>
          <button
            // onClick={handleBooking}
            style={{ border: "none", borderRadius: "10px" }}
            className="bg-warning px-3 py-2"
          >
            Booking
            {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
          </button>
        </Link>
      </div>
      <div className="w-50">
        <Swiper
          onSwiper={() => setSwiperRef()} //{(swiper) => console.log(swiper)}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {cards.map((card) => (
            <SwiperSlide onClick={() => handleCardDetails(card?.id)} key={card.id}>
              <h1>{card?.title}</h1>
              <img
                onClick={() => setImg(card?.image)}
                className="slider-img"
                src={card?.image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;