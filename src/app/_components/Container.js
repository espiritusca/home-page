import { Top } from "./_contents/Top"
import { Mid } from "./_contents/Mid"
import Bot from "./_contents/Bot"

export function Container() {
    return (

        <section className='overflow-hidden bg-white leading-loose'>

            <div className='container mx-auto px-3'>

                <div className='grid grid-cols-1 gap-20 mt-4 mb-25 lg:grid-cols-12'>

                    <Top />

                    <Mid />

                    <Bot />

                </div>

            </div>

        </section>

    )
}