
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("overview");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const transmitters = [
    "Spanda Node 01",
    "Temp Node 04",
    "Gateway A",
    "Edge PC 01",
    "Display Panel",
    "Current Node 05"
  ];

  const receivers = [
    "Gateway A",
    "Gateway B",
    "Veda Cloud",
    "Local Server",
    "Display Panel",
    "Edge PC 02"
  ];

  const login = () => {
    if (user === "guru" && pass === "urjadem0@2026") {
      setLoggedIn(true);
    }
  };

  const menuClass = (name) =>
    `border border-gray-300 p-3 cursor-pointer ${
      page === name ? "bg-gray-100 font-semibold" : "bg-white"
    }`;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-50 border-b border-gray-300 p-5">
        <h1 className="text-3xl font-bold">URJA</h1>
        <p className="text-sm text-gray-600 mt-1">
          Condition Monitoring Platform
        </p>
      </header>

      <div className="flex">
        <aside className="w-56 border-r border-gray-300 min-h-screen p-3">
          <div className="space-y-3 text-sm">
            <div className={menuClass("overview")} onClick={() => setPage("overview")}>
              Overview
            </div>

            <div className={menuClass("products")} onClick={() => setPage("products")}>
              Products
            </div>

            <div className={menuClass("dashboard")} onClick={() => setPage("dashboard")}>
              Dashboard
            </div>

            <div className={menuClass("controller")} onClick={() => setPage("controller")}>
              Controller
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          {page === "overview" && (
            <section className="border border-gray-300 p-5">
              <h2 className="text-2xl font-bold mb-5">Overview</h2>

              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="font-semibold mb-2">Spanda Sense</div>
                  <div className="text-gray-600">
                    Wireless vibration and temperature sensing.
                  </div>
                </div>

                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="font-semibold mb-2">Setu Link</div>
                  <div className="text-gray-600">
                    Industrial routing and communication layer.
                  </div>
                </div>

                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="font-semibold mb-2">Spanda Edge</div>
                  <div className="text-gray-600">
                    Gateway and edge processing unit.
                  </div>
                </div>

                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="font-semibold mb-2">Veda Dashboard</div>
                  <div className="text-gray-600">
                    Monitoring, alarms and analytics.
                  </div>
                </div>
              </div>
            </section>
          )}

          {page === "products" && (
            <section className="border border-gray-300 p-5">
              <h2 className="text-2xl font-bold mb-5">Products</h2>

              <table className="w-full text-sm border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Product</th>
                    <th className="border border-gray-300 p-3 text-left">Type</th>
                    <th className="border border-gray-300 p-3 text-left">Connectivity</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Spanda Sense</td>
                    <td className="border border-gray-300 p-3">Sensor</td>
                    <td className="border border-gray-300 p-3">RS485 / WiFi</td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 p-3">Spanda Edge</td>
                    <td className="border border-gray-300 p-3">Gateway</td>
                    <td className="border border-gray-300 p-3">Ethernet</td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 p-3">Veda Dashboard</td>
                    <td className="border border-gray-300 p-3">Software</td>
                    <td className="border border-gray-300 p-3">Web</td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {page === "dashboard" && (
            <section className="border border-gray-300 p-5">
              <h2 className="text-2xl font-bold mb-5">Dashboard</h2>

              <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="text-sm text-gray-500">Connected Nodes</div>
                  <div className="text-3xl font-bold mt-2">24</div>
                </div>

                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="text-sm text-gray-500">Alerts</div>
                  <div className="text-3xl font-bold mt-2">3</div>
                </div>

                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="text-sm text-gray-500">Gateways</div>
                  <div className="text-3xl font-bold mt-2">5</div>
                </div>
              </div>

              <table className="w-full text-sm border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">Time</th>
                    <th className="border border-gray-300 p-2 text-left">Asset</th>
                    <th className="border border-gray-300 p-2 text-left">Event</th>
                    <th className="border border-gray-300 p-2 text-left">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">10:42</td>
                    <td className="border border-gray-300 p-2">Motor 03</td>
                    <td className="border border-gray-300 p-2">High Temperature</td>
                    <td className="border border-gray-300 p-2">Alert</td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 p-2">10:31</td>
                    <td className="border border-gray-300 p-2">Pump 11</td>
                    <td className="border border-gray-300 p-2">Gateway Reconnected</td>
                    <td className="border border-gray-300 p-2">Normal</td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {page === "controller" && (
            <section className="border border-gray-300 p-5">
              <h2 className="text-2xl font-bold mb-5">Setu Controller</h2>

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
                  <table className="min-w-[1200px] w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 p-3 text-left">
                          Transmitters
                        </th>

                        {receivers.map((r) => (
                          <th
                            key={r}
                            className="border border-gray-300 p-3"
                          >
                            {r}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {transmitters.map((t) => (
                        <tr key={t}>
                          <td className="border border-gray-300 p-3 bg-gray-50">
                            {t}
                          </td>

                          {receivers.map((r) => (
                            <td
                              key={r}
                              className="border border-gray-300 p-3 text-center"
                            >
                              <button className="border border-gray-400 px-2 hover:bg-gray-100">
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
          )}
        </main>
      </div>
    </div>
  );
}
