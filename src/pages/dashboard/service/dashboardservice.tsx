import React, { useContext, useEffect, useRef, useState } from "react";
import {
  DashContent,
  DashNav,
  TextSectionTop,
  DivEditProfile,
  DivEditProfileHeader,
  WorkCities,
  AddCity,
  StateAndButton,
  CoverLabelStateSpan,
  SelectCity,
  Categories,
  SelectCategory,
  Age,
  DivPhone,
  DivEditNomeEmail,
  FormEdit,
  DivCoverCategory,
  CoverAgePhone,
  DashboardServiceConteiner,
  SectionDashboardServiceTop,
} from "../service/style";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Footer } from "../../../components/FooterRegisterAndLogin/footer";
import { ProfileContext } from "../../../contexts/ProfileContext/ProfileContext";
import { CitiesContext } from "../../../contexts/CitiesContext/CitiesContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  iUserClient,
  iUserService,
} from "../../../contexts/UserContext/UserContext";
import { FormHelperText, MenuItem, Select } from "@mui/material";
import { Button } from "../../../components/Button/Button";
import { ModalChangePassword } from "../../../components/ModalChangePassword/ModalChangePassword";
import { NavDashboardClient } from "../../../components/NavDashboard/navBarDashboard";
import { ProvidedServicesFeedList } from "../../../components/ProvidedServices/providedServices";
import { CssTextField } from "../../login/login";
import api from "../../../service/api";

export const DashboardService = () => {
  const [selectedOption, setSelectedOption] = React.useState("service");
  const stylesItems = { textAlign: "right", fontSize: 10 };
  const {
    isLogged,
    getActiveServices,
    getDoneServices,
    getCanceledServices,
    getPhoto,
    setLoadingProvider,
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

  const [getProviderInfo, setProviderInfo] = useState<iUserService>();

  useEffect(() => {
    isLogged();
    getDoneServices();
    getActiveServices();
    getCanceledServices();
    getStates();
    getPhoto();
    getClientInfos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editForm = useRef(null);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    name: yup.string().required("Nome obrigatorio"),
    state: yup.string().required("Estado obrigatorio"),
    city: yup.string().required("Cidade obrigatoria"),
    age: yup.number().required("Idade obrigatoria"),
    phone: yup.string().required("Contato obrigatorio"),
  });

  const getClientInfos = async () => {
    const id = localStorage.getItem("@Id:EazyHome");
    try {
      const response = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
        },
      });
      setProviderInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserClient>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
    defaultValues: {
      age: undefined,
      avatar_URL: "",
      city: "",
      email: "",
      name: "",
      phone: "",
      state: "",
    },
  });

  const [modalPassword, setModalPassword] = useState<boolean>(false);
  const [workCitiesEdit, setWorkCitiesEdit] = useState<string[]>([]);
  const [workStateEdit, setStateEdit] = useState("");
  const [categoriesEdit, setCategoriesEdit] = useState<string[]>([]);

  const handleSubmitEditForm = (data: iUserClient) => {
    editProfile(data);
    setSelectedOption("services");
    getPhoto();
  };

  let city = "";
  let cityState = "";

  const getStateEditForm = (e: any) => {
    e.preventDefault();
    selectState(e);
    setStateEdit(e.target.value);
  };

  const getCityEditForm = (e: any) => {
    e.preventDefault();
    city = e.target.value;
  };

  const setCitySubmit = () => {
    cityState = city + "-" + workStateEdit;
    setWorkCitiesEdit([...workCitiesEdit, cityState]);
  };

  let getCategory = "";
  const getCategories = (e: any) => {
    e.preventDefault();
    getCategory = e.target.value;
  };

  const setCategorySubmit = () => {
    setCategoriesEdit([...categoriesEdit, getCategory]);
  };

  const setLoadingProviders = () => {
    setLoadingProvider(true);
  };

  return (
    <DashboardServiceConteiner>
      <ModalChangePassword
        modalPassword={modalPassword}
        setModalPassword={setModalPassword}
      />
      <NavDashboardClient />

      <SectionDashboardServiceTop id="top">
        <div>
          <TextSectionTop>
            Complete seu cadastro e conecte-se a mais clientes na sua região!
          </TextSectionTop>
        </div>
      </SectionDashboardServiceTop>

      <DashContent>
        <DashNav>
          <List component="ul" disablePadding sx={stylesItems}>
            <ListItemButton onClick={() => setSelectedOption("services")}>
              <ListItemText
                primary="SERVIÇOS PRESTADOS"
                onClick={() => setLoadingProviders}
              />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedOption("perfil")}>
              <ListItemText primary="EDITAR PERFIL" />
            </ListItemButton>
          </List>
        </DashNav>
        {selectedOption === "perfil" ? (
          <DivEditProfile>
            <DivEditProfileHeader>
              <h3>Editar perfil</h3>
              <img src={getProviderInfo?.avatar_URL} alt="" />
            </DivEditProfileHeader>

            <FormEdit
              onSubmit={handleSubmit(handleSubmitEditForm)}
              ref={editForm}
            >
              <DivEditNomeEmail>
                <CssTextField
                  className="name"
                  label="Nome"
                  variant="outlined"
                  type="text"
                  placeholder={`${getProviderInfo?.name}`}
                  {...register("name")}
                  error={!!errors.name}
                  helperText={(errors.name as any)?.message}
                />
                <CssTextField
                  className="email"
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  placeholder={`${getProviderInfo?.email}`}
                  {...register("email")}
                  error={!!errors.email}
                  helperText={(errors.email as any)?.message}
                />
                <CssTextField
                  className="avatar"
                  label="Link do Avatar"
                  variant="outlined"
                  type="text"
                  placeholder={`${getProviderInfo?.avatar_URL}`}
                  {...register("avatar_URL")}
                  error={!!errors.avatar_URL}
                  helperText={(errors.avatar_URL as any)?.message}
                />
              </DivEditNomeEmail>

              <WorkCities>
                <h4>Cidades onde atende:</h4>
                {workCitiesEdit.map((e, i) => {
                  return (
                    <ul>
                      <li key={i}>{e}</li>
                    </ul>
                  );
                })}
              </WorkCities>

              <AddCity>
                <StateAndButton>
                  <div id="DivLocal">
                    <CoverLabelStateSpan>
                      <span>Estado</span>
                      <Select
                        className="stateSelect"
                        label="Estado"
                        {...register("state")}
                        onChange={getStateEditForm}
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
                    </CoverLabelStateSpan>
                    <SelectCity>
                      <span>Cidade</span>
                      <Select
                        className="citySelect"
                        label="Cidade"
                        disabled={disable}
                        {...register("city")}
                        onChange={getCityEditForm}
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
                    </SelectCity>
                  </div>
                  <Button
                    type="button"
                    id={"addCityButton"}
                    callback={() => setCitySubmit()}
                    text="Adicionar cidade"
                  />
                </StateAndButton>

                <Categories>
                  <h4>Categorias:</h4>

                  {categoriesEdit.map((e, i) => {
                    return (
                      <ul>
                        <li key={i}>{e}</li>
                      </ul>
                    );
                  })}

                  <DivCoverCategory>
                    <SelectCategory>
                      <span>Categoria</span>
                      <Select
                        className="Category"
                        label="Categoria"
                        onChange={getCategories}
                      >
                        {servicesCategories.map((e, i) => {
                          return (
                            <MenuItem key={i} value={e.name}>
                              {e.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </SelectCategory>
                    <button type="button" onClick={() => setCategorySubmit()}>
                      Adicionar Categoria
                    </button>
                  </DivCoverCategory>
                </Categories>
                <CoverAgePhone>
                  <Age>
                    <CssTextField
                      className="age"
                      label="Idade"
                      variant="outlined"
                      type="number"
                      placeholder={`${getProviderInfo?.age}`}
                      {...register("age")}
                      error={!!errors.age}
                    />
                  </Age>
                  <DivPhone>
                    <CssTextField
                      label="Telefone"
                      variant="outlined"
                      type="text"
                      placeholder={`${getProviderInfo?.phone}`}
                      {...register("phone")}
                      helperText={(errors.phone as any)?.message}
                      error={!!errors.phone}
                    />
                  </DivPhone>
                  <Button
                    type="button"
                    callback={() => setModalPassword(true)}
                    text="Alterar Senha"
                  />
                  <button type="submit" id="saveChanges">
                    Salvar alterações
                  </button>
                </CoverAgePhone>
              </AddCity>
            </FormEdit>
          </DivEditProfile>
        ) : (
          <ProvidedServicesFeedList />
        )}
      </DashContent>
      <Footer id="footer" />
    </DashboardServiceConteiner>
  );
};
