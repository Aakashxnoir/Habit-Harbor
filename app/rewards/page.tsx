"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Coins,
  Sword,
  Shield,
  Crown,
  Gem,
  Coffee,
  Pizza,
  Gamepad2,
  Book,
  Music,
  Gift,
  Shirt,
  Watch,
  Headphones,
  Camera,
  Dumbbell,
  Palette,
} from "lucide-react"
import Link from "next/link"

interface RewardItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  icon: React.ReactNode
  rarity: "common" | "rare" | "epic" | "legendary"
}

export default function RewardsPage() {
  const [userPoints, setUserPoints] = useState(150) // This would come from your app state
  const [purchasedItems, setPurchasedItems] = useState<string[]>([])

  const rewards: RewardItem[] = [
    // Equipment
    {
      id: "sword-basic",
      name: "Iron Sword",
      description: "A sturdy iron sword for beginners",
      price: 50,
      category: "equipment",
      icon: <Sword className="w-6 h-6" />,
      rarity: "common",
    },
    {
      id: "shield-basic",
      name: "Wooden Shield",
      description: "Basic protection for new adventurers",
      price: 40,
      category: "equipment",
      icon: <Shield className="w-6 h-6" />,
      rarity: "common",
    },
    {
      id: "crown-gold",
      name: "Golden Crown",
      description: "A majestic crown for habit royalty",
      price: 200,
      category: "equipment",
      icon: <Crown className="w-6 h-6" />,
      rarity: "legendary",
    },
    {
      id: "armor-leather",
      name: "Leather Armor",
      description: "Light armor for agile habit builders",
      price: 75,
      category: "equipment",
      icon: <Shirt className="w-6 h-6" />,
      rarity: "common",
    },

    // Real Life Rewards
    {
      id: "coffee-treat",
      name: "Coffee Break",
      description: "Treat yourself to your favorite coffee",
      price: 30,
      category: "treats",
      icon: <Coffee className="w-6 h-6" />,
      rarity: "common",
    },
    {
      id: "pizza-night",
      name: "Pizza Night",
      description: "Order your favorite pizza",
      price: 80,
      category: "treats",
      icon: <Pizza className="w-6 h-6" />,
      rarity: "rare",
    },
    {
      id: "gaming-session",
      name: "2 Hour Gaming",
      description: "Guilt-free gaming session",
      price: 60,
      category: "treats",
      icon: <Gamepad2 className="w-6 h-6" />,
      rarity: "common",
    },
    {
      id: "book-purchase",
      name: "New Book",
      description: "Buy that book you've been wanting",
      price: 100,
      category: "treats",
      icon: <Book className="w-6 h-6" />,
      rarity: "rare",
    },

    // Premium Items
    {
      id: "headphones",
      name: "Premium Headphones",
      description: "High-quality wireless headphones",
      price: 300,
      category: "premium",
      icon: <Headphones className="w-6 h-6" />,
      rarity: "epic",
    },
    {
      id: "smartwatch",
      name: "Fitness Watch",
      description: "Track your habits and fitness",
      price: 500,
      category: "premium",
      icon: <Watch className="w-6 h-6" />,
      rarity: "legendary",
    },
    {
      id: "camera",
      name: "Digital Camera",
      description: "Capture your journey",
      price: 400,
      category: "premium",
      icon: <Camera className="w-6 h-6" />,
      rarity: "epic",
    },

    // Experiences
    {
      id: "gym-day",
      name: "Gym Day Pass",
      description: "One day at a premium gym",
      price: 25,
      category: "experiences",
      icon: <Dumbbell className="w-6 h-6" />,
      rarity: "common",
    },
    {
      id: "art-class",
      name: "Art Workshop",
      description: "Creative art class experience",
      price: 120,
      category: "experiences",
      icon: <Palette className="w-6 h-6" />,
      rarity: "rare",
    },
    {
      id: "concert-ticket",
      name: "Concert Ticket",
      description: "Live music experience",
      price: 150,
      category: "experiences",
      icon: <Music className="w-6 h-6" />,
      rarity: "epic",
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800"
      case "rare":
        return "bg-blue-100 text-blue-800"
      case "epic":
        return "bg-purple-100 text-purple-800"
      case "legendary":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const purchaseItem = (item: RewardItem) => {
    if (userPoints >= item.price && !purchasedItems.includes(item.id)) {
      setUserPoints((prev) => prev - item.price)
      setPurchasedItems((prev) => [...prev, item.id])
    }
  }

  const getItemsByCategory = (category: string) => {
    return rewards.filter((item) => item.category === category)
  }

  const canAfford = (price: number) => userPoints >= price

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold">Rewards Shop</h1>
            </div>
          </div>

          {/* Points Display */}
          <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-lg">
            <Coins className="w-5 h-5 text-yellow-600" />
            <span className="font-semibold text-yellow-800">{userPoints} Points</span>
          </div>
        </div>

        {/* Shop Description */}
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-600">
              Spend your hard-earned points on rewards! Complete habits to earn more points and unlock amazing items.
            </p>
          </CardContent>
        </Card>

        {/* Rewards Tabs */}
        <Tabs defaultValue="equipment" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="treats">Treats</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
          </TabsList>

          <TabsContent value="equipment" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {getItemsByCategory("equipment").map((item) => (
                <Card key={item.id} className="relative">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <Badge className={getRarityColor(item.rarity)}>{item.rarity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">{item.price}</span>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => purchaseItem(item)}
                        disabled={!canAfford(item.price) || purchasedItems.includes(item.id)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {purchasedItems.includes(item.id) ? "Owned" : "Buy"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="treats" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {getItemsByCategory("treats").map((item) => (
                <Card key={item.id} className="relative">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <Badge className={getRarityColor(item.rarity)}>{item.rarity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">{item.price}</span>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => purchaseItem(item)}
                        disabled={!canAfford(item.price) || purchasedItems.includes(item.id)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {purchasedItems.includes(item.id) ? "Claimed" : "Claim"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="premium" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {getItemsByCategory("premium").map((item) => (
                <Card key={item.id} className="relative">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <Badge className={getRarityColor(item.rarity)}>{item.rarity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">{item.price}</span>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => purchaseItem(item)}
                        disabled={!canAfford(item.price) || purchasedItems.includes(item.id)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {purchasedItems.includes(item.id) ? "Owned" : "Buy"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experiences" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {getItemsByCategory("experiences").map((item) => (
                <Card key={item.id} className="relative">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <Badge className={getRarityColor(item.rarity)}>{item.rarity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">{item.price}</span>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => purchaseItem(item)}
                        disabled={!canAfford(item.price) || purchasedItems.includes(item.id)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {purchasedItems.includes(item.id) ? "Claimed" : "Claim"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Purchased Items Summary */}
        {purchasedItems.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-purple-600" />
                Your Collection ({purchasedItems.length} items)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {purchasedItems.map((itemId) => {
                  const item = rewards.find((r) => r.id === itemId)
                  return item ? (
                    <Badge key={itemId} variant="secondary" className="flex items-center gap-1">
                      {item.icon}
                      {item.name}
                    </Badge>
                  ) : null
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
