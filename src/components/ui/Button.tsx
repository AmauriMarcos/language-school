'use client';
import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps extends MotionProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  color = '#ff1f1f',
  ...rest
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const defaultColor = color;

  // Text colors
  const textColorInitial = variant === 'default' ? '#ffffff' : defaultColor;
  const textColorHover = '#ff1f1f';

  // Border colors
  const borderColorInitial = variant === 'default' ? 'transparent' : defaultColor;
  const borderColorHover = variant === 'default' ? defaultColor : 'transparent';

  // Border width
  const borderWidth = 1;

  // Overlay background color
  const overlayBgColor = variant === 'default' ? defaultColor : '#ffffff';

  // Overlay animation
  const overlayVariants = {
    initial: {
      scale: variant === 'default' ? 1 : 0,
    },
    hover: {
      scale: variant === 'default' ? 0 : 1,
    },
  };

  const containerStyle = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    cursor: 'pointer' as const,
    padding: '.785rem 1.75rem',
    textTransform: 'uppercase' as const,
    borderRadius: '9999px',
    fontSize: '.8rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid' as const,
    backgroundColor: 'transparent',
    boxSizing: 'border-box' as const,
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
