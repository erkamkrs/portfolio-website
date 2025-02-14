"use client"

import React from 'react'
import { BiBasketball, BiDumbbell } from 'react-icons/bi'
import { FaReact, FaPython, FaJs, FaCalculator, FaAngular, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'

const icons = [
    BiBasketball,
    BiDumbbell,
    FaReact,
    FaPython,
    FaAngular,
    FaDatabase,
    FaCalculator,
    FaJs,
    SiTailwindcss,
    SiTypescript
]

export function FloatingIcons() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
            {icons.map((Icon, index) => (
                <Icon
                    key={index}
                    className="absolute text-foreground/5 animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 1 + 1}rem`,
                        animationDelay: `${Math.random() * 10}s`,
                    }}
                />
            ))}
        </div>
    )
}

