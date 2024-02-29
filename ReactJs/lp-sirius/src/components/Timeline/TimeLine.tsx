import { ItemTimeline } from "./ItemTimeline";

export const Timeline = () => {
    return(
        <div className="flex flex-col items-center">
            <p className="text-primary font-semibold">Nossa</p>
            <h3 className="text-white text-3xl font-semibold capitalize">timeline</h3>
            <ItemTimeline 
                image={''}
                date={''}
                title={''}
                body={''}
            />
        </div>
    );
}