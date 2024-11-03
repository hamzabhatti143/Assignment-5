import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[700px]">
        <div className="p-[90px] w-1/2 ">
          <h1
            className="w-[496px] h-[189px] 
        flex items-center 
        justify-center text-[40px] 
        tracking-[2.5%] font-bold mb-0"
          >
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>

          <p
            className="w-[902px] h-[147px] text-[#787054]
        flex items-center 
        justify-center text-[30px] 
        font-medium mt-0 text-justify"
          >
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>

          <button
            className="w-[288px] h-[58px] 
          bg-[#A29875] p-[10px] text-white 
          text-center text-[30px]"
          >
            Explore Now
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image src={"/images/hero.svg"} alt="" width={462} height={647} />
        </div>
      </div>
    </>
  );
}
