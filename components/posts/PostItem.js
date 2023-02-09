import Link from "next/link";
import Image from "next/image";

import classes from "./PostItem.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li
      className={`flex flex-1 items-center justify-center  shadow-3xl w-[100%] h-[100%] bg-black rounded-3xl ${classes.post}`}
    >
      <Link
        href={linkPath}
        className="flex flex-col overflow-hidden justify-center items-center border-2 rounded-3xl hover:border-yellow-300 hover:zoom border-white image-box"
      >
        <div className={`flex justify-center  items-center  `}>
          <Image
            className="   sm:w-[30rem] object-cover sm:h-[15rem]  w-[100%] h-[100%]  "
            src={imagePath}
            alt={title}
            width={300}
            height={300}
            // layout="responsive"
          />
        </div>
        <div className="  w-full   px-5 py-5 text-center  rounded-b-3xl flex flex-col justify-end    bg-black h-full ">
          <h3 className="font-poppins text-2xl font-bold text-yellow-300 sm:max-w-[25rem] max-w-[17rem] ">
            {title}
          </h3>
          <time className=" sm:max-w-[25rem]  max-w-[17rem] text-white">
            {formattedDate}
          </time>
          <p className="sm:max-w-[25rem] text-white font-semibold  max-w-[17rem]">
            {excerpt}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
