import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useRef, useEffect } from "react";

/**
 * ProductSlider
 * ─────────────
 * Drop your <ProductCard> components as children.
 * Each child is automatically wrapped in a keen-slider__slide div.
 *
 * Breakpoints:
 *   < md  (< 768px)  → 1.15 slides (one + peek at next)
 *   ≥ md  (≥ 768px)  → 4 slides  (matches Bootstrap col-md-3)
 */
export default function ProductSlider({ children }) {
  const slides = Array.isArray(children) ? children : [children];
  const total = slides.length;
  const sliderContainerRef = useRef(null);
  const wheelTimeoutRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1.25,   // mobile default: 1 + peek
      spacing: 6,
    //   origin: "center",
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 4,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    drag: true,
  });

  const isFirst = currentSlide === 0;
  // "last" = can't scroll further right
  const isLast =
    instanceRef.current
      ? currentSlide >=
        instanceRef.current.track.details.slides.length -
          Math.round(instanceRef.current.options.slides.perView ?? 1)
      : false;

  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <div ref={sliderContainerRef} className="product-slider-wrapper position-relative">

      {loaded && (
        <div className="slider-arrows">
            <button
            className={`slider-arrow${isFirst ? " slider-arrow--disabled" : ""}`}
            onClick={prev}
            aria-label="Previous"
            disabled={isFirst}
            >
            &#8249;
            </button>
            <button
            className={`slider-arrow${isLast ? " slider-arrow--disabled" : ""}`}
            onClick={next}
            aria-label="Next"
            disabled={isLast}
            >
            &#8250;
            </button>
        </div>
)}

      {/* ── Keen Slider track ── */}
      <div ref={sliderRef} className="keen-slider">
        {slides.map((child, i) => (
          <div key={i} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>

      <style>{`
        .product-slider-wrapper {
          padding: 0;          /* room for arrows on both sides */
          overflow: hidden;
        }
          .keen-slider {
             overflow: visible !important;
        }

        .slider-arrows {
            display: flex;
            justify-content: flex-end;
            gap: 16px;
            margin-bottom: 24px;
        }

        /* ── Arrow base ── */
        .slider-arrow {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid #333;
          background: #000000;
          color: white;
          font-size: 26px;
          font-weight: 400;
          line-height: 1;
          cursor: pointer;

          transition: opacity 0.25s ease, color 0.25s ease,
                      border-color 0.25s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,.12);
        }

        .slider-arrow:hover:not(:disabled) {
          box-shadow: 0 4px 12px rgba(0,0,0,.18);
        }

        /* ── Placement ── */
        .slider-arrow--prev { left: 0; }
        .slider-arrow--next { right: 0; }

        /* ── Disabled = faded ── */
        .slider-arrow--disabled {
          opacity: 0.2;
          cursor: default;
          box-shadow: none;
        }

        /* ── Mobile: hide arrows if only 1 slide visible ── */
        @media (max-width: 1024px) {
          .product-slider-wrapper {
            padding: 0 0 0 0;   /* let slides bleed to edge on mobile */
          }
          .slider-arrow {
            display: none;       /* arrows optional on mobile; remove this line to keep them */
          }
        }
      `}</style>
    </div>
  );
}
