import { useAuth0, User } from "@auth0/auth0-react";

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
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
        )
    );
}
