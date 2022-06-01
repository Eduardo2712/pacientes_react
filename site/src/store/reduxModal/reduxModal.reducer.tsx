import { ReduxModal } from "../../types";

const MODAL = "MODAL";

export default (
    state: ReduxModal = {
        ativo: false,
        titulo: "",
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
