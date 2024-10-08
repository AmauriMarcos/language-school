'use client';
import React from 'react';
import { motion, MotionProps } from 'framer-motion';

// Helper function to convert hex color to RGBA
const hexToRGBA = (hex: string, alpha: number) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return `rgba(${r},${g},${b},${alpha})`;
};

// Define Size type
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends MotionProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  color?: string;
  size?: Size; // Use Size type here
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  color = '#ff1f1f',
  size = 'lg',
  ...rest
}: ButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Normalize the defaultColor for comparison
  const defaultColor = color;
  const normalizedDefaultColor = defaultColor.toLowerCase();

  // Text colors
  const textColorInitial = variant === 'default' ? '#ffffff' : defaultColor;
  let textColorHover;

  if (variant === 'default') {
    // For default button, text color changes to white on hover
    textColorHover = '#ffffff';
  } else {
    // For outline button
    if (normalizedDefaultColor !== '#242424') {
      textColorHover = '#003c72';
    } else {
      textColorHover = '#ffffff';
    }
  }

  // Border colors using RGBA for smooth transition
  const borderColorInitial =
    variant === 'default'
      ? 'rgba(255,255,255,0)' // Transparent border
      : hexToRGBA(defaultColor, 1); // Solid border in defaultColor
  const borderColorHover =
    variant === 'default'
      ? 'rgba(255,255,255,1)' // Solid white border
      : hexToRGBA(defaultColor, 0); // Transparent border

  // Border width
  const borderWidth = 1;

  // Overlay background color
  const overlayBgColor = defaultColor; // Use defaultColor for both variants

  // Overlay animation
  const overlayVariants = {
    initial: {
      scale: variant === 'default' ? 1 : 0,
    },
    hover: {
      scale: variant === 'default' ? 0 : 1,
    },
  };

  // Size-based padding
  const paddingMap: { [key in Size]: string } = {
    sm: '.5rem 1rem',
    md: '.65rem 1.5rem',
    lg: '.785rem 1.75rem',
  };

  // Apply size-based padding
  const padding = paddingMap[size];

  const containerStyle = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    cursor: 'pointer' as const,
    padding: padding,
    textTransform: 'uppercase' as const,
    borderRadius: '9999px',
    fontSize: '.8rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid' as const,
    backgroundColor: 'transparent',
    boxSizing: 'border-box' as const, // Include border in dimensions
  };

  const textStyle = {
    position: 'relative' as const,
    zIndex: 2,
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{
        borderWidth,
        borderColor: borderColorInitial,
      }}
      animate={{
        borderColor: isHovered ? borderColorHover : borderColorInitial,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {/* Overlay */}
      <motion.div
        style={{
          backgroundColor: overlayBgColor,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '9999px',
          transformOrigin: 'center',
          zIndex: 1,
        }}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        variants={overlayVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      {/* Text */}
      <motion.span
        style={textStyle}
        initial={{ color: textColorInitial }}
        animate={{ color: isHovered ? textColorHover : textColorInitial }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

export default Button;
