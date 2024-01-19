import { FormEvent } from "react";

const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Opa, enviando...")
}

export const PreventDefault = () => {
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}