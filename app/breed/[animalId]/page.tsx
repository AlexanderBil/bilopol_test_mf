import BreedsList from '@/app/components/BreedsList/BreedsList';
import CardInfo from '@/app/components/CardInfo/CardInfo';
import axios from 'axios';

const getAnimalInfo = async (id: string, type: string) => {
  try {
    const { data: response } = await axios.get(
      `https://api.${
        type === 'cat' ? 'thecatapi.com' : 'thedogapi.com'
      }/v1/images/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllAnimalByBreed = async (id: string, type: string) => {
  try {
    const { data: response } = await axios.get(
      `https://api.${
        type === 'cat' ? 'thecatapi.com' : 'thedogapi.com'
      }/v1/images/search?limit=10&breed_ids=${id}&api_key=${
        type === 'cat'
          ? 'live_eNEOZGX3usWy907wo7dE1MUXyO8cK0LxC9KK4rXFsmAgrbZxrZi7p7H4yOejQ3nw'
          : 'live_5eVxKDRfFmkn79p9PH5OFnySKsHFfSHHAU6KdqY4yKrar2a8jvlYOl90tSKk8V4o'
      }`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export interface NextPageProps {
  params: { animalId: string };
  searchParams?: any;
}

export default async function BreedId({
  params: { animalId },
  searchParams: { type, breedId },
}: NextPageProps) {
  const infoData = await getAnimalInfo(animalId, type);
  const infoDataBreed = await getAllAnimalByBreed(breedId, type);

  console.log('infoDataBreed', infoDataBreed);

  return (
    <div className="bg-gray-900 text-white">
      <CardInfo data={infoData} />

      <div className="flex max-w-full flex-wrap items-center sm:justify-center md:justify-start">
        {infoDataBreed &&
          infoDataBreed.map((animals: any) => (
            <BreedsList key={animals.id} animals={animals} />
          ))}
      </div>
    </div>
  );
}
