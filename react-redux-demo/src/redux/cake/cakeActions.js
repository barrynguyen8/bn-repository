import { BUY_CAKE } from './cakeTypes'


//action creator - function which returns an object 
export const buyCake = () => {
    return {
        type: BUY_CAKE //action is an object with a type property 
    }
}