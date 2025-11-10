import Image from 'next/image'

import LogoImg from '../../../public/logo.svg'
import MenuImg from '../../../public/icon-menu.svg'

export function Header() {
    return (

        <header className='overflow-hidden bg-white text-[hsl(236,13%,42%)]'>

            <div className='container mx-auto py-4 px-3'>

                <div className='flex justify-between lg:mt-5'>

                    <Image
                        src={LogoImg}
                        alt='Logo'
                        quality={100}
                        priority
                    />

                    <Image
                        className='lg:hidden'
                        src={MenuImg}
                        alt='Menu'
                        quality={100}
                        priority
                    />

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