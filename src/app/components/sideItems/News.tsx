"use client";
import Image from "next/image";
import news from "../../assets/img/News widget.png"

const News = () => {
  return (
    <div
    id="imgcomp"
    className="rounded-xl text-center  flex justify-center items-center"
  >
    <Image
      height={300}
      width={200}
      src={news.src}
      alt="News"
      className="object-contain w-[15rem] "
    />
  </div>
  )
}

export default News