'use client';

import React, { useRef, useState } from 'react';
import { PlayIcon, SparklesIcon } from './Icons';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="video-showcase-section">
      <div className="container">
        {/* Main Video Card */}
        <div className="video-card-frame">
          <video
            ref={videoRef}
            src="/video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="video-element"
            onClick={togglePlay}
          />

          {/* Floating Pill Badge */}
          <div className="video-badge-overlay">
            <div className="video-badge-icon">
              <SparklesIcon className="w-4 h-4 text-cyan-accent" />
            </div>
            <span className="video-badge-text">
              Products We Made From Scratch to Production
            </span>
          </div>

          {/* Interactive Player Controls */}
          <div className="video-controls-overlay">
            <button
              type="button"
              className="video-ctrl-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <PlayIcon className="w-4 h-4 text-white" />
              )}
            </button>

            <button
              type="button"
              className="video-ctrl-btn"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              title={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
