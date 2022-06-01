import { ReduxModal } from "../../types";

const MODAL = "MODAL";

export const reduxModal = (props: ReduxModal) => {
    return {
        type: MODAL,
        payload: props,
    };
};
