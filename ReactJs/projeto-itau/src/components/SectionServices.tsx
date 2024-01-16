import { Container } from "./Container";
import { ListaInfo } from "./ListaInfo";

import PhoneIcon from "@/assets/icon-phone.svg";
import MoneyIcon from "@/assets/icon-solutions.svg";
import GraficIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";
import ImagePhone from "@/assets/phone.png";
import Image from "next/image";

export function SectionServices() {
    return (
        <section className="w-full h-[965px] relative">
           <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mt-9">Serviços exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-lg max-w-[594px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, 
                    rápida e o mulher, no conforto da sua casa.</p>
                    <ul>
                        <ListaInfo 
                            value="Acompanhar sua conta, fazer transferência e pagamentos de onde estiver"
                            image={PhoneIcon}
                            alt="Icon phone"
                        />
                        <ListaInfo 
                            value="Soluções de empréstimos e renegociação para organizar suas finanças"
                            image={MoneyIcon}
                            alt="Money icon"
                        />
                        <ListaInfo 
                            value="Diversas opções de investimento, de acordo com o seu perfil de investidor"
                            image={GraficIcon}
                            alt="Gráfico icon"
                        />
                        <ListaInfo
                            value="Acompanhe a fatura do seu cartão de crétdito e faça compras online com seu cartão virtual"
                            image={CardIcon}
                            alt="Card icon"
                        />
                    </ul>
                </div>
           </Container>
           <div className="absolute top-0 right-0 h-full w-[32%] bg-gray-phone flex items-center">
                <Image src={ImagePhone} alt="Image phone" className="translate-x-[-50%]"/>
           </div>
        </section>
    );
}
