import { ProvidedServiceList, NoItemsFound } from "./style";
import { useContext, useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import {
  ProfileContext,
  iServices,
} from "../../contexts/ProfileContext/ProfileContext";
import { IoIosConstruct } from "react-icons/io";

export const ProvidedServicesFeedList = () => {
  const {
    activeServices,
    getActiveServices,
    doneServices,
    getDoneServices,
    canceledServices,
    getCanceledServices,
    clientsList,
    getClients,
    loadingProvider,
    setLoadingProvider,
  } = useContext(ProfileContext);

  const [filteredProvidedServices, setFilteredProvidedServices] = useState(
    [] as iServices[]
  );

  useEffect(() => {
    setLoadingProvider(true);
    getClients();
    getActiveServices();
    getDoneServices();
    getCanceledServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredProvidedServices([
      ...activeServices.reverse(),
      ...doneServices.reverse(),
      ...canceledServices.reverse(),
    ]);
  }, [activeServices, doneServices, canceledServices]);

  const isEmpty = filteredProvidedServices.length;
  const typeOfCard = "serviceProvided";

  return (
    <>
      {isEmpty > 0 && loadingProvider === false ? (
        <>
          <ProvidedServiceList>
            {filteredProvidedServices.map((service, index) => {
              const client = clientsList.filter((e) => {
                return service.userId === e.id;
              });
              return (
                <ServiceFeedCard
                  key={index}
                  typeOfCard={typeOfCard}
                  id={service.id}
                  image={client[0].avatar_URL}
                  name={client[0].name}
                  city={service.serviceCity}
                  state={service.serviceState}
                  status={service.status}
                  phone={client[0].phone}
                  email={client[0].email}
                  rating={Number(service.rating)}
                  date={service.createdAt}
                  description={service.description}
                />
              );
            })}
          </ProvidedServiceList>
        </>
      ) : (
        <NoItemsFound>
          {loadingProvider ? (
            <span>Aguarde, carregando contratações ...</span>
          ) : (
            <>
              <span>
                Não há prestadores de serviço cadastrados para a sua região ...
              </span>
              <div>
                <IoIosConstruct size={130} />
              </div>
            </>
          )}
        </NoItemsFound>
      )}
    </>
  );
};
