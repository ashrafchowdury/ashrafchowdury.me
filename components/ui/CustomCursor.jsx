import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-50 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-[#EB4AD2]"
        style={{
          transform: `translate3d(${position.x + 6}px, ${position.y}px, 0)`,
        }}
      ></div>
      <div
        className="fixed left-0 top-0 z-50 rounded-full w-32 h-32 bg-primary dark:bg-white blur-[180px]"
        style={{
          transform: `translate3d(${position.x}px, ${
            position.y 
          }px, 0)`,
        }}
      ></div>
      <div
        className="fixed left-0 top-0 z-50 w-3 h-3 duration-300 rounded-full bg-gradient-to-r from-primary to-[#EB4AD2]"
        style={{
          transform: `translate3d(${position.x + 10}px, ${
            position.y + 4
          }px, 0)`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
