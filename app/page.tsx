import Card from './components/Card/Card';
import { Search } from './components/Search/Search';

async function getCats(query: string) {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=${query}&api_key=live_eNEOZGX3usWy907wo7dE1MUXyO8cK0LxC9KK4rXFsmAgrbZxrZi7p7H4yOejQ3nw`,
    {
      next: { revalidate: 15 },
    }
  );

  const result = await res.json();
  return result;
}

async function getDogs(query: string) {
  const res = await fetch(
    `https://api.thedogapi.com/v1/images/search?limit=20&breed_ids=${query}&api_key=live_5eVxKDRfFmkn79p9PH5OFnySKsHFfSHHAU6KdqY4yKrar2a8jvlYOl90tSKk8V4o`,
    {
      next: { revalidate: 15 },
    }
  );
  const result = await res.json();
  return result;
}

interface SearchParamsProps {
  searchParams?: {
    breed_ids?: string;
  };
}

export default async function Home({ searchParams }: SearchParamsProps) {
  const query = searchParams?.breed_ids ?? '';

  const catsData = await getCats(query);
  const dogsData = await getDogs(query);

  const catsDataFromType = catsData.reduce((acc:any, item:any) => {
    const newObj = { ...item, type: 'cat' };
    acc.push(newObj);
    return acc;
  }, []);

  const dogsDataFromType = dogsData.reduce((acc:any, item:any) => {
    const newObj = { ...item, type: 'dog' };
    acc.push(newObj);
    return acc;
  }, []);

  function makeRandomArr(a:any, b:any) {
    return Math.random() - 0.5;
  }

  const animalsData = [...catsDataFromType, ...dogsDataFromType];

  animalsData.sort(makeRandomArr);

  console.log('animalsData', animalsData);

  return (
    <div className="flex flex-col items-center bg-gray-900">
      <Search />
      <div className="grid grid-cols-4 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {animalsData &&
          animalsData.map((card) => <Card key={card.id} card={card} />)}
      </div>
    </div>
  );
}
