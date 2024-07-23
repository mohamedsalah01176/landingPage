import Image from "next/image";


interface props{
    title: string,
    des: string,
    dir: string,
    img: string,
    dirPoint:string
 
}


export default function SectionComp({title,des,dir,img,dirPoint}:props){

    return(
        <div className={`flex justify-center items-center flex-col ${dir} my-28 gap-16 relative py-20 pr-10 pl-3`}>
            <div className='basis-4/12 relative '>
                <Image src={img} alt='image' className='min-w-full h-full ' width={500} height={500}/>
                <div className="w-full h-full bg-primry/80 absolute top-7 left-7 -z-10"></div>
            </div>
            <div className='basis-5/12 p-3'>
                <h1 className="text-4xl sm:text-5xl font-bold text-second space-x-10 mb-5">{title}</h1>
                <p className="text-primry max-w-[400px] space-x-2">{des}</p>
            </div>
            <div className={`h-[450px] w-[450px] rounded-full bg-[#53ff35c2] blur-3xl top-[20%] lg:top-[5%] ${dirPoint} absolute -z-10 `}></div>

        </div>
    )
}