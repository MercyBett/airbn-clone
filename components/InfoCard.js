import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex">
      {/* image section */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      {/* right side  */}
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>
        {/* little trick */}
        <div className="border-b w-10 pt-2" />
        <p className="text-sm text-gray-500 pt-2 flex-grow">{description}</p>
        {/* strar and  */}
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-4 text-red-400" />
            {star}
          </p>
          {/* money bit */}
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;