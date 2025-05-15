"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

interface BackgroundAudioProps {
  audioUrl: string
}

export default function BackgroundAudio({ audioUrl }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set up audio
    audio.volume = 0.3
    audio.loop = true

    // Try to autoplay
    const playPromise = audio.play()

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Auto-play was prevented
        // Show a minimal control after a delay so user can enable audio
        setTimeout(() => setShowControls(true), 1000)
        console.log("Autoplay prevented:", error)
      })
    }

    return () => {
      audio.pause()
    }
  }, [])

  const toggleMute = () => {
    if (!audioRef.current) return

    const newMutedState = !isMuted
    audioRef.current.muted = newMutedState
    setIsMuted(newMutedState)

    // If unmuting and audio was prevented from playing, try playing again
    if (!newMutedState && audioRef.current.paused) {
      audioRef.current.play().catch((e) => console.log("Play prevented:", e))
    }
  }

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />

      {/* Minimal audio control that only appears if autoplay was blocked */}
      {showControls && (
        <button
          onClick={toggleMute}
          className="fixed bottom-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center z-50 hover:bg-white transition-colors border border-gray-200"
          aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        >
          {isMuted ? <VolumeX className="h-5 w-5 text-gray-600" /> : <Volume2 className="h-5 w-5 text-gray-600" />}
        </button>
      )}
    </>
  )
}
