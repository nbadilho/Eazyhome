import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { Form } from "../Form/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BackGroudModalPassword, ModalPassword, DivTitleModal } from "./style";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";
import { CssTextField } from "../../pages/login/login";
import { RiCloseLine } from "react-icons/ri";

interface IChangePasswordForm {
  password: string;
  confirmarNovaSenha?: string;
}

export interface IData {
  password: string;
  confirmarNovaSenha?: string;
}

interface ISTATE {
  modalPassword: boolean;
  setModalPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalChangePassword = ({
  modalPassword,
  setModalPassword,
}: ISTATE) => {
  const { changePassword } = useContext(ProfileContext);

  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial"
      )
      .min(8, "Senha precisa ter mais de 8 caracteres"),
    confirmarNovaSenha: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePasswordForm>({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  function ChangePasswordData(data: IData) {
    delete data.confirmarNovaSenha;
    changePassword(data);
    setModalPassword(false);
  }

  return (
    <div>
      {modalPassword ? (
        <BackGroudModalPassword>
          <ModalPassword>
            <DivTitleModal>
              <p>Alterar senha</p>
              <button id="closeButton" onClick={() => setModalPassword(false)}>
                <RiCloseLine />
              </button>
            </DivTitleModal>

            <Form onSubmit={handleSubmit(ChangePasswordData)}>
              <CssTextField
                label="Nova senha"
                variant="outlined"
                type="password"
                placeholder="Digite a nova senha..."
                {...register("password")}
                error={!!errors.password}
                helperText={(errors.password as any)?.message}
              />
              <TextField
                label="Confirme a nova senha"
                variant="outlined"
                type="password"
                placeholder="confirme a senha..."
                {...register("confirmarNovaSenha")}
                error={!!errors.confirmarNovaSenha}
                helperText={(errors.confirmarNovaSenha as any)?.message}
              />
              <button id="changePassword">Alterar senha</button>
            </Form>
          </ModalPassword>
        </BackGroudModalPassword>
      ) : (
        ""
      )}
    </div>
  );
};
