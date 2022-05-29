import { ReduxModal } from "../../interfaces";

const MODAL = "MODAL";

const reduxModal = (props: ReduxModal) => {
    return {
        type: MODAL,
        payload: props,
    };
};

export default reduxModal;
