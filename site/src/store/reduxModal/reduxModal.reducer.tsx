import { ReduxModal } from "../../interfaces";

const MODAL = "MODAL";

export default (
    state: ReduxModal = {
        ativo: false,
        titulo: "",
        confirmacao: false,
    },
    action: any
) => {
    switch (action.type) {
        case MODAL:
            return action.payload;
        default:
            return state;
    }
};
