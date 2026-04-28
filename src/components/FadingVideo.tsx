import { useRef, useEffect, useState } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo = ({ src, className, style }: FadingVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafId = useRef<number>();
  const fadingOutRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_MS = 500;
    const FADE_OUT_LEAD = 0.55;

    const fadeTo = (target: number, duration: number) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      const startOpacity = parseFloat(video.style.opacity) || 0;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        video.style.opacity = (startOpacity + (target - startOpacity) * progress).toString();
        if (progress < 1) rafId.current = requestAnimationFrame(animate);
      };
      rafId.current = requestAnimationFrame(animate);
    };

    video.onloadeddata = () => {
      video.style.opacity = '0';
      video.play();
      fadeTo(1, FADE_MS);
    };

    video.ontimeupdate = () => {
      if (!fadingOutRef.current && video.duration - video.currentTime <= FADE_OUT_LEAD && video.currentTime > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    video.onended = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    };

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={style}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
};
