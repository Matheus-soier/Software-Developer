import { Autor } from '@/components/Autor';
import { Children } from '@/components/Card';
import { GeoForm } from '@/components/GeoForms';
import { Person } from '@/components/Person';
import { Table } from '@/components/Tabela';
//Export de Componente default: import Square from '@/components/Square';

const Page = () => {

  return (
    <div className="flex flex-col items-center max-w-screen gap-3">
      <h1 className="w-full text-center bg-white text-black text-lg font-bold">Hello word!</h1>
        <GeoForm />
        <Person 
          name= "Jeff Bezos"
          avatar= "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTjw62rDGHJOl47c4lLfigJ3VzFdnkmq0OXzXeaAgOhBBIF2ZaBgYrPDhNulZ-30xoD"
          roles= {["CEO da Amazon", "CEO da Blue Origin"]}
        />

        <Person 
          name= "Matheus"
          roles={["CEO da Sirius", "CEO da Glamour"]}
        />

        <Children>
          <>
            <h1 className='text-red-500 text-center'>Frase para teste</h1>
            <h3 className='text-sm text-green-500 text-right mt-4'>-Autor desconhecido</h3>
          </>
        </Children>

      <Autor frase='Quem Pensa Enriquece!'/>

      <Table/>

  </div>
  );
};

export default Page;

