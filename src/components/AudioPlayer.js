import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Ambient / Deep House / Lusion Style Track (Royalty Free)
    // Source: Pixabay - "Ambient Corporate" or similar vibe
    const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

    useEffect(() => {
        // Attempt auto-play on mount
        if (audioRef.current) {
            audioRef.current.volume = 0.4; // Set reasonable volume
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    // Auto-play was prevented
                    setIsPlaying(false);
                    console.log("Autoplay prevented. User interaction required.");
                });
            }
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="audio-player-container">
            <audio ref={audioRef} src={audioUrl} loop />

            <button
                className={`audio-toggle ${isPlaying ? 'playing' : ''}`}
                onClick={togglePlay}
                aria-label="Toggle Sound"
            >
                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}

                {/* Visual Equalizer Animation */}
                {isPlaying && (
                    <div className="equalizer">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                )}
            </button>
        </div>
    );
};

export default AudioPlayer;
