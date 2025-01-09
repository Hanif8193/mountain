import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PIC from "../../public/PIC.jpg";
import { Rochester } from "next/font/google";

const rochester = Rochester({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
async function Home() {
  const qurey = `*[_type=="mountain"]{image,title,summary,content
,"slug":slug.current  
}`;
  const data: Mountain[] = await client.fetch(qurey);
  console.log(data);

  return (
    <div className="bg-blue-900">
      <section>
        <h2 className="text-white text-center text-xl sm:text-2xl md:text-3xl py-3">
          {" "}
          <p className={rochester.className}> BEAUTIFUL CREATION Of GOD</p>
        </h2>

        <h2 className="w-full px-10">
          {" "}
          <Image src={PIC} alt="PIC" width={900} height={100}></Image>
        </h2>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 md: lg: gap-5 px-10">
        {data.map((data: Mountain) => (
          <h2>
            <Image
              src={urlFor(data.image).url()}
              alt="Img"
              width={200}
              height={200}
              className="mt-10 w-full"
            />

            <p className="mt-1 text-white">{data.title} </p>
            <br />
            <p className="mb-10 text-white">{data.summary}</p>
            <Link href={`/blog/${data.slug}`} className="text-white">
              {" "}
              <p>
                Learn More

              </p>{" "}
            </Link>
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Home;
