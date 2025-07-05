"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Settings, Target, Plus, Trophy, Flame, Zap, Crown, Star, TrendingUp } from "lucide-react"
// Add import for Link at the top
import Link from "next/link"
import { CharacterProfile } from "@/components/character-profile"

interface Habit {
  id: string
  name: string
  completed: boolean
}

interface Achievement {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  unlocked: boolean
}

export default function DailyHabitsApp() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [newHabitName, setNewHabitName] = useState("")
  const [currentDay, setCurrentDay] = useState(3)

  const achievements: Achievement[] = [
    {
      id: "first-step",
      name: "First Step",
      description: "Complete your first habit",
      icon: <Target className="w-4 h-4" />,
      unlocked: false,
    },
    {
      id: "streak-master",
      name: "Streak Master",
      description: "Maintain a 7 day streak",
      icon: <Flame className="w-4 h-4" />,
      unlocked: false,
    },
    {
      id: "habit-builder",
      name: "Habit Builder",
      description: "Create 5 habits",
      icon: <Plus className="w-4 h-4" />,
      unlocked: false,
    },
    {
      id: "consistency-king",
      name: "Consistency King",
      description: "Complete 10 habits total",
      icon: <Crown className="w-4 h-4" />,
      unlocked: false,
    },
    {
      id: "fire-keeper",
      name: "Fire Keeper",
      description: "Maintain a 30 day streak",
      icon: <Zap className="w-4 h-4" />,
      unlocked: false,
    },
    {
      id: "level-up",
      name: "Level Up",
      description: "Reach level 5",
      icon: <Star className="w-4 h-4" />,
      unlocked: false,
    },
  ]

  const addHabit = () => {
    if (newHabitName.trim()) {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: newHabitName.trim(),
        completed: false,
      }
      setHabits([...habits, newHabit])
      setNewHabitName("")
    }
  }

  const toggleHabit = (id: string) => {
    setHabits(habits.map((habit) => (habit.id === id ? { ...habit, completed: !habit.completed } : habit)))
  }

  const completedHabitsToday = habits.filter((h) => h.completed).length
  const totalPoints = habits.filter((h) => h.completed).length * 10
  const currentLevel = Math.floor(totalPoints / 100) + 1

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold">Daily Habits</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/rewards">
              <Button variant="ghost" size="sm">
                <Trophy className="w-4 h-4" />
                Rewards
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </Link>
          </div>
        </div>

        {/* Character Profile */}
        <CharacterProfile
          level={currentLevel}
          totalPoints={totalPoints}
          completedHabits={completedHabitsToday}
          totalHabits={habits.length}
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{currentLevel}</div>
                  <div className="text-sm text-gray-600">Level</div>
                  <div className="text-xs text-gray-500">Progress</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{totalPoints}</div>
                  <div className="text-sm text-gray-600">Total Points</div>
                  <div className="text-xs text-gray-500">{completedHabitsToday} habits completed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Flame className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-gray-600">Best Streak</div>
                  <div className="text-xs text-gray-500">Keep the momentum going!</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add New Habit */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-purple-600" />
              Add New Habit
            </CardTitle>
            <p className="text-sm text-gray-600">Start building your healthy habits today</p>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Enter habit name (e.g., Drink 8 glasses of water)"
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addHabit()}
                className="flex-1"
              />
              <Button onClick={addHabit} className="bg-purple-600 hover:bg-purple-700">
                Add Habit
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Habits */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Habits</CardTitle>
              </CardHeader>
              <CardContent>
                {habits.length === 0 ? (
                  <div className="text-center py-8">
                    <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2">No habits yet</h3>
                    <p className="text-sm text-gray-600">Start your journey by adding your first habit above</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {habits.map((habit) => (
                      <div key={habit.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <Switch checked={habit.completed} onCheckedChange={() => toggleHabit(habit.id)} />
                        <span className={`flex-1 ${habit.completed ? "line-through text-gray-500" : ""}`}>
                          {habit.name}
                        </span>
                        {habit.completed && <Badge variant="secondary">Completed</Badge>}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* This Week Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-600">W</span>
                  </div>
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <div key={day} className="text-center text-sm text-gray-600 font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[29, 30, 1, 2, 3, 4, 5].map((date, index) => (
                    <Button
                      key={date}
                      variant={index === 4 ? "default" : "ghost"}
                      size="sm"
                      className={`h-10 ${index === 4 ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    >
                      {date}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <span className="text-blue-600 font-medium">0/7 days completed this week</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Habits Completed Today</span>
                  <span className="font-medium">0/0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-medium">0/0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className="font-medium text-green-600">0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active Habits</span>
                  <span className="font-medium">{habits.length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-orange-600" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center gap-3 p-2 rounded-lg border">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.unlocked ? "bg-orange-100" : "bg-gray-100"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-medium text-sm ${achievement.unlocked ? "text-gray-900" : "text-gray-500"}`}
                      >
                        {achievement.name}
                      </div>
                      <div className="text-xs text-gray-500">{achievement.description}</div>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        achievement.unlocked ? "bg-orange-500 border-orange-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
