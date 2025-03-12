import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import "./Animation.css";
import { useLoaderData } from "react-router-dom";

export default function Animation() {
  const listProducts = useLoaderData();
  const cards = listProducts.map((product) => product.images[0]);

  const to = (i) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });

  const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

  const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;

  const [gone, setGone] = useState(() => new Set());

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.01 || Math.abs(mx) > 100;
      const dir = xDir < 0 ? -1 : 1;

      console.log(
        `Index: ${index}, Active: ${active}, Movement: ${mx}, Velocity: ${vx}, Direction: ${xDir}, Trigger: ${trigger}`
      );

      let newGone = new Set(gone);
      if (!active && trigger) {
        newGone.add(index);
        setGone(newGone);
        console.log(`Card ${index} flicked, Gone size: ${newGone.size}`);
      }

      api.start((i) => {
        if (index !== i) return;

        const isGone = newGone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : active ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;

        console.log(`Card ${i}: x=${x}, isGone=${isGone}`);

        return {
          x,
          rot,
          scale,
          config: {
            friction: 50,
            tension: active ? 800 : isGone ? 200 : 300,
          },
        };
      });

      if (!active && newGone.size === cards.length) {
        console.log("All cards gone, resetting...");
        setTimeout(() => {
          setGone(new Set());
          api.start((i) => to(i));
        }, 600);
      }
    }
  );

  return (
    <>
      <style>{`
        body {
          overflow-x: hidden;
          margin: 0; /* Ensure no default margin */
        }
      `}</style>
      <div className="container">
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className="deck" key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i]})`,
              }}
            />
          </animated.div>
        ))}
      </div>
    </>
  );
}
