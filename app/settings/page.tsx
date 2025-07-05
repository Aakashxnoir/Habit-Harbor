"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, User, Shield, LogOut, Sun, Bell, Target, Download, Trash2, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Account</h2>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Profile Settings</div>
                      <div className="text-sm text-gray-600">Manage your profile information</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Login & Security</div>
                      <div className="text-sm text-gray-600">Sign in to sync your habits across devices</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <LogOut className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Sign Out</div>
                      <div className="text-sm text-gray-600">Sign out of your account</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preferences Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Preferences</h2>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Sun className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Dark Mode</div>
                      <div className="text-sm text-gray-600">Toggle between light and dark themes</div>
                    </div>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>

                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Notifications</div>
                      <div className="text-sm text-gray-600">Get reminders for your habits</div>
                    </div>
                  </div>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Default XP Reward</div>
                      <div className="text-sm text-gray-600">Set default points for new habits</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data & Privacy Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Data & Privacy</h2>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Download className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Export Data</div>
                      <div className="text-sm text-gray-600">Download all your habit data</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-medium text-red-600">Clear All Data</div>
                      <div className="text-sm text-gray-600">Delete all habits and progress</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
