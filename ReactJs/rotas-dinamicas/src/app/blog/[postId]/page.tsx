type Props = {
    params: {
        postId: string;
    }
}

const Page = ({params}: Props) => {
    return(
        <div>
            BLOG ID: {params.postId}
        </div>
    );
}

export default Page;