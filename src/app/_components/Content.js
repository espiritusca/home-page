
export function Content() {
    return (

        <section className='overflow-hidden bg-white leading-loose'>

            <div className='container mx-auto'>

                <div className='grid grid-cols-1 gap-10 mt-4 lg:grid-cols-12'>

                    <div className='lg:col-span-8 bg-blue-200'>TESTE</div>

                    <div className='lg:col-span-4 bg-[hsl(240,100%,5%)] p-5'>

                        <h2 className='text-4xl font-bold text-[hsl(35,77%,62%)]'>New</h2>

                        <article className='pt-10 pb-10'>

                            <h3 className='text-2xl font-bold pb-2'>Hydrogen VS Electric Cars</h3>
                            
                            <span className='text-[hsl(233,8%,79%)]'>Will hydrogen-fueled cars ever catch up to EVs?</span>

                        </article>

                        <article className='border-y-1 pt-10 pb-10'>

                            <h3 className='text-2xl font-bold pb-2'>The Downsides of AI Artistry</h3>
                            
                            <span className='text-[hsl(233,8%,79%)]'>What are the possible adverse effects of on-demand AI image generation?</span>

                        </article>

                        <article className='pt-10 pb-10'>

                            <h3 className='text-2xl font-bold pb-2'>Is VC Funding Drying Up?</h3>
                            
                            <span className='text-[hsl(233,8%,79%)]'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</span>

                        </article>

                    </div>

                </div>

            </div>

        </section>

    )
}