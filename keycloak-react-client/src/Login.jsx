// src/Login.jsx
import { useKeycloak } from "@react-keycloak/web";

export default function Login() {
	const { keycloak } = useKeycloak();

	return (
		<div className="login">
			<button onClick={() => keycloak.login()}>Login</button>
		</div>
	);
}
