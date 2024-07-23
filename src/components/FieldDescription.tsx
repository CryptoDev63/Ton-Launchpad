import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  zeroPadding?: boolean;
}

//TODO replace with generic AppHeading

function FieldDescription({ children, zeroPadding }: Props) {
  return (
    <Typography
      style={{ fontSize: 14, marginTop: 5, paddingLeft: zeroPadding ? 0 : 18 }}>
      {children}
    </Typography>
  );
}

export default FieldDescription;
