import { ProviderList, NoItemsFound } from "./style";
import { useContext, useEffect } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";
import { IoIosConstruct } from "react-icons/io";

export const ClientProvidersFeedList = () => {
  const { category, filterProviderByCategory, filteredProviders } =
    useContext(ProfileContext);

  useEffect(() => {
    filterProviderByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const isNotEmpty = filteredProviders.length;
  const typeOfCard = "providersList";

  const roundRating = (number: number) => {
    const pow = Math.pow(10, 1);
    return Math.round(number * pow) / pow;
  };

  return (
    <>
      {isNotEmpty ? (
        <>
          <ProviderList>
            {filteredProviders.map((provider, index) => (
              <ServiceFeedCard
                key={index}
                typeOfCard={typeOfCard}
                id={Number(provider.id)}
                image={provider.avatar_URL}
                name={provider.name}
                category={category}
                phone={provider.phone}
                email={provider.email}
                age={provider.age}
                rating={
                  provider.ratings.length > 0
                    ? roundRating(
                        provider.ratings.reduce(
                          (accumulator, value) => accumulator + value,
                          0
                        ) / provider.ratings.length
                      )
                    : 0
                }
              />
            ))}
          </ProviderList>
        </>
      ) : (
        <NoItemsFound>
          <span>
            Não há prestadores de serviço cadastrados para a sua região ...
          </span>
          <div>
            <IoIosConstruct size={130} />
          </div>
        </NoItemsFound>
      )}
    </>
  );
};
