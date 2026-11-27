function DashLayout() {
   return(
      <div className="dashboard-shell">
        {/* LEFT AREA */}
        <aside className="sidebar">
            <div className="sidebar-top">{sidebarTop}</div>
            <div className="sidebar-middle">{sidebarMiddle}</div>
            <div className="sidebar-bottom">{sidebarBottom}</div>
        </aside>

        {/* RIGHT AREA */}
        <main className="workspace">
            <header className="workspace-header">{workspaceHeader}</header>
            <section className="workspace-canvas">{workspaceCanvas}</section>
        </main>
      </div>
   )
};

export default DashLayout;
