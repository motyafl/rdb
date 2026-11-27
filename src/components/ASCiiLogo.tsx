function ASCiiLogo() {
    return(
        <pre
        style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "7px",
            lineHeight: 1,
            whiteSpace: "pre",
            color: "#fff",
            padding: 0,
            margin: 0,
            transform: "translateY(2px)",
        }}>
            <span style={{color:"#fff"}}>██▀██ ██▀█▄ ██▀█▄</span> {"\n"}
            <span style={{color:"#fff"}}>██▄█▀ ██ ██ ██▄█▀</span> {"\n"}
            <span style={{color:"#fff"}}>█▓░█▓ █▓░█▓ █▓ █▓</span> {"\n"}
            <span style={{color:"#fff"}}>▀▀ ▀▀ ▀▀▀▀  ▀▀▀▀ </span>
        </pre>
    )
};

export default ASCiiLogo;
