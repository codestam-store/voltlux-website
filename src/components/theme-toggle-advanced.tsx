"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggleAdvanced() {
    const { setTheme, theme } = useTheme()
    const [isOpen, setIsOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const getCurrentIcon = () => {
        if (!mounted) return <Monitor className="h-4 w-4" />

        switch (theme) {
            case "light":
                return <Sun className="h-4 w-4" />
            case "dark":
                return <Moon className="h-4 w-4" />
            default:
                return <Monitor className="h-4 w-4" />
        }
    }

    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="sm"
                className="relative overflow-hidden group h-9 w-9 p-0 rounded-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                disabled
            >
                <Monitor className="h-4 w-4" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                >
                    <Button
                        variant="outline"
                        size="sm"
                        className="relative overflow-hidden group h-9 w-9 p-0 rounded-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={theme}
                                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {getCurrentIcon()}
                            </motion.div>
                        </AnimatePresence>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </motion.div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="animate-in slide-in-from-top-2 duration-200 zoom-in-95 min-w-[140px]"
                sideOffset={8}
            >
                <DropdownMenuItem
                    onClick={() => {
                        setTheme("light")
                        setIsOpen(false)
                    }}
                    className="cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] active:scale-[0.98] group"
                >
                    <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="mr-2 h-4 w-4 text-yellow-500" />
                    </motion.div>
                    <span>Light</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => {
                        setTheme("dark")
                        setIsOpen(false)
                    }}
                    className="cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] active:scale-[0.98] group"
                >
                    <motion.div
                        whileHover={{ rotate: -12, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="mr-2 h-4 w-4 text-blue-500" />
                    </motion.div>
                    <span>Dark</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => {
                        setTheme("system")
                        setIsOpen(false)
                    }}
                    className="cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] active:scale-[0.98] group"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Monitor className="mr-2 h-4 w-4 text-green-500" />
                    </motion.div>
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
} 
