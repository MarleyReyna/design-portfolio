import React, { useEffect, useState } from "react";
import "./Main.scss";

const Main = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const gallery = document.getElementById("gallery");

    if (slide > 2) {
      setSlide((c) => c - 1);
      return;
    } else if (slide < -2) {
      setSlide((c) => c + 1);
      return;
    }

    if (slide < 0) {
      gallery.style.transform = "translateX(" + (Math.abs(slide) * 20 + "%)");
    } else {
      gallery.style.transform = "translateX(" + (Math.abs(slide) * -20 + "%)");
    }
  }, [slide]);

  return (
    <main>
      <section className="amy-intro">
        <img src={"/assets/image-amy.webp"} alt="Amy" />
        <div className="text-container">
          <h3>I’m Amy, and I’d love to work on your next project</h3>
          <p>
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <button className="consultation">Free Consultation</button>
        </div>
      </section>
      <section className="my-work">
        <h4>My Work</h4>
        <div className="gallery" id="gallery">
          <img src={"/assets/image-slide-1.jpg"} alt="3D logo fading" />
          <img
            src={"/assets/image-slide-2.jpg"}
            alt="Geometric patter graphic"
          />
          <img
            src={"/assets/image-slide-3.jpg"}
            alt="Newspaper with design in background"
          />
          <img
            src={"/assets/image-slide-4.jpg"}
            alt="Graphic design book on vinyls"
          />
          <img
            src={"/assets/image-slide-5.jpg"}
            alt="UI/UX design on smartphone"
          />
        </div>
        <div className="slide-buttons">
          <button onClick={() => setSlide((c) => c - 1)}>
            <img src={"/assets/icon-arrow-left.svg"} alt="" />
          </button>
          <button onClick={() => setSlide((c) => c + 1)}>
            <img src={"/assets/icon-arrow-right.svg"} alt="" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
