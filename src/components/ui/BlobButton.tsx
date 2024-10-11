/* BlobButton.tsx */

'use client';

import React from 'react';
import './BlobButton.css'; // Import the CSS file

/**
 * Utility function to shade a color.
 * @param color - The HEX color code (e.g., '#ff1e1f').
 * @param percent - The percentage to lighten or darken the color.
 * @returns The shaded HEX color code.
 */
function shadeColor(color: string, percent: number): string {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  color?: string;
  size?: Size;
  onClick?: () => void;
  // Add any additional props as needed
}

const BlobButton: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  color = '#ff1f1f',
  size = 'lg',
  ...rest
}) => {
  const defaultColor = color.toLowerCase();

  // Determine text colors based on variant
  let textColor: string;
  let textColorHover: string;

  if (variant === 'default') {
    // Default variant: white text, hover to color prop
    textColor = color === 'white' || color === '#fff' || color === '#ffffff' ? '#ff1f1f' : '#ffffff';
    textColorHover = defaultColor;
  } else {
    // Outline variant: text color is color prop, hover remains same
    textColor = defaultColor;
    textColorHover = color === 'white' || color === '#fff' || color === '#ffffff' ? '#ff1f1f' : '#ffffff';
  }

  // Determine border color
  const borderColor = defaultColor;

  // Determine background colors
  const backgroundColor = variant === 'default' ? defaultColor : 'transparent';


  // Determine blob color
  const blobColor = variant === 'default' ?  color === 'white' || color === '#fff' || color === '#ffffff' ? '#ff1f1f' : '#ffffff' : defaultColor;

  // Size-based padding and font size
  const paddingMap: { [key in Size]: string } = {
    sm: '0.5rem 1rem',
    md: '0.65rem 1.5rem',
    lg: '0.685rem 1.8rem',
    xl: '1.33rem 2rem',
  };

  const fontSizeMap: { [key in Size]: string } = {
    sm: '0.7rem',
    md: '0.8rem',
    lg: '0.9rem',
    xl: '1.1rem',
  };

  // Size-based width
  const widthMap: { [key in Size]: string } = {
    sm: 'auto',
    md: 'auto',
    lg: '170px',
    xl: '200px',
  };

  // Retrieve size-based styles
  const padding = paddingMap[size];
  const fontSize = fontSizeMap[size];
  const width = widthMap[size];

  // Define CSS variables for dynamic styling
  const buttonStyles: React.CSSProperties = {
    '--button-color': textColor,
    '--button-hover-color': textColorHover,
    '--border-color': borderColor,
    '--inner-background-color': backgroundColor,
    '--blob-color': blobColor,
    '--button-width': width,
    padding: padding,
    fontSize: fontSize,
  } as React.CSSProperties;

  return (
    <button className="blob-btn" style={buttonStyles} {...rest}>
      <span>{children}</span>
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>

      {/* Gooey Filter */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="gooey-filter"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export default BlobButton;
