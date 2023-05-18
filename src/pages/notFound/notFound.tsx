import { useNavigate } from "react-router-dom";
import { NavRegister } from "../../components/NavRegister/NavRegister";
import { NotFoundMain } from "./style";
import { Footer } from "../../components/Footer/Footer";

export function NotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <NotFoundMain>
      <NavRegister />
      <h1>PAGINA NÃO ENCONTRADA</h1>
      <Footer id="footer" />
    </NotFoundMain>
  );
}
