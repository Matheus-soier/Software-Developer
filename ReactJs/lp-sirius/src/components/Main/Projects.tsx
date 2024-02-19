export const Projects = () => {
    return(
        <section className="flex flex-col items-center mt-8">
            <h3 className="text-white text-3xl font-semibold">Projetos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 mt-8">
                <div className="bg-second p-8 rounded-lg h-96 flex justify-center items-center">
                    <p className="text-white text-lg">Projeto 1</p>
                </div>
                <div className="bg-second p-8 rounded-lg h-96 flex justify-center items-center">
                    <p className="text-white text-lg">Projeto 2</p>
                </div>
                <div className="bg-second p-8 rounded-lg h-96 md:flex justify-center items-center hidden">
                    <p className="text-white text-lg">Projeto 3</p>
                </div>
                <div className="bg-second p-8 rounded-lg h-96 md:flex justify-center items-center hidden">
                    <p className="text-white text-lg">Projeto 4</p>
                </div>
            </div>
        </section>
    );
} 