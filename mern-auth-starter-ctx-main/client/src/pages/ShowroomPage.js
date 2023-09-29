import React, { useState, useRef, useEffect } from "react";

const ShowroomPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });
  const timeoutRef = useRef(null);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const imageContainerStyle = {
    flex: "1",
    padding: "10px",
    position: "relative",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const circleStyle = {
    position: "absolute",
    backgroundColor: "white",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const menuStyle = {
    position: "absolute",
    left: `${menuPosition.left}px`,
    top: `${menuPosition.top}px`,
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    display: showMenu ? "block" : "none",
  };

  const items = [
    { id: 1, name: "Couch", description: "Description of the couch.", left: 780, top: 900 },
    { id: 2, name: "Chair", description: "Description of the chair.", left: 200, top: 600 },
  ];

  const handleCircleAction = (item, event) => {
    clearTimeout(timeoutRef.current);
    const rect = event.target.getBoundingClientRect();
    const containerRect = event.currentTarget.getBoundingClientRect();
    const menuLeft = rect.left - containerRect.left + rect.width + 10;
    const menuTop = rect.top - containerRect.top;
    setMenuPosition({ left: menuLeft, top: menuTop });
    setSelectedItem(item);
    setShowMenu(true);
  };

  const handleMoreInfoClick = () => {
    // Handle the "More Info" button click to show more information about the selected item
    // You can update the content of the menu here
  };

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutRef.current);
    setShowMenu(true);
    setSelectedItem(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMenu(false);
      setSelectedItem(null);
    }, 10000); // Increase the timeout to 10 seconds (10000 milliseconds)
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseLeave);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src="/test.jpeg" alt="Living Room" style={imageStyle} />
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              ...circleStyle,
              left: `${item.left}px`,
              top: `${item.top}px`,
            }}
            onClick={(event) => handleCircleAction(item, event)}
            onMouseEnter={() => handleMouseEnter(item)}
          ></div>
        ))}
        {selectedItem && (
          <div style={menuStyle}>
            <h1>{selectedItem.name}</h1>
            <p>{selectedItem.description}</p>
            <button onClick={handleMoreInfoClick}>More Info</button>
          </div>
        )}
      </div>
      <div>
        <h1>Living Room</h1>
        <h2>Product Name Here</h2>
        <p>Product Description Here</p>
        <h4>Price Here</h4>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShowroomPage;
