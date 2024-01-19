import { StudentTable } from "@/components/StudentTable"
import { Students } from "@/data/students"

export default function Page() {
  return (
   <div className="w-screen h-screen flex items-center justify-center">
      <StudentTable students={Students}/>
   </div>
  )
}
