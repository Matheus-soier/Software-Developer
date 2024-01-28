import { Item } from "@/types/item";
import { act } from "react-dom/test-utils";

type AddAction = {
    type: 'add';
    payload: {
        text: string;
    }
}

type EditTextAction = {
    type: 'editText',
    payload: {
        id: number;
        text: string;
    }
}

type ToggleDoneAction = {
    type: 'toggle';
    payload: {
        id: number;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

type ListAction = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], action: ListAction) => {
    switch(action.type) {
        case 'add':
            return [...list, {
                id: list.length,
                text: action.payload.text,
                done: false
              }]
        case 'editText':
              return list.map(t => {
                if(t.id === action.payload.id) t.text = action.payload.text;
                return t;
              })

        case 'toggle':
              return list.map(t => {
                if(t.id === action.payload.id) {
                    t.done = !t.done;
                }
               return t;
              })
        case 'remove':
            return list.filter(t => t.id !== action.payload.id);
        default:
            return list;
    }
}