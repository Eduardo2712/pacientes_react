import { ReduxModal } from "../../interfaces";

const MODAL = "MODAL";

export const reduxModal = (props: ReduxModal) => {
    return {
        type: MODAL,
        payload: props,
    };
};
