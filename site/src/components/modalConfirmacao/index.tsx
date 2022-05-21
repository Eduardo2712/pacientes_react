import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

interface Props {
    ativo: boolean;
}

const ModalConfirmacao = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        setOpen(props.ativo);
    }, [props.ativo]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                    </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                    {/* <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button> */}
                    <Button onClick={handleClose} autoFocus>
                        Sim
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModalConfirmacao;
