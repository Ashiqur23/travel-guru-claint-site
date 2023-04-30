import React, { useRef, useEffect, useState } from "react";
import "./common.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ setImg }) => {
  const [cards, setCards] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [singleCard, setSingleCard] = useState();
  const navigate = useNavigate();

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
//   console.log(cards);
  const handleBooking =()=>{
    navigate('/login')
  }
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="text-white ">
        <h4>{singleCard?.title}</h4>
        <p style={{ width: "80%" }}>
          {singleCard?.description.slice(0, 200)}...
        </p>
        <button
        onClick={handleBooking}
          navigate="login"
          style={{ border: "none", borderRadius: "10px" }}
          className="bg-warning px-3 py-2"
        >
          Booking
          {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
        </button>
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
            <SwiperSlide onClick={() => handleCardDetails(card?.id)}>
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
