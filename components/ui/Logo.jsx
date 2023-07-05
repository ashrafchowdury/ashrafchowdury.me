import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className=" whitespace-nowrap font-['Sacramento'] text-xl sm:text-2xl md:text-[36px] lg:text-4xl ml-2 font-bold cursor-pointer">
        Ashraf Chowdury
      </h1>
    </Link>
  );
}
export default Logo 