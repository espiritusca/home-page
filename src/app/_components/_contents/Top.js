import Image from 'next/image'

import CentralImgMobile from '../../../../public/image-web-3-mobile.jpg'
import CentralImgDesktop from '../../../../public/image-web-3-desktop.jpg'

export function Top() {
    return (

        <div className='lg:col-span-8'>

            <Image
                className='lg:hidden w-full'
                src={CentralImgMobile}
                alt='Core Image'
                quality={100}
                priority
            />

            <Image
                className='lg:block hidden'
                src={CentralImgDesktop}
                alt='Core Image'
                quality={100}
                priority
            />

            <div className='flex flex-col lg:flex-row gap-8 py-6'>

                <h2 className='text-7xl font-bold text-[hsl(240,100%,5%)]'>The Bright Future of Web 3.0?</h2>

                <article>

                    <span className='text-xl text-[hsl(236,13%,42%)]'>We dive into the next evolution of the web that claims to put the power of the plataforms back into thje hands of the people. But is it really fulfilling its promise?</span>

                    <div className='mt-8'>

                        <a href='#' className='bg-[hsl(5,85%,63%)] text-[hsl(240,100%,5%)] px-10 py-4 font-semibold tracking-[3] text-md'>
                            READ MORE
                        </a>

                    </div>

                </article>

            </div>

        </div>

    )
}