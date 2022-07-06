import { FeaturedItem } from './FeaturedItem';
import { FeaturedContainer } from './featured.tw';
import { useFetchData } from '../../../../hooks/userFetch';

interface Props {}

export const Featured = (props: Props) => {
  const { data, loading, error } = useFetchData(
    '/hotels/countByCity?cities=City1,City2,City3'
  );

  return (
    <>
      <FeaturedContainer>
        {loading ? (
          'Loading please wait...'
        ) : (
          <>
            <FeaturedItem
              city="City1"
              cityViewImage="https://i.ibb.co/XsdmR2c/3.png"
              listedPropertyCount={data[0]}
            />
            <FeaturedItem
              city="City2"
              cityViewImage="https://i.ibb.co/XsdmR2c/3.png"
              listedPropertyCount={data[1]}
            />
            <FeaturedItem
              city="City3"
              cityViewImage="https://i.ibb.co/XsdmR2c/3.png"
              listedPropertyCount={data[2]}
            />
          </>
        )}
      </FeaturedContainer>
    </>
  );
};
