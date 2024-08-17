import Link from 'next/link';
import Image from 'next/image';

export default function Card({ card }: any) {
  return (
    <div className="w-320 h-320 flex flex-col items-center text-white border-4 relative">
      <Image
        unoptimized
        src={card.url}
        alt="Animal"
        width={0}
        height={0}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {card.breeds.length !== 0 && (
        <Link
          className="absolute bottom-2 bg-black p-2 rounded-xl"
          href={{
            pathname: `/breed/${card.id}`,
            query: { type: card.type, breedId: card.breeds[0].id },
          }}
        >
          {card.breeds[0].name}
        </Link>
      )}
    </div>
  );
}
