import { NavRegister } from "../../components/NavRegister/NavRegister";
import imgClientRegister from "./../../assets/img/clientRegisterButtonImg.png";
import imgProviderRegister from "./../../assets/img/providerRegisterButtonImg.png";
import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/FooterRegisterAndLogin/footer";
import { ModalClientRegister } from "../../components/ModalRegisterClient/modalClient";
import { ModalProvidertRegister } from "../../components/ModalRegisterProvider/modalProvider";
import {
  Card,
  DivTitleCard,
  ImgClient,
  RegisterButtonsCoteiner,
  RegisterConteiner,
} from "../../pages/Register/style";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";

export function Register() {
  const [showClientModal, setShowClientModal] = useState(false);
  const [showProviderModal, setShowProviderModal] = useState(false);
  const [showButtonContainer, setShowButtonContainer] = useState(true);
  const { autoLogin } = useContext(ProfileContext);

  useEffect(() => {
    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RegisterConteiner>
        <NavRegister />

        {showButtonContainer ? (
          <RegisterButtonsCoteiner>
            <Card
              onClick={() => {
                setShowButtonContainer(false);
                setShowClientModal(true);
              }}
            >
              <ImgClient src={imgClientRegister} alt="Cadastro do cliente" />
              <DivTitleCard>
                <p>Cadastro de cliente</p>
              </DivTitleCard>
            </Card>
            <Card
              onClick={() => {
                setShowButtonContainer(false);
                setShowProviderModal(true);
              }}
            >
              <img src={imgProviderRegister} alt="Cadastro do provedor" />
              <DivTitleCard>
                <p>Cadastro de provedor</p>
              </DivTitleCard>
            </Card>
          </RegisterButtonsCoteiner>
        ) : null}

        {showClientModal ? (
          <ModalClientRegister
            setShowClientModal={setShowClientModal}
            setShowButtonContainer={setShowButtonContainer}
          />
        ) : null}
        {showProviderModal ? (
          <ModalProvidertRegister
            setShowProviderModal={setShowProviderModal}
            setShowButtonContainer={setShowButtonContainer}
          />
        ) : null}
        <Footer id="footer" />
      </RegisterConteiner>
    </>
  );
}
