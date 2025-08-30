import Image from "next/image";

type ProductGalleryProps = {
  images: string[];     // array di path (es. "/images/fotorolety/g1.webp")
  altBase: string;      // es. "Fotorolety – rolety z nadrukiem"
};

export default function ProductGallery({ images, altBase }: ProductGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-neutral-900">
        Przykłady realizacji
      </h2>

      {/* 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pb-12 pt-4">
        {images.map((src, i) => (
          <div key={src + i} className="group relative overflow-hidden rounded-xl ring-1 ring-neutral-200">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={src}
                alt={`${altBase} — przykład ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 48vw, 100vw"
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
