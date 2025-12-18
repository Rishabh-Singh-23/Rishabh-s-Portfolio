import { useEffect, useState } from "react";

export default function Animated() {
   const role = [
    { title: "Web Developer" },
    { title: "Full Stack Developer" },
    { title: "Software Developer" },
    { title: "Android Developer" }
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurText] = useState('');
  const [isDeleting, setOnIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = role[currentRoleIndex].title;

      if (!isDeleting) {
        // Typing
        if (currentText === current) {
          setTimeout(() => setOnIsDeleting(true), 1000);
          setTypingSpeed(300);
        } else {
          setCurText(current.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        }
      } else {
        // Deleting
        if (currentText === "") {
          setOnIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % role.length);
          setTypingSpeed(300);
        } else {
          setCurText(current.substring(0, currentText.length - 1));
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, role]);

  return (
    <div className="text-center md:text-start">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        <span className="text-outline pb-1">{currentText}</span>
        <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse"></span>
      </h1>
    </div>
  );
}
