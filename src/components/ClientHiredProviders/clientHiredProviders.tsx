import { HiredProviderList, NoItemsFound } from "./style";
import { useContext, useEffect } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";
import { IoIosConstruct } from "react-icons/io";

export const ClientHiredProvidersFeedList = () => {
  const {
    activeServices,
    getActiveServices,
    doneServices,
    getDoneServices,
    canceledServices,
    getCanceledServices,
    providersList,
    getProviders,
    needChange,
    setNeedChange,
    filteredServices,
    setFilteredServices,
  } = useContext(ProfileContext);

  useEffect(() => {
    getProviders();
    setNeedChange(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getActiveServices();
    getDoneServices();
    getCanceledServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needChange]);

  useEffect(() => {
    setFilteredServices([
      ...activeServices.reverse(),
      ...doneServices.reverse(),
      ...canceledServices.reverse(),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeServices, doneServices, canceledServices]);

  const typeOfCard = "hiredProvidersList";

  return (
    <>
      {filteredServices.length > 0 ? (
        <>
          <HiredProviderList>
            {filteredServices.map((provider, index) => {
              const currentProvider = providersList.filter((prov) => {
                return provider.providerId === prov.id;
              });
              return (
                currentProvider.length > 0 && (
                  <ServiceFeedCard
                    key={index}
                    typeOfCard={typeOfCard}
                    id={provider.id}
                    image={currentProvider[0].avatar_URL}
                    name={currentProvider[0].name}
                    category={provider.type}
                    status={provider.status}
                    phone={currentProvider[0].phone}
                    email={currentProvider[0].email}
                    age={currentProvider[0].age}
                    rating={Number(provider.rating)}
                    date={provider.createdAt}
                    description={provider.description}
                  />
                )
              );
            })}
          </HiredProviderList>
        </>
      ) : (
        <NoItemsFound>
          <span>Nenhum serviço contratado</span>
          <div>
            <IoIosConstruct size={130} />
          </div>
        </NoItemsFound>
      )}
    </>
  );
};
