import Image from 'next/image';

export default function BreedsList({ animals }: any) {
  return (
    <div className="flex items-center my-2 mx-2 py-0 w-200 h-200 border-2 ">
      <Image
        unoptimized
        src={animals.url}
        alt="Animal"
        width={0}
        height={0}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
