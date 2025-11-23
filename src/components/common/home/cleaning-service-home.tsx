import photo1 from '@/assets/cleaningService1.png';
import photo2 from '@/assets/cleaningService2.png';
import { Button } from '@/components/ui';
import { ArrowBlackRightIcon, ArrowRightIcon } from '@/icon';
import Image from 'next/image';

const CleaningServiceHome = () => {
    return (
        <div className="pt-[48px] ">
            <div className='px-46'>
                <div
                    className="h-auto xl:h-[380px] flex flex-col justify-center items-center space-y-4 p-8"
                    style={{
                        backgroundImage: `url(${photo1.src})`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >





                    <div className='flex items-center gap-4'>
                        <h1 className=" font-bold text-[24px] xl:text-[36px]">The Easiest Way to Book Premium</h1>
                        <Image src={photo2} alt='photo' width={100} height={100} className='w-[200px] h-[80px] object-contain' />
                    </div>
                    <p>Effortless booking for clients. Guaranteed business growth for top-tier cleaning vendors. Find or offer the best cleaning services in NYC, all in one place.</p>

                    <div className='flex items-center gap-4 mt-8 xl:mt-0'>
                        <Button className="" size="lg" icon={true}>Continue as user</Button>
                        <Button className=" bg-white text-black font-bold" size={"lg"} icon={false}>
                            Order
                            <ArrowBlackRightIcon className="text-black" />
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CleaningServiceHome