import React from "react";
import Image from "./Image";

const IMAGES = [
  "5.jpg",
  "6.jpg",
  "12.jpg",
  "14.jpg",
  "bowl.jpg"
];

const App = () => (
  <div className="container">
    <div className="row mt-2 mb-2">
      <div className="col-sm-12 text-center">
        {IMAGES.map(image => (
          <Image source={image} key={image} />
        ))}
      </div>
    </div>
  </div>
);

export default App;
