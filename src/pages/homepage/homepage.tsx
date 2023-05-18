import { NavHome } from "../../components/NavHome/navBar";
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
import workers from "../../assets/img/workers.jpeg";
import { OrangeCard } from "../../components/CardOrange/card";
import { BlueCard } from "../../components/CardBlue/card";
import { GreenComment } from "../../components/GreenComment/greenComment";
import { OrangeComment } from "../../components/OrangeComment/orangeComment";
import { Footer } from "../../components/Footer/Footer";
import {
  BodyHome,
  Comments,
  ContentHeader,
  ContentServices,
  DivAboutUs,
  DivContentAboutUs,
  DivTextAboutUs,
  HeaderBtns,
  HeaderHome,
  LinksHeader,
  ListComments,
  Services,
  ServicesList,
} from "../Homepage/style";
import { useContext, useEffect } from "react";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";

export function HomePage() {
  const { autoLogin } = useContext(ProfileContext);

  useEffect(() => {
    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavHome />
      <BodyHome>
        <HeaderHome id="top">
          <ContentHeader>
            <div>
              <h1>
                Facilidade e proatividade na hora de atender as suas
                necessidades!
              </h1>
              <p>
                Faça login ou cadastre-se para acessar e usufruir dos melhores
                serviços do Brasil!
              </p>
              <HeaderBtns>
                <LinksHeader to="/login">Login</LinksHeader>
                <p>ou</p>
                <LinksHeader to="/register">Cadastre-se</LinksHeader>
              </HeaderBtns>
            </div>
          </ContentHeader>
        </HeaderHome>
        <main>
          <DivAboutUs id="about_us">
            <DivContentAboutUs>
              <div>
                <img src={workers} alt="Workers"></img>

                <h3>Sobre nós...</h3>
              </div>

              <DivTextAboutUs>
                <div>
                  <p>
                    O EazyHome nasceu com o propósito de conectar quem precisa
                    com quem sabe fazer. Somos um aplicativo que conecta
                    clientes e profissionais, com mais de 10 tipos de serviços
                    disponíveis no momento. Desejamos ajudar quem precisa com
                    muito empenho e prestatividade.
                  </p>
                  <p>
                    Presente em todas as cidades do Brasil, você pode se
                    cadastrar seja <strong>cliente</strong> ou{" "}
                    <strong>prestador de serviços</strong> e começar a buscar o
                    que você precisa no nosso aplicativo. Temos certeza que será
                    uma experiência incrível.
                  </p>
                </div>
              </DivTextAboutUs>
            </DivContentAboutUs>
          </DivAboutUs>
          <Services id="services">
            <ContentServices>
              <h3>- Serviços -</h3>
              <ServicesList>
                <OrangeCard img={pintor} type="Pintor" />
                <BlueCard img={pedreiro} type="Pedreiro" />
                <OrangeCard img={marceneiro} type="Marceneiro" />
                <BlueCard img={telhado} type="Telhados" />
                <OrangeCard img={jardim} type="Jardins" />
                <BlueCard img={janelas} type="Janelas" />
                <OrangeCard img={gas} type="Gás" />
                <BlueCard img={encanador} type="Encanador" />
                <OrangeCard img={eletricista} type="Eletricista" />
                <BlueCard img={piso} type="Pisos" />
                <OrangeCard img={piscina} type="Piscinas" />
                <BlueCard img={serralheiro} type="Serralheiro" />
              </ServicesList>
              <div></div>
            </ContentServices>
          </Services>

          <Comments id="comments">
            <div />
            <h3>O que nossos clientes dizem:</h3>

            <ListComments>
              <GreenComment
                text="Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro."
                user="Serviço de Construção, Ana Paula contratou um pedreiro em São Paulo, SP"
              />
              <OrangeComment
                text="Os profissionais são pessoas dedicadas com seus serviços. Tudo o que é pedido é feito da maneira como foi pedido. Aprovado!"
                user="Serviço de Pintura, Bruno Freitas contratou um pintor em Curitiba, PR"
              />
              <GreenComment
                text="Uma excelente profissional, pontual e acima de tudo confiável. Foi bastante educada e atenciosa com o trabalho, recomendo."
                user="Serviço de Diarista, Renata Figueiredo contratou uma diarista em Rio de Janeiro, RJ"
              />
            </ListComments>
          </Comments>
        </main>
      </BodyHome>

      <Footer id="footer" />
    </>
  );
}
