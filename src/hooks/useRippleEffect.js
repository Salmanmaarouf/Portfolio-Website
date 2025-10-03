import { useEffect } from 'react';

export const useRippleEffect = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const button = event.target.closest('.nav-button, .back-button, .submit-button, .social-button');
      if (!button) return;

      // Create ripple element
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      // Get button dimensions
      const rect = button.getBoundingClientRect();
      ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
      ripple.style.left = `${event.clientX - rect.left - ripple.offsetWidth / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - ripple.offsetHeight / 2}px`;

      // Append ripple effect and remove it after animation
      button.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};
