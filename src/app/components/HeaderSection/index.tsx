"use client"
import { Box, Button, Typography } from "@mui/material";

interface HeaderSectionProps {
  title: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ 
  title, 
  buttonLabel, 
  onButtonClick 
}) => {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      bgcolor="primary.main"
      color="white"
      boxShadow={2}
      borderRadius={2}
      className="mb-4"
    >
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <Button
        onClick={onButtonClick}
        variant="contained"
        color="warning"
        size="large"
        className={`${buttonLabel ? 'visible' : 'invisible'}`}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default HeaderSection;
