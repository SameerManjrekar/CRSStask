import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-800 w-full min-h-screen">
      <Navbar />

      <div className="container mx-auto w-full mt-6 text-white text-2xl p-4 md:p-0">
        <p>
          This task is delivered by{" "}
          <strong className="text-red-300">Sameer Manjrekar</strong> for{" "}
          <strong className="text-orange-300">Costa Rica Software Services</strong> to show data in a
          tabular format with status which is completed data field from JSON
          Placeholder public API to display todos data from the endpoint. Please
          navigate to the Todos menu to see the data in a tabular format. The
          technologies or libraries used are mentioned below
        </p>
        <ul className="mt-3 space-y-4 text-slate-300 text-xl font-semibold">
          <li>1. React with TypeScript bootstrapped using Vite</li>
          <li>2. Using tailwindCSS for styling</li>
          <li>3. React Router Dom for Navigation</li>
          <li>
            4. Tanstack table version 8 for displaying data in tabular format
          </li>
          <li>5. Using Client side pagination</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
