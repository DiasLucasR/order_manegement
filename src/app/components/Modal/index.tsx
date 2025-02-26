import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

interface AdditionalButton {
  label: string;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  variant?: "text" | "outlined" | "contained";
  onClick: () => void;
}

interface ModalComponentProps {
  open: boolean | false;
  onClose?: () => void;
  onSave?: () => void;
  additionalButtons?: AdditionalButton[];
  title?: string 
  children?: React.ReactNode;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  onClose,
  onSave,
  additionalButtons = [],
  title = '',
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          {title}
        </Typography>

        <Box mb={2}>{children}</Box>

        <Box display="flex" justifyContent="flex-end" gap={1}>
          {additionalButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant || "contained"}
              color={button.color || "primary"}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}

          <Button variant="outlined" color="secondary" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="contained" color="primary" onClick={onSave}>
            Salvar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
