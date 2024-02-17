"use client"

import { Header } from "@/components/Header";
import { UserProvider } from "@/contexts/UserContext";

const Page = () => {
  return(
    <div className="container mx-auto">
      <UserProvider>
          <Header />
      </UserProvider>
    </div>
  );
}

export default Page;