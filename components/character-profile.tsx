"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Zap, User } from "lucide-react"

interface CharacterProfileProps {
  level: number
  totalPoints: number
  completedHabits: number
  totalHabits: number
}

export function CharacterProfile({ level, totalPoints, completedHabits, totalHabits }: CharacterProfileProps) {
  // Calculate character stats
  const maxHealth = 50
  const currentHealth = Math.min(maxHealth, 30 + completedHabits * 5)
  const healthPercentage = (currentHealth / maxHealth) * 100

  const experienceForNextLevel = level * 100
  const currentExperience = totalPoints % 100
  const experiencePercentage = (currentExperience / experienceForNextLevel) * 100

  // Determine character class based on level
  const getCharacterClass = (level: number) => {
    if (level >= 20) return "Master"
    if (level >= 15) return "Champion"
    if (level >= 10) return "Knight"
    if (level >= 5) return "Warrior"
    return "Novice"
  }

  const characterClass = getCharacterClass(level)

  // Generate pixel art style avatar based on level and class
  const getAvatarStyle = (level: number, characterClass: string) => {
    const baseColors = {
      Novice: "from-gray-400 to-gray-600",
      Warrior: "from-blue-400 to-blue-600",
      Knight: "from-green-400 to-green-600",
      Champion: "from-purple-400 to-purple-600",
      Master: "from-yellow-400 to-yellow-600",
    }

    return `bg-gradient-to-br ${baseColors[characterClass as keyof typeof baseColors] || baseColors.Novice}`
  }

  return (
    <Card className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-6">
          {/* Character Avatar */}
          <div className="relative">
            <div className="w-24 h-24 bg-purple-300 rounded-lg p-2">
              <div
                className={`w-full h-full rounded ${getAvatarStyle(level, characterClass)} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Simple pixel-art style character */}
                <div className="relative w-16 h-16">
                  {/* Head */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-200 rounded-sm"></div>
                  {/* Body */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-blue-500 rounded-sm"></div>
                  {/* Arms */}
                  <div className="absolute top-7 left-1 w-3 h-6 bg-yellow-200 rounded-sm"></div>
                  <div className="absolute top-7 right-1 w-3 h-6 bg-yellow-200 rounded-sm"></div>
                  {/* Legs */}
                  <div className="absolute bottom-0 left-3 w-3 h-4 bg-brown-600 rounded-sm bg-amber-800"></div>
                  <div className="absolute bottom-0 right-3 w-3 h-4 bg-brown-600 rounded-sm bg-amber-800"></div>

                  {/* Equipment based on level */}
                  {level >= 5 && (
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-400 rounded-sm"></div>
                  )}
                  {level >= 10 && <div className="absolute top-8 right-0 w-2 h-6 bg-gray-600 rounded-sm"></div>}
                </div>
              </div>
            </div>
          </div>

          {/* Character Info */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Habit Hero</h2>
                  <p className="text-purple-200 text-sm">@habitbuilder</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Level {level} {characterClass}
              </Badge>
            </div>

            {/* Health Bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Health</span>
                </div>
                <span>
                  {currentHealth} / {maxHealth}
                </span>
              </div>
              <Progress
                value={healthPercentage}
                className="h-3 bg-white/20"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              />
              <style jsx>{`
                .progress-indicator {
                  background: linear-gradient(90deg, #ef4444, #dc2626);
                }
              `}</style>
            </div>

            {/* Experience Bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Experience</span>
                </div>
                <span>
                  {currentExperience} / {experienceForNextLevel}
                </span>
              </div>
              <Progress value={experiencePercentage} className="h-3 bg-white/20" />
            </div>

            {/* Quick Stats */}
            <div className="flex gap-4 text-sm text-purple-200">
              <span>
                Habits Today: {completedHabits}/{totalHabits}
              </span>
              <span>Total Points: {totalPoints}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
