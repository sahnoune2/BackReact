import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";

function About() {
  const demoContentRef = useRef(null);

  useEffect(() => {
    if (!demoContentRef.current) return;

    try {
      const fragment = document.createDocumentFragment();
      const gridWidth = 14; // Grid columns
      const gridHeight = 5; // Grid rows
      const totalElements = gridWidth * gridHeight; // 70 elements

      // Create grid elements
      for (let i = 0; i < totalElements; i++) {
        const demoEl = document.createElement("div");
        demoEl.classList.add("el");

        // Styling for visibility
        demoEl.style.width = "20px";
        demoEl.style.height = "20px";
        demoEl.style.background = `hsl(${(i * 5) % 360}, 70%, 50%)`; // Color variation
        demoEl.style.margin = "2px";

        fragment.appendChild(demoEl);
      }

      demoContentRef.current.innerHTML = "";
      demoContentRef.current.appendChild(fragment);

      // Apply the animation
      anime({
        targets: ".staggering-grid-demo .el",
        scale: [
          { value: 0.1, easing: "easeOutSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1200 },
        ],
        delay: anime.stagger(200, {
          grid: [gridWidth, gridHeight],
          from: "center",
        }),
        loop: true, // Optional: keeps it running
      });
    } catch (error) {
      console.error("Animation setup failed:", error);
    }

    return () => {
      if (demoContentRef.current) {
        demoContentRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                style={{ height: "340px", width: "280px" }}
                className="rounded-xl object-cover"
                src="https://olympicsa.co.za/wp-content/uploads/2024/02/01.Olympic-Bounce-Men-Blue-Feature-image-Side-A-1080px-x-1080px-jpg-600x600.webp"
                alt="about Us image"
              />
            </div>
            <img
              style={{ height: "340px", width: "280px" }}
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src="https://www.pigskinsandpigtails.com/wp-content/uploads/2024/06/blank-tshirt-storage-ideas.jpg"
              alt="about Us image"
            />
            {/* Animation Container */}
            <div className="w-full sm:col-span-2">
              <div
                ref={demoContentRef}
                className="staggering-grid-demo w-full flex flex-wrap gap-1 items-start"
              ></div>
            </div>
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Everything you need, come and shop
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  All categories, men, women, and children, from head to toe.
                  You won’t need to go to different shops; this is your one-stop
                  shop for everything, online.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    3300+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    products
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    7-10 h
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Fast delivery
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    5200+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Happy Clients
                  </h6>
                </div>
              </div>
            </div>
            <Link to={"/products"}>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Shop now
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .staggering-grid-demo {
          padding: 10px;
        }
        .staggering-grid-demo .el {
          position: relative;
          display: inline-block;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}

export default About;
