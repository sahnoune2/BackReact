



import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";

export const Hero = () => {
  const demoContentRef = useRef(null);

  const easingNames = [
    "easeInQuad",
    "easeInCubic",
    "easeInQuart",
    "easeInQuint",
    "easeInSine",
    "easeInExpo",
    "easeInCirc",
    "easeInBack",
    "easeOutQuad",
    "easeOutCubic",
    "easeOutQuart",
    "easeOutQuint",
    "easeOutSine",
    "easeOutExpo",
    "easeOutCirc",
    "easeOutBack",
    "easeInBounce",
    "easeInOutQuad",
    "easeInOutCubic",
    "easeInOutQuart",
    "easeInOutQuint",
    "easeInOutSine",
    "easeInOutExpo",
    "easeInOutCirc",
    "easeInOutBack",
    "easeInOutBounce",
    "easeOutBounce",
    "easeOutInQuad",
    "easeOutInCubic",
    "easeOutInQuart",
    "easeOutInQuint",
    "easeOutInSine",
    "easeOutInExpo",
    "easeOutInCirc",
    "easeOutInBack",
    "easeOutInBounce",
  ];

  useEffect(() => {
    if (!demoContentRef.current) return;

    try {
      const fragment = document.createDocumentFragment();

      easingNames.forEach((easing, index) => {
        const demoEl = document.createElement("div");
        demoEl.classList.add("el", "square", "stretched", `easing-${easing}`);

        // Different colors for visual distinction
        const hue = (index * 10) % 360;
        demoEl.style.width = "40px"; // Slightly smaller to fit more
        demoEl.style.height = "40px";
        demoEl.style.background = `hsl(${hue}, 70%, 50%)`;
        demoEl.style.margin = "5px";

        // Add label for clarity
        demoEl.title = easing; // Tooltip on hover
        demoEl.style.position = "relative";

        anime({
          targets: demoEl,
          translateY: [0, -50],
          direction: "alternate",
          loop: true,
          delay: 100 + index * 50, // Staggered start
          endDelay: 100,
          duration: 1000,
          easing: easing,
        });

        fragment.appendChild(demoEl);
      });

      demoContentRef.current.innerHTML = "";
      demoContentRef.current.appendChild(fragment);
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
    <section className="bg-white dark:bg-gray-900 h-[38rem]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Your favorite online shop
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Everything you need, your everything shop, online and with perfect
            prices that suit your wallet.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Check our products
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div
            ref={demoContentRef}
            className="penner-equations-demo w-full flex flex-wrap gap-2 items-start overflow-y-auto max-h-[30rem]"
          ></div>
        </div>
      </div>

      <style>{`
        .penner-equations-demo {
          padding: 10px;
        }
        .el.square.stretched {
          position: relative;
          display: inline-block;
          border-radius: 4px;
          transition: transform 0.1s;
        }
        .el.square.stretched:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};
