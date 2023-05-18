import { Footer } from "../../components/FooterRegisterAndLogin/footer";
import { NavLogin } from "../../components/NavLogin/navLogin";
import {
  ErrorMsg,
  LoginBackGround,
  LoginConteiner,
} from "../../pages/login/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../../components/Form/style";
import {
  UserContext,
  iUserLogin,
} from "../../contexts/UserContext/UserContext";
import { useContext, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { SyncLoader } from "react-spinners";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";

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

export const Login = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const { userLogin, spinner, errorApi, setErrorApi } = useContext(UserContext);
  const { autoLogin } = useContext(ProfileContext);

  useEffect(() => {
    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setErrorApi(false);
    setErrorLogin(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorLogin]);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial"
      )
      .min(8, "É necessário uma senha de pelos 8 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(formSchema),
    mode: "onTouched",
  });

  const onSubmitFunction: SubmitHandler<iUserLogin> = (data) => {
    userLogin(data);
  };

  return (
    <>
      <LoginBackGround>
        <NavLogin />
        <LoginConteiner>
          <div>
            <p>Login</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <CssTextField
              label="E-mail"
              variant="outlined"
              type="email"
              placeholder="Digite seu email..."
              {...register("email")}
              error={!!errors.email}
              helperText={(errors.email as any)?.message}
              onKeyUp={
                errorApi
                  ? () => setErrorLogin(true)
                  : () => setErrorLogin(false)
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
              onKeyUp={
                errorApi === true
                  ? () => setErrorLogin(true)
                  : () => setErrorLogin(false)
              }
            />
            {errorApi ? <ErrorMsg>Senha ou email incorretos</ErrorMsg> : <></>}
            <button type="submit" disabled={spinner}>
              {spinner ? <SyncLoader color="#FFFFFF" size={8} /> : "Entrar"}
            </button>
          </Form>
        </LoginConteiner>
        <Footer id="footer" />
      </LoginBackGround>
    </>
  );
};
