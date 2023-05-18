import React, { useState, createContext } from "react";
import { StatesAPI } from "../../service/StatesApi";
import { iDefaultPropsProvider } from "../types";
import { SelectChangeEvent } from "@mui/material";
import eletricista from "../../assets/img/eletricista.png";
import encanador from "../../assets/img/encanador.png";
import gas from "../../assets/img/gás.png";
import janelas from "../../assets/img/janelas.png";
import jardim from "../../assets/img/jardineiro.png";
import telhado from "../../assets/img/ManutencaoDeTelhado.png";
import marceneiro from "../../assets/img/marceneiro.png";
import pedreiro from "../../assets/img/pedreiro.png";
import pintor from "../../assets/img/pintor.png";
import piscina from "../../assets/img/piscina.png";
import piso from "../../assets/img/piso.png";
import serralheiro from "../../assets/img/serralheiro.png";

interface iCitiesContext {
  getStates: () => void;
  statesList: [] | iStatesList[];
  citiesList: [] | iCitiesList[];
  selectState: (e: SelectChangeEvent<string>) => void;
  disable: boolean;
  errorApi: boolean;
  setErrorApi: (data: boolean) => void;
  servicesCategories: iCategoriesList[];
}

interface iStatesList {
  id: number;
  nome: string;
  sigla: string;
  região: {
    id: number;
    nome: string;
    sigla: string;
  };
}

interface iCitiesList {
  id: number;
  nome: string;
  municipio: {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
        id: number;
        nome: string;
        UF: {
          id: number;
          nome: string;
          sigla: string;
          regiao: {
            id: number;
            nome: string;
            sigla: string;
          };
        };
      };
    };
    regiaoImediata: {
      id: number;
      nome: string;
      regiaoIntermediaria: {
        id: number;
        nome: string;
        UF: {
          id: number;
          nome: string;
          sigla: string;
          regiao: {
            id: number;
            nome: string;
            sigla: string;
          };
        };
      };
    };
  };
}

interface iCategoriesList {
  image: string;
  name: string;
}

export const CitiesContext = createContext({} as iCitiesContext);

export const CitiesProvider = ({ children }: iDefaultPropsProvider) => {
  const [statesList, setStatesList] = useState<[] | iStatesList[]>([]);
  const [citiesList, setCitiesList] = useState<[] | iCitiesList[]>([]);
  const [disable, setDisable] = useState<boolean>(true);
  const [errorApi, setErrorApi] = useState(false);

  const servicesCategories = [
    { image: eletricista, name: "Eletricista" },
    { image: encanador, name: "Encanador" },
    { image: gas, name: "Gás" },
    { image: janelas, name: "Janelas" },
    { image: jardim, name: "Jardim" },
    { image: marceneiro, name: "Marceneiro" },
    { image: pedreiro, name: "Pedreiro" },
    { image: piso, name: "Piso" },
    { image: piscina, name: "Piscina" },
    { image: pintor, name: "Pintor" },
    { image: serralheiro, name: "Serralheiro" },
    { image: telhado, name: "Telhado" },
  ];

  const getStates = async () => {
    try {
      const states = await StatesAPI.get("");
      setStatesList(states.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectState = async (e: SelectChangeEvent<string>) => {
    try {
      if (e.target.value !== "0") {
        setDisable(false);
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.target.value}/distritos?orderBy=nome`
        );
        setCitiesList(await response.json());
      } else {
        setDisable(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        getStates,
        statesList,
        citiesList,
        selectState,
        disable,
        servicesCategories,
        errorApi,
        setErrorApi,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
