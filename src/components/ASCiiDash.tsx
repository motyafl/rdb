function ASCiiLogo() {
  const art = `██████╗                      ██╗      ██╗                                         ██╗
██╔═══██╗  ██████╗    ██████╗██████╗  ██████╗    ████╗    ██████╗  ██╗ ████╗  ██████║
██║   ██║██╔═══██║  ████╔═══╝██╔═══██╗██╔═══██╗██╔═══██╗██╔═══██║  ████╔═══╝██╔═══██║
██║   ██║██║   ██║  ╚═══████╗██║   ██║██║   ██║██║   ██║██║   ██║  ██╔═╝    ██║   ██║
██████╔═╝╚═████████╗██████╔═╝██║   ██║██████╔═╝╚═████╔═╝╚═████████╗██║      ╚═██████║
╚═════╝    ╚═══════╝╚═════╝  ╚═╝   ╚═╝╚═════╝    ╚═══╝    ╚═══════╝╚═╝        ╚═════╝
`
  return (
    <pre
      style={{
        position: "relative",
        top: "5px",
        display: "block",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "10px",
        fontWeight: "bold",
        lineHeight: 1,
        whiteSpace: "pre",
        color: "#fff",
        padding: 0,
        margin: 0,
      }}
    >
      {art}
    </pre>
  );
}

export default ASCiiLogo;
