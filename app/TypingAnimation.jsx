// components/TypingAnimation.js

import { useEffect, useState } from 'react';

const TypingAnimation = ({ text, className }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimer = setTimeout(() => {
        setTypedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); // Adjust the typing speed as needed

      return () => clearTimeout(typingTimer);
    } else {
      // Animation has completed, reset it
      setTimeout(() => {
        setTypedText('');
        setCurrentIndex(0);
      }, 1000); // Adjust the reset delay as needed
    }
  }, [currentIndex, text]);

  return (
    <span className={`${className}`}>
      {typedText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingAnimation;
