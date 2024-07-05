import "./Header.css"; // Will import the Header.css and apply the styles to the Header component

const Header = () => {
  const navStyles = {
    display: "flex",
    gap: "20px",
    listStyleType: "none",
  };
  return (
    // INLINE STYLING
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid gray",
      }}
    >
      <h1 className="heading">Trip Planner Logo</h1>
      <ul style={navStyles}>
        <li className="nav-item">Home</li>
        <li className="nav-item">Trips</li>
        <li className="nav-item">About</li>
      </ul>
    </header>
  );
};
export default Header;
