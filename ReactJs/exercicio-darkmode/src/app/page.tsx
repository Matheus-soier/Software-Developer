import { ThemeProvider } from "@/contexts/ThemeContext";

const Page = () => {
  return(
      <div className="text-center my-10 space-y-3">
        <h1 className="font-bold uppercase text-2xl">Título da Página</h1>
        <p className="text-lg">Algo apenas no intuito de <span className="text-sky-500">aprender sobre context e darkmode</span> usando localstorage</p>
      </div>
  );
}

export default Page;