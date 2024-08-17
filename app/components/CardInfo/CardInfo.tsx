import Link from 'next/link';
import Image from 'next/image';

export default function CardInfo({ data }: any) {
  const { url, breeds } = data;
  return (
    <div className="flex flex-col w-4/5 pt-4 mx-5">
      <Link className="mb-5" href="/">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Back
        </button>
      </Link>
      <Image
        unoptimized
        src={data.url}
        alt="Animal"
        width={500}
        height={500}
        style={{
          objectFit: 'cover',
          border: '4px solid #ffff',
          marginBottom: '10px',
        }}
      />
      <p><span className='font-extrabold border-b-2'>Name: </span>{breeds[0].name}</p>
      {breeds[0].description && <p> <span className='font-extrabold border-b-2'>About: </span> {breeds[0].description}</p>}
      <p> <span className='font-extrabold border-b-2'>Temperament: </span> {breeds[0].temperament}</p>
      <p> <span className='font-extrabold border-b-2'>Life:</span> {breeds[0].life_span}</p>
    </div>
  );
}
