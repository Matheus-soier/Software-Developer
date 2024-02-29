type Props = {
    params: {
        slug: string[];
    }
}

const Page = ({ params }: Props) => {
    return(
        <div>
            FILTRO: {params.slug.join(', ')}
        </div>
    );
}

export default Page;