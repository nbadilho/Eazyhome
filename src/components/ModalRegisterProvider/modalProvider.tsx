import { Form, FormConteiner } from "../Form/style";
import {
  SelectConteiner,
  DivTitleModal,
  ErrorMsg,
  DivState,
  DivCity,
} from "./style";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import {
  iUserServiceRegister,
  UserContext,
} from "../../contexts/UserContext/UserContext";
import { CitiesContext } from "../../contexts/CitiesContext/CitiesContext";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FormHelperText } from "@mui/material";
import { SyncLoader } from "react-spinners";

interface iModalClientRegisterProps {
  setShowProviderModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowButtonContainer: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CssTextField = styled(TextField)({
  "& input[type=number]": {
    "-moz-appearance": "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
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

export function ModalProvidertRegister({
  setShowProviderModal,
  setShowButtonContainer,
}: iModalClientRegisterProps) {
  const { userServiceRegister, spinner, errorApi, setErrorApi } =
    useContext(UserContext);
  const {
    disable,
    statesList,
    selectState,
    servicesCategories,
    getStates,
    citiesList,
  } = useContext(CitiesContext);
  const [errorRegister, setErrorRegister] = useState(false);
  useEffect(() => {
    getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setErrorApi(false);
    setErrorRegister(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorRegister]);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial"
      )
      .min(8, "Senha precisa ter mais de 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "Senha não confere"),
    name: yup.string().required("Nome obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    workOnCities: yup.string().required("Cidade obrigatória"),
    workOnCategories: yup.string().required("Categoria obrigatória"),
    age: yup
      .number()
      .required("Idade obrigatória")
      .min(2, "Idade precisa ter mais de 2 caracteres "),
    phone: yup
      .string()
      .required("Contato obrigatório")
      .min(10, "Telefone precisa ter mais de 10 caracteres ")
      .max(11, "Telefone precisa ter menos de 12 caracteres "),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserServiceRegister>({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const onSubmitFuntion: SubmitHandler<iUserServiceRegister> = (data) => {
    delete data.confirmPassword;
    data = {
      ...data,
      ratings: [],
      type: "prestador",
      available: true,
      avatar_URL:
        "https://i.pinimg.com/originals/4b/3e/02/4b3e0279e016cc145240de10c8a06fb6.png",
    };
    userServiceRegister(data);
  };

  return (
    <FormConteiner>
      <DivTitleModal>
        <p>Cadastro provedor</p>
        <button
          onClick={() => {
            setShowButtonContainer(true);
            setShowProviderModal(false);
          }}
        >
          <IoMdArrowRoundBack />
        </button>
      </DivTitleModal>

      <Form onSubmit={handleSubmit(onSubmitFuntion)}>
        <CssTextField
          label="Nome"
          variant="outlined"
          type="text"
          placeholder="Digite seu nome..."
          {...register("name")}
          error={!!errors.name}
          helperText={(errors.name as any)?.message}
        />
        <CssTextField
          label="E-mail"
          variant="outlined"
          type="email"
          placeholder="Digite seu email..."
          error={!!errors.email}
          {...register("email")}
          helperText={(errors.email as any)?.message}
          onKeyUp={
            errorApi
              ? () => setErrorRegister(true)
              : () => setErrorRegister(false)
          }
        />
        <CssTextField
          label="Senha"
          variant="outlined"
          type="password"
          placeholder="Digite sua senha..."
          {...register("password")}
          error={!!errors.password}
          helperText={(errors.password as any)?.message}
        />
        <CssTextField
          label="Confirmar Senha"
          variant="outlined"
          type="password"
          placeholder="Digite sua senha novamente..."
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={(errors.confirmPassword as any)?.message}
        />

        <CssTextField
          label="Idade"
          variant="outlined"
          type="number"
          placeholder="Digite sua idade..."
          {...register("age")}
          error={!!errors.age}
          helperText={(errors.age as any)?.message}
        />
        <CssTextField
          label="Telefone"
          variant="outlined"
          type="text"
          placeholder="Digite seu número..."
          {...register("phone")}
          error={!!errors.phone}
          helperText={(errors.phone as any)?.message}
        />
        <SelectConteiner>
          <DivState style={{ textAlign: "left" }}>
            <FormControl>
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "var(--color-primary)",
                }}
              >
                Estado
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Estado"
                {...register("state")}
                onChange={selectState}
                error={!!errors.state}
                sx={{
                  color: "var(--color-primary)",
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "2px solid var(--color-opposite-1)",
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "var(--color-opposite-1) !important",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid var(--color-primary)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid var(--color-primary)",
                  },
                  "&:hover ": {
                    ".MuiSvgIcon-root ": {
                      fill: "var(--color-primary) !important",
                    },
                  },
                }}
              >
                {statesList.map((e) => {
                  return (
                    <MenuItem key={e.id} value={e.sigla}>
                      {e.sigla}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>{(errors.state as any)?.message}</FormHelperText>
            </FormControl>
          </DivState>
          <DivCity style={{ textAlign: "left" }}>
            <FormControl>
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "var(--color-primary)",
                }}
              >
                Cidade
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Cidade"
                disabled={disable}
                {...register("workOnCities")}
                error={!!errors.workOnCities}
                sx={{
                  color: "var(--color-primary)",
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "2px solid var(--color-opposite-1)",
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "var(--color-opposite-1) !important",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid var(--color-primary)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid var(--color-primary)",
                  },
                  "&:hover ": {
                    ".MuiSvgIcon-root ": {
                      fill: "var(--color-primary) !important",
                    },
                  },
                }}
              >
                {citiesList.map((e) => {
                  return (
                    <MenuItem key={e.nome} value={e.nome}>
                      {e.nome}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>
                {(errors.workOnCities as any)?.message}
              </FormHelperText>
            </FormControl>
          </DivCity>
        </SelectConteiner>
        <FormControl>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "var(--color-primary)",
            }}
          >
            Serviços
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Serviços"
            {...register("workOnCategories")}
            error={!!errors.workOnCategories}
            sx={{
              color: "var(--color-primary)",
              ".MuiOutlinedInput-notchedOutline": {
                border: "2px solid var(--color-opposite-1)",
              },
              ".MuiSvgIcon-root ": {
                fill: "var(--color-opposite-1) !important",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "2px solid var(--color-primary)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "2px solid var(--color-primary)",
              },
              "&:hover ": {
                ".MuiSvgIcon-root ": {
                  fill: "var(--color-primary) !important",
                },
              },
            }}
          >
            {servicesCategories.map((e) => {
              return (
                <MenuItem key={e.name} value={e.name}>
                  {e.name}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>
            {(errors.workOnCategories as any)?.message}
          </FormHelperText>
        </FormControl>
        {errorApi ? <ErrorMsg>Email já existente</ErrorMsg> : <></>}
        <button type="submit" disabled={spinner}>
          {spinner ? <SyncLoader color="#FFFFFF" size={8} /> : "Cadastrar"}
        </button>
      </Form>
    </FormConteiner>
  );
}
