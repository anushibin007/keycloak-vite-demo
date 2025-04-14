// src/SecurityGuy.jsx
import { useKeycloak } from "@react-keycloak/web";
import Login from "./Login";

export default function SecurityGuy({ children }) {
	const { keycloak } = useKeycloak();

	const isLoggedIn = keycloak.authenticated;

	return isLoggedIn ? children : <Login />;
}
