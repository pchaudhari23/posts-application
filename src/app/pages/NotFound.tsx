import { FC } from "react";
import AppPage from "../components/AppPage/AppPage";
import Typography from "@mui/material/Typography";

const NotFound: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          PAGE NOT FOUND
        </Typography>
      </div>
    </AppPage>
  );
};

export default NotFound;
