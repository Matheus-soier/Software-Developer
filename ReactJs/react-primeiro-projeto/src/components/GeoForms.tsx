import {Square} from './Square';
import {Circle} from './Circle';
import {Root} from './Root';
 
export const GeoForm = () => {
    return(
        <div className="flex gap-3">
            <Square />
            <Circle />
            <Root/>
        </div>
    );
};