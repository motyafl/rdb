import { Outlet } from "react-router";
import { Hazeglow, parseConfig } from "hazeglow";
import { StarTrip } from "@helperd/starfield-react";
import Navbar from "./components/Navbar.tsx";

function Layout() {

  const config = parseConfig({
    "shape": "ring",
    "center": [0.5, 0],
    "size": [0.76, 0.5],
    "roundness": 1,
    "softness": 0.9,
    "rotation": 0,
    "angle": 90,
    "palette": ["#77767b", "#eeeeee"],
    "background": "#000000",
    "grain": 0.8,
    "motion": "breathe",
    "speed": 1.15,
  });

  return (
    <>
        <div style={{  width: "100%", aspectRatio: "1920 / 1080", position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", mixBlendMode: "normal" }}>
            <Hazeglow config={config}/>
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
            <Navbar/>
            <Outlet />
        </div>
    </>
  );
};

export default Layout;
