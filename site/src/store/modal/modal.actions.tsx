import { ReduxModal } from "../../interfaces";

const MODAL = "MODAL";

const modal = (props: ReduxModal) => {
    return {
        type: MODAL,
        payload: props,
    };
};

export default modal;
