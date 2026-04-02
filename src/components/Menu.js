'use client'

import { useEffect } from "react"
import Image from "next/image"

import menuCloseIcon from '../../public/icon-menu-close.svg'

export function Menu({ menuOpen, toggleMenu }) {

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [menuOpen])

    if (!menuOpen) return null

    return (
        <div className="fixed inset-0 z-50 lg:hidden">

            <div
                className="absolute inset-0 bg-black/50"
                onClick={toggleMenu}
            />

            <nav className="absolute right-0 top-0 h-full w-full left-40 bg-white p-6">

                <div className="flex justify-end mb-6">
                    <Image
                        src={menuCloseIcon}
                        alt="Fechar menu"
                        onClick={toggleMenu}
                        className="cursor-pointer"
                    />
                </div>

                <ul className="flex flex-col gap-6">
                    <li>HOME</li>
                    <li>NEW</li>
                    <li>POPULAR</li>
                    <li>TRENDING</li>
                    <li>CATEGORIES</li>
                </ul>

            </nav>
        </div>
    )
}