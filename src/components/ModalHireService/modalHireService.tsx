import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../Form/style";
import {
  HireButton,
  ItemBody,
  ItemImage,
  ModalContainer,
  ModalDiv,
  DivTitleModal,
} from "./style";
import TextField from "@mui/material/TextField";
import { Button } from "../Button/Button";
import { BackGroundForm } from "../BackgroundModal/style";
import moment from "moment";
import {
  iServices,
  ProfileContext,
} from "../../contexts/ProfileContext/ProfileContext";
import api from "../../service/api";
import { iUserClient } from "../../contexts/UserContext/UserContext";
import { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { RiCloseLine } from "react-icons/ri";

interface iModalHireServiceProps {
  setShowHireServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  image: string;
  name: string;
  category: string;
  phone: string;
  email: string;
}

export interface iUserDescription {
  description: string;
}

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "var(--color-primary)",
  },
  "& .MuiFormLabel-root": {
    color: "var(--color-opposite-1)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid var(--color-opposite-1)",
    },
    "&:hover fieldset": {
      border: "2px solid var(--color-primary)",
    },
  },
});

export const ModalHireService = ({
  setShowHireServiceModal,
  id,
  image,
  name,
  category,
  phone,
  email,
}: iModalHireServiceProps) => {
  const [userInfos, setUserInfos] = useState<iUserClient | null>(null);
  const { hireService, getActiveServices } = useContext(ProfileContext);
  const getInfos = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.get(
        `users/${localStorage.getItem("@Id:EazyHome")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
      setUserInfos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfos();
  }, []);

  const hireFormSchema = yup.object().shape({
    description: yup
      .string()
      .min(5, "A descrição deve ter no mínimo 5 caracteres")
      .max(200, "A descrição deve ter no máximo 255 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iServices>({
    mode: "onTouched",
    resolver: yupResolver(hireFormSchema),
  });

  const idProvider = id;
  const idClient = Number(localStorage.getItem("@Id:EazyHome"));

  const onSubmitFuntion: SubmitHandler<iServices> = (data) => {
    if (userInfos !== null) {
      const hireData = {
        userId: idClient,
        providerId: idProvider,
        description: data.description,
        type: category,
        serviceCity: userInfos.city,
        serviceState: userInfos.state,
        status: "active",
        rating: 99,
        createdAt: moment().format("DD/MM/YYYY"),
      } as iServices;

      hireService(hireData);
      getActiveServices();
      setShowHireServiceModal(false);
    }
  };

  return (
    <BackGroundForm>
      <ModalContainer>
        <DivTitleModal>
          <p>Contratar servidor</p>
          <button
            onClick={() => {
              setShowHireServiceModal(false);
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
        <Form onSubmit={handleSubmit(onSubmitFuntion)}>
          <CssTextField
            label="Descrição do serviço"
            variant="outlined"
            type="text"
            placeholder="Digite a descrição do serviço..."
            {...register("description")}
            error={!!errors.description}
            helperText={(errors.description as any)?.message}
          />
          <HireButton>
            <Button type="submit" text="Contratar" />
          </HireButton>
        </Form>
      </ModalContainer>
    </BackGroundForm>
  );
};
