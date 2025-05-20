"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface BackgroundAudioProps {
  audioUrl: string
}

export default function BackgroundAudio({ audioUrl }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set up audio
    audio.volume = 0.3
    audio.loop = true

    // Handle audio end
    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.pause()
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Error playing audio:", error)
          setIsPlaying(false)
        })
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    const newMutedState = !isMuted
    audioRef.current.muted = newMutedState
    setIsMuted(newMutedState)
  }

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />

      {/* Audio control button */}
      <div className="fixed bottom-4 right-4 flex gap-2 z-50">
        <button
          onClick={togglePlayback}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors border border-gray-200"
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
        >
          {isPlaying ? <Pause className="h-5 w-5 text-gray-600" /> : <Play className="h-5 w-5 text-gray-600 ml-0.5" />}
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors border border-gray-200"
            aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          >
            {isMuted ? <VolumeX className="h-5 w-5 text-gray-600" /> : <Volume2 className="h-5 w-5 text-gray-600" />}
          </button>
        )}
      </div>
    </>
  )
}
