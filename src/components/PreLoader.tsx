import React, { useLayoutEffect, useState } from "react";
import logo from "../assets/images/logo.png";
const PreLoader = () => {
  const [load, setLoad] = useState<number>(0);
  const count = (): void => {
    if (load === 100) return;
    setTimeout(() => {
      setLoad(load + 1);
    }, 5);
  };
  useLayoutEffect(() => {
    count();
  }, [load]);

  return (
    <div className="preloader">
      <div className="preloader__paws">
        <div className="paw-print-1">
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>

        <div className="paw-print-2">
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>

        <div className="paw-print-3">
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>

        <div className="paw-print-4">
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>

        <div className="paw-print-5">
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>

        <div className="paw-print-6">
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>

        <div className="paw-print-7">
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>

        <div className="paw-print-8">
          <div className="pad large"></div>
          <div className="pad small-1"></div>
          <div className="pad small-2"></div>
          <div className="pad small-3"></div>
          <div className="pad small-4"></div>
        </div>
      </div>

      <div className="preloader__content">
        <img
          className={
            load === 100
              ? "preloader__content-logo preloader__content-logo-shake"
              : "preloader__content-logo"
          }
          src={logo}
          alt="family pets"
        />
        <h1 className="preloader__content-h1">Family Pets</h1>
        <p className="preloader__content-loading">
          {load === 100 ? "¡Guau!" : `${load}%`}
        </p>
      </div>
    </div>
  );
};

export default PreLoader;
