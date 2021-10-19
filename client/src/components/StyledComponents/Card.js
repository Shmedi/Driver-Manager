import React from "react";

const Card = ({
  title,
  children,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  titleSize,
  titleWeight,
  titleColor,
  style,
}) => {
  return (
    <div
      className="card"
      style={{
        minWidth: minWidth || "auto",
        maxWidth: maxWidth || "auto",
        minHeight: minHeight || "auto",
        maxHeight: maxHeight || "auto",
        ...style,
      }}
    >
      <p
        style={{
          fontSize: titleSize || 16,
          fontWeight: titleWeight || "400",
          color: titleColor || "black",
        }}
      >
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
};

export default Card;