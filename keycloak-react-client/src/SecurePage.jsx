// src/SecurePage.jsx
import { useKeycloak } from "@react-keycloak/web";

export default function SecurePage() {
	const { keycloak } = useKeycloak();
	return (
		<div>
			<p>You are logged in!</p>
			<p>Your access token (keep it safe!): {keycloak.token}</p>
		</div>
	);
}
