import React from "react";
// import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Centerpage = () => {
  // const images = [900, 800, 700].map((size) => ({
  //   // src: `https://placedog.net/${size}/${size}`,
  //   src: "./src/pictures/picture1.jpeg",
  //   thumbnail: "/picture1.jpeg",
  // }));
  return (
    <div>
      {/* <Carousel images={images} /> */}
      <div class="grid grid-cols-2 gap-2">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="./picture1.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="./picture2.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="./picture3.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="./picture5.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Centerpage;
