
"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function Header() {

    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="#" className="text-xl font-bold" prefetch={false}>
                    Blinkathon Ideas
                </Link>
                <nav className="flex items-center gap-4">

                    <Link href="#" className="hover:underline" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>)
}