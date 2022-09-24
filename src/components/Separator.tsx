import { useRef, useState } from "react";

const Separator = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const parRef = useRef<HTMLDivElement>(null);

  const changeScroll = (): void => {
    if (parRef.current !== undefined && parRef.current !== null) {
      setScrollY(parRef.current.offsetTop - window.scrollY);
    }
  };
  window.addEventListener("scroll", changeScroll);
  return (
    <div
      className="separator"
      ref={parRef}
      style={{ backgroundPosition: `center ${scrollY / 10}px` }}
    >
      <div className="separator__mask" />
    </div>
  );
};

export default Separator;
