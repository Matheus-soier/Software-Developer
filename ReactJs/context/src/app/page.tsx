"use client"

const Subtitle = ({ label }: {label: string})=> {
  return(
    <p>{label}</p>
  );
}

const Title = ({ label }: {label: string})=> {
  return(
    <h1>{label}</h1>
  );
}

const Header = ({title, subtitle}: {title: string; subtitle: string}) => {
  return(
    <header>
      <Title label={title}/>
      <Subtitle label={subtitle}/>
    </header>
    );
}


const Page = () => {
  const pageInfo = {
    title: 'Titulo maroto',
    subtitle: 'Subtitulo muito legal e bem feito'
  }
  
  return (
    <div className="container mx-auto">
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle}/>
    </div>
  );
};

export default Page;