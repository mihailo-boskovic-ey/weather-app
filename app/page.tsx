import Link from "next/link";
import Image from "next/image";
import img from "../public/images/bg-img.jpg";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="relative h-screen">
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter "
      />

      <div className="bg-white bg-opacity-80 backdrop-blur- absolute inset-0 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-4 w-96">
          <div className="flex justify-between">
            <Link
              href="/today"
              className="w-1/2 p-4 text-center cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-tl-lg rounded-bl-lg"
            >
              <div>
                <h2 className="text-lg font-semibold">Today's Weather</h2>
              </div>
            </Link>
            <Link
              href={"/weekly"}
              className="w-1/2 p-4 text-center cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-tr-lg rounded-br-lg"
            >
              <div>
                <h2 className="text-lg font-semibold">This Week</h2>
              </div>
            </Link>
          </div>
          {/* Add weather content here */}
        </div>
      </div>
    </div>
  );
};

export default Page;
