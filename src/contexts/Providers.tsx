import { CitiesProvider } from "./CitiesContext/CitiesContext";
import { UserProvider } from "./UserContext/UserContext";
import { ProfileProvider } from "./ProfileContext/ProfileContext";
import { iDefaultPropsProvider } from "./types";

export const Providers = ({ children }: iDefaultPropsProvider) => {
  return (
    <CitiesProvider>
      <UserProvider>
        <ProfileProvider>{children}</ProfileProvider>
      </UserProvider>
    </CitiesProvider>
  );
};
