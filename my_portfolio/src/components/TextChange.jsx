import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Anwesa Ghosh",
    "A MERN Stack Developer ...",
    "A Backend Developer ..."
  ];

  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentSentence = texts[textIndex];

    const timeout = setTimeout(() => {
      if (isTyping) {
        if (charIndex < currentSentence.length) {
          setCharIndex((prev) => prev + 1);
          setCurrentText(currentSentence.substring(0, charIndex + 1));
        } else {
          setIsTyping(false);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setCurrentText(currentSentence.substring(0, charIndex - 1));
        } else {
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 70);

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, textIndex, texts]);

  return (
    <div className="transition ease duration-300">{currentText}</div>
  );
};

export default TextChange;
