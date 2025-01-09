
// Replace with your Sanity Client path
import { client } from "@/sanity/lib/client"; // Ensure correct path
import { urlFor } from "@/sanity/lib/image"; // Ensure correct path
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const query = `*[_type == "mountain" && slug.current == $slug][0]{
    image, 
    title, 
    summary, 
    content
  }`;

  const mountain = await client.fetch(query, { slug: params.slug });

  if (!mountain) {
    return <div>Mountain not found</div>; // Fallback if no data is found
  }

  return (
    <div className="p-10">
      {mountain.image && (
        <Image
          src={urlFor(mountain.image).url()}
          alt={mountain.title || "Mountain Image"}
          width={800}
          height={400}
          className="mt-10 w-full"
        />
      )}

      <h1 className="text-3xl font-bold mt-5">{mountain.title}</h1>
      <p className="mt-5 text-gray-700">{mountain.summary}</p>

      <div className="mt-10">
        <PortableText value={mountain.content} />
      </div>
    </div>
  );
}
