'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const phrases = [
  'Web Developer',
  'Software Engineer',
  'AI Developer',
  'Full-Stack Developer',
  'Freelance Developer',
];

const TypewriterHero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        // Pause at end of phrase
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  const joinedPhrases = phrases.join(', ');

  return (
    <div
      className="mt-4 text-xl font-semibold md:text-2xl"
      aria-label={`I am a ${joinedPhrases}`}
    >
      <div className="h-[2em] md:h-[1.5em]">
        <span
          className={cn(
            'text-glow bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent'
          )}
        >
          {text}
        </span>
        <span
          className={cn(
            'cursor-blink ml-1 inline-block h-[1.2em] w-[3px] translate-y-1 bg-cyan-400 text-glow'
          )}
        ></span>
      </div>
      <noscript>
        <p className="mt-4 max-w-3xl text-xl font-semibold text-primary md:text-2xl">
          Web Developer, Software Engineer, AI Developer, Full-Stack Developer,
          Freelance Developer.
        </p>
      </noscript>
    </div>
  );
};

export default TypewriterHero;
