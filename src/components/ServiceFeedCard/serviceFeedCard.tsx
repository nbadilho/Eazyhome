import {
  FeedCardButton,
  FeedItem,
  FeedItemBody,
  FeedItemDetails,
  FeedItemHeader,
  FeedItemImage,
  FeedItemTitle,
  FeedRating,
} from "./style";
import { Button } from "../Button/Button";
import { useState } from "react";
import { ModalHireService } from "../ModalHireService/modalHireService";
import { ModalCloseService } from "../ModalCloseService/modalCloseService";

interface iServiceFeed {
  typeOfCard: string;
  id: number;
  image?: string;
  name: string;
  date?: string;
  city?: string;
  state?: string;
  category?: string;
  phone: string;
  email: string;
  age?: number;
  status?: string;
  rating: number;
  description?: string;
}

export const ServiceFeedCard = ({
  typeOfCard,
  id,
  image,
  name,
  date,
  city,
  state,
  category,
  phone,
  email,
  age,
  status,
  rating,
  description,
}: iServiceFeed) => {
  const [showHireServiceModal, setShowHireServiceModal] = useState(false);
  const [showCloseOrCancelServiceModal, setShowCloseOrCancelServiceModal] =
    useState(false);

  let colorOfCard = "negative";
  if (rating === 99) {
    colorOfCard = "tertiary";
  } else if (rating >= 2.5 && rating <= 5) {
    colorOfCard = "opposite";
  } else if (rating >= 0 && rating < 2.5) {
    colorOfCard = "primary";
  }

  let serviceCategory = "";
  category && (serviceCategory = category);

  let serviceImage = "";
  image && (serviceImage = image);

  let serviceDate = "";
  date && (serviceDate = date);

  let serviceDescription = "";
  description && (serviceDescription = description);

  let serviceStatus = "";
  status === "canceled" && (serviceStatus = "CANCELADO");
  status === "active" && (serviceStatus = "EM ANDAMENTO");
  status === "done" && (serviceStatus = "CONCLUÍDO");

  return (
    <>
      <FeedItem colorOfCardFeed={colorOfCard}>
        <FeedItemImage>
          <img src={image} alt="foto" />
        </FeedItemImage>
        <FeedItemBody>
          <FeedItemHeader colorOfCardFeed={colorOfCard}>
            <span>{typeOfCard !== "serviceProvided" ? category : name}</span>
            <FeedRating>
              <span>
                {serviceStatus === "EM ANDAMENTO" && serviceStatus}
                {serviceStatus === "CONCLUÍDO" && `AVALIAÇÃO: ${rating}/5`}
                {serviceStatus === "CANCELADO" && rating === -1 && "CANCELADO"}
                {!serviceStatus && `AVALIAÇÃO: ${rating}/5`}
              </span>
            </FeedRating>
          </FeedItemHeader>
          <FeedItemTitle>
            <div>
              {typeOfCard !== "serviceProvided"
                ? `Profissional: ${name}`
                : `Cidade: ${city} - ${state}`}
            </div>
            <div>{typeOfCard !== "providersList" && `Data: ${date}`}</div>
          </FeedItemTitle>
          <FeedItemDetails>
            <div>{`Telefone: ${phone}`}</div>
            <div>{`E-mail: ${email}`}</div>
            <div>
              {typeOfCard === "providersList"
                ? `Idade: ${age}`
                : serviceStatus !== "CANCELADO" && `Descrição: ${description}`}
            </div>
          </FeedItemDetails>
          <FeedCardButton>
            {typeOfCard === "providersList" ? (
              <Button
                text="Contratar"
                callback={() => setShowHireServiceModal(true)}
              />
            ) : (
              typeOfCard === "hiredProvidersList" &&
              serviceStatus === "EM ANDAMENTO" && (
                <Button
                  text="Concluir"
                  callback={() => setShowCloseOrCancelServiceModal(true)}
                />
              )
            )}
          </FeedCardButton>
        </FeedItemBody>
      </FeedItem>
      {showHireServiceModal && (
        <ModalHireService
          setShowHireServiceModal={setShowHireServiceModal}
          id={id}
          image={serviceImage}
          name={name}
          category={serviceCategory}
          phone={phone}
          email={email}
        />
      )}
      {showCloseOrCancelServiceModal && (
        <ModalCloseService
          setShowCloseOrCancelServiceModal={setShowCloseOrCancelServiceModal}
          id={id}
          image={serviceImage}
          name={name}
          category={serviceCategory}
          phone={phone}
          email={email}
          date={serviceDate}
          description={serviceDescription}
          status={serviceStatus}
        />
      )}
    </>
  );
};
