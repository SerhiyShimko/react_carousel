import React, { useState } from 'react';
import './Carousel.scss';

type Props = {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  step = 3,
  frameSize = 3,
  itemWidth = 130,
  animationDuration = 1000,
  infinite = false,
}) => {
  const [startImage, changeStartImage] = useState(0);
  const height = frameSize * itemWidth;
  const imgs = images;

  return (
    <div className="Carousel">
      <div
        className="Carousel__window"
        style={{
          height: height,
          overflow: 'hidden',
        }}
      >
        <ul
          className="Carousel__list"
          style={{
            transition: `transform ${animationDuration}ms ease`,
            transform: `translateY(-${startImage * itemWidth}px)`,
          }}
        >
          {imgs.map((img, i) => {
            return (
              <li
                key={i}
                style={{ width: itemWidth + 'px', height: itemWidth + 'px' }}
              >
                <img
                  width={itemWidth}
                  src={img}
                  alt="2"
                  style={{ width: itemWidth + 'px' }}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <button
        className="Carousel__button Carousel__button--prev"
        type="button"
        onClick={() => {
          if (startImage - step >= 0) {
            changeStartImage(prev => prev - step);
          }
        }}
      >
        ← Prev
      </button>
      <button
        data-cy="next"
        className="Carousel__button Carousel__button--next"
        type="button"
        onClick={() => {
          if (infinite) {
            if (!imgs[startImage + step]) {
              changeStartImage(0);
            }
          }

          if (startImage + step <= imgs.length) {
            changeStartImage(prev => prev + step);
          }
        }}
      >
        Next →
      </button>
    </div>
  );
};

export default Carousel;
