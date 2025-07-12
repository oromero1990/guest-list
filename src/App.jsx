import useGuests from "./useGuests";

export default function App() {
  const { guests, selectedGuest, setSelectedGuest } = useGuests();

  return (
    <div>
      <h1>Guest List</h1>

      {selectedGuest ? (
        <div>
          <h2>{selectedGuest.name}</h2>
          <p>Email: {selectedGuest.email}</p>
          <p>Phone: {selectedGuest.phone}</p>
          <p>Job: {selectedGuest.job}</p>
          <p>Bio: {selectedGuest.bio}</p>
          <button onClick={() => setSelectedGuest(null)}>Back</button>
        </div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr
                  key={guest.id}
                  onClick={() => setSelectedGuest(guest)}
                  style={{
                    backgroundColor:
                      selectedGuest?.id === guest.id ? "lightyellow" : "white",
                    cursor: "pointer",
                  }}
                >
                  <td>{guest.name}</td>
                  <td>{guest.email}</td>
                  <td>{guest.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p
            style={{
              marginTop: "10px",
              fontStyle: "italic",
              color: "#555",
            }}
          >
            Select a guest to see more details.
          </p>
        </>
      )}
    </div>
  );
}
