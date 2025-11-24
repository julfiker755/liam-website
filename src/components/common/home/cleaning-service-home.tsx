import photo1 from '@/assets/cleaningService1.png';
import photo2 from '@/assets/cleaningService2.png';
import { Button } from '@/components/ui';
import { ArrowBlackRightIcon } from '@/icon';
import Image from 'next/image';

const CleaningServiceHome = () => {
    return (
        <div className="pt-[48px] ">
            <div className='px-46'>
                <div
                    className="h-auto xl:h-[380px] flex flex-col justify-center items-center p-8"
                    style={{
                        backgroundImage: `url(${photo1.src})`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >





                    <div className='flex flex-col items-center gap-4 pt-12'>
                        <h1 className=" font-bold text-[24px] xl:text-[36px]">The Easiest Way to Book Premium</h1>
                        <Image src={photo2} alt='photo' width={500} height={500} className='w-[200px] h-[100px] object-contain' />
                    </div>
                    <p className='pb-6'>Effortless booking for clients. Guaranteed business growth for top-tier cleaning vendors. Find or offer the best cleaning services in NYC, all in one place.</p>

                    <div className='flex items-center gap-4 mt-8 xl:mt-0 '>
                        <Button className="w-[340px]" size="lg" icon={true}>Continue as user</Button>
                        <Button className=" bg-transparent border border-gray-200 text-black " size={"lg"} icon={false}>
                            Are You a Service Provider? Join Us!
                            <ArrowBlackRightIcon className="text-black" />
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CleaningServiceHome