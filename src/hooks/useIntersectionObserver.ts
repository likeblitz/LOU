import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        try {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Disconnect after becoming visible
            observer.disconnect();
          }
        } catch (error) {
          console.warn('IntersectionObserver error:', error);
          // Ensure we still show content even if observation fails
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    try {
      if (currentRef) {
        observer.observe(currentRef);
      }
    } catch (error) {
      console.warn('Failed to observe element:', error);
      // Ensure content is visible even if observation fails
      setIsVisible(true);
    }

    return () => {
      if (currentRef) {
        try {
          observer.unobserve(currentRef);
        } catch (error) {
          console.warn('Failed to unobserve element:', error);
        }
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}