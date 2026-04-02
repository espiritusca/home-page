import Image from "next/image"

import ImgRetroPcs from '../../../../public/image-retro-pcs.jpg'
import ImgLaptops from '../../../../public/image-top-laptops.jpg'
import ImgGaming from '../../../../public/image-gaming-growth.jpg'

export default function Bot() {
    return (

        <div className='flex flex-col lg:flex-row gap-10 lg:col-span-12'>

            <div className='flex gap-6 items-start flex-1'>

                <Image
                    className='w-40 h-50 object-cover'      
                    src={ImgRetroPcs}
                    alt='Retro PCs'
                    quality={100}
                />

                <div className='flex flex-col gap-2'>
                    <span className='text-3xl text-[hsl(5,85%,63%)] font-bold'>01</span>
                    <h3 className='text-lg text-[hsl(240,100%,5%)] font-bold'>Reviving Retro PCs</h3>
                    <span className='text-[hsl(236,13%,42%)] text-sm'>What happens when old PCs are given modern upgrades?</span>
                </div>

            </div>

            <div className='flex gap-6 items-start flex-1'>

                <Image      
                    className='w-40 h-50 object-cover'   
                    src={ImgLaptops}
                    alt='Retro PCs'
                    quality={100}
                />

                <div className='flex flex-col gap-2'>
                    <span className='text-3xl text-[hsl(5,85%,63%)] font-bold'>02</span>
                    <h3 className='text-lg text-[hsl(240,100%,5%)] font-bold'>Top 10 Laptops of 2022</h3>
                    <span className='text-[hsl(236,13%,42%)] text-sm'>Our best picks for various needs and budgets.</span>
                </div>

            </div>

            <div className='flex gap-6 items-start flex-1'>

                <Image   
                    className='w-40 h-50 object-cover'                
                    src={ImgGaming}
                    alt='Retro PCs'
                    quality={100}
                />

                <div className='flex flex-col gap-2'>
                    <span className='text-3xl text-[hsl(5,85%,63%)] font-bold'>03</span>
                    <h3 className='text-lg text-[hsl(240,100%,5%)] font-bold'>The Growth of Gaming</h3>
                    <span className='text-[hsl(236,13%,42%)] text-sm'>How the pandemic has sparked fresh opportunities.</span>
                </div>

            </div>

        </div>

    )
}