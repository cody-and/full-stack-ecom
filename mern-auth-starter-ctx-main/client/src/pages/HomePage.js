import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../ctx/UserContext";

const HomePage = () => {
  const { currUser } = useUserContext();

  if (currUser.status === "searching") return <></>;

  const containerStyle = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    height: "100vh",
  };

  const contentStyle = {
    maxWidth: "600px",
    padding: "30px",
    border: "1px solid #ddd",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
    textAlign: "left", 
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>Welcome to [Brand Name]</h1>
        <p>Elevate Your Living Spaces with Timeless Elegance</p>
        <p>
          Discover a world of exquisite home decor that inspires. At [Brand Name], we curate the finest selection of handpicked items, meticulously crafted to transform your house into a home. From the allure of modern minimalism to the charm of vintage classics, our collections celebrate your unique style.
        </p>
        <p>
          <strong>Explore Our Home Decor Collections:</strong>
        </p>
        <ul>
          <li>Living Room: Create a cozy haven for relaxation.</li>
          <li>Bedroom: Dream in style with sumptuous bedding and decor.</li>
          <li>Kitchen: Elevate your culinary space with artisanal accents.</li>
          <li>Outdoor: Embrace the beauty of the great outdoors.</li>
        </ul>
        <p>
          Unveil the beauty of your living spaces and infuse them with personality. Join our community of decor enthusiasts, and let your imagination flourish.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
