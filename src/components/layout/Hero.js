import RightArrow from "../Icons/RightArrow";
import Image from "next/image";
export default function Hero() {
  return (
    <secion className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-4xl font-semibold"> Everything is better with a <span className="text-primary font-semibold">Pizza</span></h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 items-center">

        <button className="bg-primary text-white py-2 px-4 rounded-full flex gap-2 items-center">Order Now
            <RightArrow/>
        </button>
        <button className="flex gap-2 text-gray-600 font-semibold">Learn More
            <RightArrow/>
        </button>
        </div>
      </div>
      <div className="relative">
        <Image src={"/pizza.png"} fill style={{ objectFit: 'contain' }} />
      </div>
    </secion>
  );
}
