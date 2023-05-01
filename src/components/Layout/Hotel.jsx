import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import start from "./../../assets/IMG/icons/star_1_.png";

const Hotel = () => {
  const [categories, setCategories] = useState([]);
  const [CardData, setCardData] = useState("");
  const categoryData = useLoaderData();
  const id = useParams();
  console.log(id.id);
  //   console.log(categoryData);
  useEffect(() => {
    const singleCategories = categoryData.filter(
      (c) => c.categories_id == id.id
    );
    setCategories(singleCategories);
    console.log(singleCategories);

    fetch(`https://travel-guru-server-site.vercel.app/card/${id.id}`)
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  return (
    <div className="container h-auto ">
      <div className="" >
        <div style={{ height: "100Vh" }} className=" d-flex flex-column justify-content-center align-items-start">
          <div>
            <p className="text-black-50 m-0">252 stays Apr 13-17 3 guests</p>
            <h5>Stay in {CardData?.title}</h5>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-50">
              {categories.map((category) => (
                <div key={category?.id}>
                  <div className="my-4">
                    <div className="d-lg-flex">
                      <div>
                        <img
                          style={{ width: "300px" }}
                          src={category?.image_viewer}
                          alt=""
                        />
                      </div>
                      <div className="ms-lg-3 d-flex flex-column justify-content-between" style={{ position: "relative" }}>
                        <div>
                          <h6>{category?.title}</h6>
                          <p>{category?.description}</p>
                        </div>
                        <div className="d-flex justify-content-between align-content-center">
                          <div className="d-flex">
                            <img
                              style={{ width: "20px", height: "20px" }}
                              src={start}
                              alt=""
                            />
                            <span className="m-0">{category?.ratings}</span>
                          </div>
                          <div>
                            <h5>
                              ${category?.amount}/
                              <span
                                className="text-black-50"
                                style={{ fontWeight: "400", fontSize: "18px" }}
                              >
                                night{" "}
                              </span>
                              <span
                                className="text-black-50"
                                style={{ fontWeight: "400", fontSize: "18px" }}
                              >
                                {" "}
                                $167 total
                              </span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-50">1000000000000000000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
