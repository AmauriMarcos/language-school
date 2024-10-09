'use client';
import React from 'react';

// Helper function to shade color
function shadeColor(color: string, percent: number): string {
  const num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
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

// Define Size type
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  color?: string;
  size?: Size;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  color = '#ff1f1f',
  size = 'lg',
  ...rest
}) => {
  // Normalize the color
  const defaultColor = color.toLowerCase();

  // Text colors
  let textColor: string;
  let textColorHover: string;

  if (variant === 'default') {
    // Default variant
    textColor = '#ffffff';
    textColorHover = '#ffffff';
  } else {
    // Outline variant
    if (defaultColor === '#242424') {
      textColor = '#000';
      textColorHover = '#ffffff';
    } else {
      textColor = '#fff';
      textColorHover = '#000';
    }
   // On hover, text color becomes white
  }

  // Border colors
  const borderColor = variant === 'default' ? 'transparent' : defaultColor;

  // Background colors
  const backgroundColor =
    variant === 'default' ? defaultColor : 'transparent';
  const backgroundColorHover =
    variant === 'default'
      ? shadeColor(defaultColor, -10) // Slightly darker version of the color (darken by 10%)
      : defaultColor; // Fill with color on hover for outline variant

  // Size-based padding
  const paddingMap: { [key in Size]: string } = {
    sm: '.5rem 1rem',
    md: '.65rem 1.5rem',
    lg: '.785rem 1.75rem',
    xl: '1.33rem 2rem',
  };

  const fontSizeMap: { [key in Size]: string } = {
    sm: '.7rem',
    md: '.8rem',
    lg: '.9rem',
    xl: '1.1rem',
  };

  // Size-based widths
  const widthMap: { [key in Size]: string } = {
    sm: 'auto',
    md: 'auto',
    lg: 'auto',
    xl: '200px',
  };

  // Apply size-based padding
  const padding = paddingMap[size];

  // Hover state
  const [hover, setHover] = React.useState(false);

  const containerStyle = {
    position: 'relative' as const,
    cursor: 'pointer' as const,
    padding: padding,
    textTransform: 'uppercase' as const,
    borderRadius: '9999px',
    fontSize: fontSizeMap[size],
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid' as const,
    borderWidth: 1,
    borderColor: borderColor,
    width: widthMap[size],
    backgroundColor: hover ? backgroundColorHover : backgroundColor,
    color: hover ? textColorHover : textColor,
    boxSizing: 'border-box' as const,
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      <span>{children}</span>
    </div>
  );
};

export default Button;
