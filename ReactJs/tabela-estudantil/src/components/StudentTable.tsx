import { ListStudants } from '@/Types/TypeList'
import Image, { StaticImageData } from 'next/image'

import Person1 from "@/assets/person1.jpeg"
import Person2 from "@/assets/person2.jpeg"
import Person3 from "@/assets/person3.jpeg"
import Person4 from "@/assets/person4.jpeg"
import Person5 from "@/assets/person5.jpeg"
import Person6 from "@/assets/person6.jpeg"

type Props = {
  students: ListStudants[];
}

export const StudentTable = ({students}: Props) => {

  const personImages: { [key: string]: StaticImageData } = {
    "1": Person1,
    "2": Person2,
    "3": Person3,
    "4": Person4,
    "5": Person5,
    "6": Person6
};

    return (
      <table className='w-full border border-gray-600 rounded-md overflow-hidden'>
        <thead>
          <tr className='text-white text-left border-b border-gray-600 bg-gray-800'>
            <th className='p-3'>Name</th>
            <th className='p-3'>Status</th>
            <th className='p-3'>Grade 1</th>
            <th className='p-3'>Grade 2</th>
            <th className='p-3'>Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map(item => (
            <tr key={item.id} className='text-gray-800 bg-gray-400 border-b border-gray-600'>
              <td className='flex items-center gap-3 p-3'>
                <Image className='w-12 h-12 rounded-full' src={personImages[item.id]} alt={item.name} />
                <div>
                  <div className='font-bold'>{item.name}</div>
                  <div>{item.email}</div>
                </div>
              </td>
              <td className='p-3'>
                {item.ativo && <div className='px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white'>Active</div>}
                {!item.ativo && <div className='px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white'>Inactive</div>}
              </td>
              <td className='p-3'>{item.grade1}</td>
              <td className='p-3'>{item.grade2}</td>
              <td className='p-3'>{item.ativo ? ((item.grade1 + item.grade2) /2).toFixed(1) : "--"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}