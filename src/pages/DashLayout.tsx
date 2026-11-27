import "../styles/dashboard.css";
import ASCiiDash from '../components/ASCiiDash.tsx';
import BlackGlassBox from '../components/BlackGlassBox.tsx';
import { Outlet } from "react-router";
import { Glass } from "@samasante/liquid-glass";

function DashLayout() {
const romanTelescopeImg = new URL('./Roman_Telescope.png', import.meta.url).href;
const NEBULA_URL = "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2005/11/STScI-01EVT7ZRXG0NYME3W84ECPR6ND.tif?w=1568&h=3888&fit=clip";

  return (
    <div className="dashboard-shell">
        {/* LEFT AREA */}
        <aside className="sidebar">
          {/* <div className="sidebar-top">{ <img src={romanTelescopeImg.src} alt="Nancy Grace Roman Space Telescope"/> </BlackGlassBox>}</div> */}
            <div className="sidebar-middle">{ <BlackGlassBox>
                    <img src={romanTelescopeImg} alt="Nancy Grace Roman Space Telescope" />
                    <h1> SM </h1> 
                </BlackGlassBox> }</div>
            <div className="sidebar-bottom">{ <BlackGlassBox angle="-45deg"> <h1> SB </h1> </BlackGlassBox>}</div>
        </aside>

        {/* RIGHT AREA */}
        <main className="workspace">
            <header className="workspace-header">{ <ASCiiDash/> }</header>
            <section className="workspace-canvas">{
                <BlackGlassBox>
                <p style={{ margin: 0, fontSize: 18 }}>
                    Your text will now render clearly inside the tall lens.
                </p>
                </BlackGlassBox>
            } </section>
        </main>
      </div>
   )
};

export default DashLayout;
