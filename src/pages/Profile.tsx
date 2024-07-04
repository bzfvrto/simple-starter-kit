import { useAuth0, User } from "@auth0/auth0-react";
import { Loading } from "../components/Loading";

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    if (!user) {
        return <div>No authenticated user</div>;
    }

    const userProperties = (user: User) => {
        const properties = [];
        for (const property in user) {
            properties.push({ name: property, value: user[property] });
        }
        return properties;
    };

    return (
        isAuthenticated && (
            <div>
                <h2
                    style={{
                        boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.075)",
                        paddingBottom: "1rem",
                        paddingTop: ".75rem",
                    }}
                >
                    Profile
                </h2>
                <div
                    style={{
                        marginTop: "1rem",
                    }}
                >
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    {/* <p>{JSON.stringify(user, null, 2)}</p> */}
                    <ul style={{ textAlign: "left" }}>
                        {userProperties(user).map((property) => {
                            return (
                                <li key={property.name}>
                                    {property.name} : {property.value}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    );
}
