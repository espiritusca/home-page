'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import { Menu } from '@/components/Menu'
import { useMediaQuery } from '../hooks/useMediaQuery'

import LogoImg from '../../../public/logo.svg'
import MenuImg from '../../../public/icon-menu.svg'


export function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 1024px)")

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

     useEffect(() => {
        if (isDesktop) {
            setMenuOpen(false)
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }
    }, [isDesktop])

    return (

        <header className='overflow-hidden bg-white text-[hsl(236,13%,42%)]'>

            <div className='container mx-auto py-6 px-3'>

                <div className='flex justify-between lg:mt-5'>

                    <Image
                        src={LogoImg}
                        alt='Logo'
                        quality={100}
                        priority
                    />

                    <Image
                        onClick={toggleMenu}
                        className='lg:hidden'
                        src={MenuImg}
                        alt='Menu'
                        quality={100}
                        priority
                    />

                    <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />

                    <div className='hidden lg:block'>

                        <ul className='flex gap-5'>

                            <li>
                                <a href='#'>Home</a>
                            </li>

                            <li>
                                <a href='#'>New</a>
                            </li>

                            <li>
                                <a href='#'>Popular</a>
                            </li>

                            <li>
                                <a href='#'>Trending</a>
                            </li>

                            <li>
                                <a href='#'>Categories</a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </header>

    )
}