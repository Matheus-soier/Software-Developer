import { personList } from "@/data/personList";

export const Table = () => {

    const list = personList.map(person => 
        <tr>
          <td>{person.name}</td>
          <td>{person.profession}</td>
        </tr>
      );

    return (
        <div>
           {personList.length > 0 &&
           <>             
             <h1>Tabela de Nomes e Profissões</h1>
             <table className='text-center border border-black my-4'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Profissão</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
             </table>
            </>
            }
        </div>
    );
}