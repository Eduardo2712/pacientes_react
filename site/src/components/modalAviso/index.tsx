import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import reduxModal from "../../store/reduxModal/reduxModal.actions";

const ModalAviso = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const valoresModal = useSelector((state: any) => state.reduxModal);
    const dispatch = useDispatch();

    const fecharModal = () => {
        dispatch(
            reduxModal({
                ...valoresModal,
                ativo: false,
            })
        );
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={valoresModal.ativo}
                onClose={fecharModal}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {valoresModal.titulo}
                </DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    <Button onClick={fecharModal} autoFocus>
                        Sim
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModalAviso;
