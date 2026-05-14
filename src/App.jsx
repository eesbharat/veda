import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const transmitters = [
    "Spanda Node 01",
    "Temp Node 04",
    "Gateway A",
    "Edge PC 01",
    "Display Panel",
  ];

  const receivers = [
    "Gateway A",
    "Gateway B",
    "Veda Cloud",
    "Local Server",
    "Display Panel",
  ];

  const login = () => {
    if (user === "guru" && pass === "urjadem0@2026") {
      setLoggedIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-50 border-b border-gray-300 p-6">
        <h1 className="text-3xl font-bold">URJA</h1>
        <p className="text-sm text-gray-600 mt-2">
          Condition Monitoring Platform
        </p>
      </header>

      <div className="flex">
        <aside className="w-56 border-r border-gray-300 min-h-screen p-4">
          <div className="space-y-2 text-sm">
            <div className="border border-gray-300 p-2 bg-gray-50">Overview</div>
            <div className="border border-gray-300 p-2">Products</div>
            <div className="border border-gray-300 p-2">Dashboard</div>
            <div className="border border-gray-300 p-2">Controller</div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <section className="border border-gray-300 p-5">
            <h2 className="text-xl font-bold mb-4">Setu Controller</h2>

            {!loggedIn ? (
              <div className="max-w-sm border border-gray-300 p-4 bg-gray-50">
                <input
                  className="w-full border border-gray-300 p-2 mb-3"
                  placeholder="Username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />

                <input
                  type="password"
                  className="w-full border border-gray-300 p-2 mb-3"
                  placeholder="Password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />

                <button
                  onClick={login}
                  className="bg-black text-white px-4 py-2"
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="overflow-auto border border-gray-300">
                <table className="min-w-[900px] w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-2 text-left">
                        Transmitters
                      </th>

                      {receivers.map((r) => (
                        <th
                          key={r}
                          className="border border-gray-300 p-2"
                        >
                          {r}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {transmitters.map((t) => (
                      <tr key={t}>
                        <td className="border border-gray-300 p-2 bg-gray-50">
                          {t}
                        </td>

                        {receivers.map((r) => (
                          <td
                            key={r}
                            className="border border-gray-300 p-2 text-center"
                          >
                            <button className="border border-gray-400 px-2">
                              +
                            </button>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
