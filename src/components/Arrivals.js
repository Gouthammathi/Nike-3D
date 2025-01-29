import React from "react";

const Arrivals = () => {
  const rows = 2; // Fixed number of rows
  const cols = 16; // Fixed number of columns
  const totalBlocks = rows * cols; // Total cubes (32)

  return (
    <div
      style={{
        height: "95px", // Fixed height for the container
        width: "100%", // Full width
        backgroundColor: "#121212", // Dark background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${rows}, 1fr)`, // Exactly 2 rows
          gridTemplateColumns: `repeat(${cols}, 1fr)`, // Exactly 16 columns
          gap: "2px", // Small spacing between cubes
          width: "100%", // Full width of the container
          height: "100%", // Full height of the container
        }}
      >
        {Array.from({ length: totalBlocks }).map((_, index) => {
          const isWhite =
            (Math.floor(index / cols) + (index % cols)) % 2 === 0; // Checkerboard pattern

          return (
            <div
              key={index}
              style={{
                backgroundColor: isWhite ? "#FFFFFF" : "#333333", // Alternating black and gray
                width: "100%", // Full width of the grid cell
                aspectRatio: "1", // Ensures perfect square blocks
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Arrivals;
