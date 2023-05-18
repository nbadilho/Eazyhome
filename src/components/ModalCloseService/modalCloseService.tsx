import { BackGroundForm } from "../BackgroundModal/style";
import {
  CloseButtons,
  FirstLine,
  ItemBody,
  ItemImage,
  LeftColumn,
  ModalContainer,
  ModalDiv,
  RatingDiv,
  RightColumn,
  SecondLine,
  StatusDiv,
  DivTitleModal,
} from "./style";
import { Button } from "../Button/Button";
import { useContext, useState } from "react";
import { StarRating } from "../StarRating/StarRating";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";
import { RiCloseLine } from "react-icons/ri";

interface iModalHireServiceProps {
  setShowCloseOrCancelServiceModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  id: number | undefined;
  image: string | undefined;
  name: string;
  category: string;
  phone: string;
  email: string;
  date: string;
  description: string;
  status: string;
}

export const ModalCloseService = ({
  setShowCloseOrCancelServiceModal,
  id,
  image,
  name,
  category,
  phone,
  email,
  date,
  description,
  status,
}: iModalHireServiceProps) => {
  const [showRatingStars, setShowRatingStars] = useState(false);
  const [rating, setRating] = useState(0);
  const { cancelService, finishService, getCanceledServices, getDoneServices } =
    useContext(ProfileContext);

  const handleCancelService = () => {
    id && cancelService(id);
    getCanceledServices();
    setShowCloseOrCancelServiceModal(false);
  };

  const handleCloseService = () => {
    setShowRatingStars(true);
  };

  const handleRatingAndCloseService = () => {
    const data = { id: Number(id), rating: rating };
    finishService(data);
    getDoneServices();
    setShowCloseOrCancelServiceModal(false);
  };

  return (
    <BackGroundForm>
      <ModalContainer>
        <DivTitleModal>
          <p>Finalizar contratação</p>
          <button
            onClick={() => {
              setShowCloseOrCancelServiceModal(false);
            }}
          >
            <RiCloseLine />
          </button>
        </DivTitleModal>
        <ModalDiv>
          <ItemImage>
            <img src={image} alt="foto" />
          </ItemImage>
          <ItemBody>
            <span>{category}</span>
            <span>{`Profissional: ${name}`}</span>
            <span>{`Telefone: ${phone}`}</span>
            <span>{`E-mail: ${email}`}</span>
          </ItemBody>
        </ModalDiv>
        <StatusDiv>
          <FirstLine>
            <span>{status}</span>
            <span>{`Data:${date}`}</span>
          </FirstLine>
          <SecondLine>
            <span>{description}</span>
          </SecondLine>
        </StatusDiv>
        {!showRatingStars ? (
          <CloseButtons>
            <Button
              type="button"
              text="Cancelar"
              callback={handleCancelService}
            />
            <Button
              type="button"
              text="Concluir"
              callback={handleCloseService}
            />
          </CloseButtons>
        ) : (
          <RatingDiv>
            <LeftColumn>
              <span>Avalie o atendimento: </span>
              <StarRating rating={rating} setRating={setRating} />
            </LeftColumn>
            <RightColumn>
              <Button
                type="button"
                text="Enviar"
                callback={handleRatingAndCloseService}
              />
            </RightColumn>
          </RatingDiv>
        )}
      </ModalContainer>
    </BackGroundForm>
  );
};
