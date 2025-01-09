
 // Replace with your Sanity client path
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const query = groq`*[_type == "mountain" && slug.current == $slug][0]`;
  const mountain = await client.fetch(query, { slug: params.slug });

  if (!mountain) {
    return <div>Mountain not found</div>;
  }

  return (
    <div className="p-10">

       <Image
                    src={urlFor(mountain.image).url()}
                    alt="Img"
                    width={200}
                    height={200}
                    className="mt-10 w-full"
                  />

      <h1 className="text-3xl font-bold">{mountain.title}</h1>
      <p className="mt-5">{mountain.summary}</p>
     <p className='mt-10'> <PortableText value={mountain.content} /></p>
      
    </div>
  );
}
