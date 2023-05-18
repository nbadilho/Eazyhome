import React, { useContext, useEffect, useState } from "react";
import {
  DashContent,
  DashNav,
  DashboardClientConteiner,
  SectionDashboardClientTop,
  Services,
  TextSectionTop,
  DivEditProfile,
  DivEditProfileHeader,
  AddCity,
  StateAndButton,
  CoverLabelStateSpan,
  SelectCity,
  Age,
  DivPhone,
  DivEditNomeEmail,
  FormEdit,
  CoverAgePhone,
  ContentServices,
  ListService,
} from "../../Dashboard/client/style";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { OrangeCard } from "../../../components/CardOrange/card";
import { BlueCard } from "../../../components/CardBlue/card";
import { NavDashboardClient } from "../../../components/NavDashboard/navBarDashboard";
import { Footer } from "../../../components/Footer/Footer";
import { ProfileContext } from "../../../contexts/ProfileContext/ProfileContext";
import { CitiesContext } from "../../../contexts/CitiesContext/CitiesContext";
import { ClientProvidersFeedList } from "../../../components/ClientProvidersFeedList/clientProvidersFeedList";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { iUserClient } from "../../../contexts/UserContext/UserContext";
import { FormHelperText, MenuItem, Select } from "@mui/material";
import { ModalChangePassword } from "../../../components/ModalChangePassword/ModalChangePassword";
import { ClientHiredProvidersFeedList } from "../../../components/ClientHiredProviders/clientHiredProviders";
import api from "../../../service/api";
import { CssTextField } from "../../login/login";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export const DashboardClient = () => {
  const [open, setOpen] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("service");
  const stylesItems = { textAlign: "right", fontSize: 10 };
  const {
    isLogged,
    getProviders,
    setCategory,
    category,
    getActiveServices,
    getCanceledServices,
    getDoneServices,
    getPhoto,
    editProfile,
  } = useContext(ProfileContext);
  const {
    disable,
    statesList,
    citiesList,
    selectState,
    getStates,
    servicesCategories,
  } = useContext(CitiesContext);

  useEffect(() => {
    isLogged();
    getProviders();
    getStates();
    getActiveServices();
    getDoneServices();
    getCanceledServices();
    getPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [getClientInfo, setClientInfo] = useState<iUserClient>();

  const getClientInfos = async () => {
    const id = localStorage.getItem("@Id:EazyHome");
    try {
      const response = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
        },
      });
      setClientInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClientInfos();
  }, []);

  const handleClickService = () => {
    setOpen(!open);
    setSelectedOption("service");
    setCategory("");
  };

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    name: yup.string().required("Nome obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    age: yup
      .number()
      .required("Idade obrigatória")
      .min(2, "Idade precisa ter mais de 2 caracteres "),
    phone: yup
      .string()
      .required("Contato obrigatório")
      .min(10, "Telefone precisa ter mais de 10 caracteres ")
      .max(11, "Telefone precisa ter menos de 12 caracteres "),
    avatar_URL: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserClient>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const [modalPassword, setModalPassword] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [workStateEdit, setStateEdit] = useState("");

  const handleSubmitEditForm = (data: iUserClient) => {
    editProfile(data);
    localStorage.setItem("@UserCity:EazyHome", data.city);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let city = "";

  const getStateEditForm = (e: any) => {
    e.preventDefault();
    selectState(e);
    setStateEdit(e.target.value);
  };

  const getCityEditForm = (e: any) => {
    e.preventDefault();
    city = e.target.value;
  };

  const categoryChange = (e: any) => {
    setCategory(e);
    setSelectedOption("service");
  };

  return (
    <DashboardClientConteiner>
      <ModalChangePassword
        modalPassword={modalPassword}
        setModalPassword={setModalPassword}
      />
      <NavDashboardClient />

      <SectionDashboardClientTop id="top">
        <div>
          <TextSectionTop>
            Precisando de um profissional para manutenção residencial? O lugar é
            aqui!
          </TextSectionTop>
        </div>
      </SectionDashboardClientTop>

      <DashContent>
        <DashNav>
          <List component="ul" disablePadding sx={stylesItems}>
            <ListItemButton onClick={handleClickService}>
              <ListItemText primary="SERVIÇOS" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="ul" disablePadding>
                {servicesCategories.map((e, index) => {
                  return (
                    <ListItemButton
                      key={index}
                      defaultValue={e.name}
                      sx={{ pl: 4 }}
                      onClick={() => categoryChange(e.name)}
                    >
                      <ListItemText primary={e.name} className="NavSubItem" />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
            <ListItemButton onClick={() => setSelectedOption("perfil")}>
              <ListItemText primary="EDITAR PERFIL" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedOption("contratacao")}>
              <ListItemText primary="CONTRATAÇÕES" />
            </ListItemButton>
          </List>
        </DashNav>
        {selectedOption === "service" && category === "" ? (
          <Services id="services">
            <ContentServices>
              <h3>- Serviços -</h3>
              <ListService>
                {servicesCategories.map((service, index) => {
                  const result = index % 2;
                  return !result ? (
                    <OrangeCard
                      img={service.image}
                      type={service.name}
                      onClick={() => setCategory(service.name)}
                    />
                  ) : (
                    <BlueCard
                      img={service.image}
                      type={service.name}
                      onClick={() => setCategory(service.name)}
                    />
                  );
                })}
              </ListService>
              <div></div>
            </ContentServices>
          </Services>
        ) : selectedOption === "perfil" ? (
          <DivEditProfile>
            <DivEditProfileHeader>
              <h3>Editar perfil</h3>
              <img src={getClientInfo?.avatar_URL} alt="" />
            </DivEditProfileHeader>

            <FormEdit onSubmit={handleSubmit(handleSubmitEditForm)}>
              <DivEditNomeEmail>
                <CssTextField
                  className="name"
                  label="Nome"
                  variant="outlined"
                  type="text"
                  placeholder={`${getClientInfo?.name}`}
                  {...register("name")}
                  error={!!errors.name}
                  helperText={(errors.name as any)?.message}
                />
                <CssTextField
                  className="email"
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  placeholder={`${getClientInfo?.email}`}
                  {...register("email")}
                  error={!!errors.email}
                  helperText={(errors.email as any)?.message}
                />
                <CssTextField
                  className="avatar"
                  label="Link do Avatar"
                  variant="outlined"
                  type="text"
                  placeholder={`${getClientInfo?.avatar_URL}`}
                  {...register("avatar_URL")}
                  error={!!errors.avatar_URL}
                  helperText={(errors.avatar_URL as any)?.message}
                />
              </DivEditNomeEmail>

              <AddCity>
                <StateAndButton>
                  <div>
                    <CoverLabelStateSpan>
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
                          onChange={getStateEditForm}
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
                        <FormHelperText>
                          {(errors.state as any)?.message}
                        </FormHelperText>
                      </FormControl>
                    </CoverLabelStateSpan>

                    <SelectCity>
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
                          {...register("city")}
                          onChange={getCityEditForm}
                          error={!!errors.city}
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
                              <MenuItem key={e.id} value={e.nome}>
                                {e.nome}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        <FormHelperText>
                          {(errors.city as any)?.message}
                        </FormHelperText>
                      </FormControl>
                    </SelectCity>
                  </div>
                </StateAndButton>

                <CoverAgePhone>
                  <Age>
                    <CssTextField
                      className="age"
                      label="Idade"
                      variant="outlined"
                      type="number"
                      placeholder={`${getClientInfo?.age}`}
                      {...register("age")}
                      error={!!errors.age}
                    />
                  </Age>
                  <DivPhone>
                    <CssTextField
                      label="Telefone"
                      variant="outlined"
                      type="text"
                      placeholder={`${getClientInfo?.phone}`}
                      {...register("phone")}
                      helperText={(errors.phone as any)?.message}
                      error={!!errors.phone}
                    />
                  </DivPhone>
                  <button onClick={() => setModalPassword(true)}>
                    Alterar Senha
                  </button>
                  <button type="submit">Salvar alterações</button>
                </CoverAgePhone>
              </AddCity>
            </FormEdit>
          </DivEditProfile>
        ) : selectedOption === "contratacao" ? (
          <ClientHiredProvidersFeedList />
        ) : (
          <ClientProvidersFeedList />
        )}
      </DashContent>
      <Footer id="footer" />
    </DashboardClientConteiner>
  );
};
