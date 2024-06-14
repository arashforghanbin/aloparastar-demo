import {
  Box,
  Button,
  Divider,
  FormControl,
  Typography,
  useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment } from "react";
import styles from "./bottomSheet.module.css";
import { options } from "..";
import usePersistData from "@/store/usePersistData";

import useCertificateStore from "../store/useCertificateStore";

const BottomSheet = () => {
  const theme = useTheme();

  const certificateStore = usePersistData(
    useCertificateStore,
    (state) => state
  );

  return (
    <AnimatePresence>
      {certificateStore?.certificateSelected === -1 &&
        certificateStore?.mustHaveCertificate === true && (
          <motion.div
            initial={{ transform: "translateY(200%)" }}
            animate={{ transform: "translateY(0%)" }}
            exit={{ transform: "translateY(200%)" }}
            className={styles.genderBottomSheet}
          >
            <Box className={styles.genderBottomSheet__touch} />
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              className={styles.genderBottomSheet__title}
            >
              <Typography variant="body1" component={"h2"}>
                تحصیلات مراقب
              </Typography>
              <Typography
                variant="caption"
                color={theme.palette.grey[500]}
                component={"h2"}
              >
                تحصیلات مورد انتظار از مراقب را انتخاب کنید.
              </Typography>
            </Box>
            <FormControl style={{ display: "flex", flexDirection: "column" }}>
              {options.map((item, index) => (
                <Fragment key={index}>
                  <Button
                    size="large"
                    onClick={() =>
                      certificateStore?.setCertificateSelected(item.value)
                    }
                    className={styles.bottomSheetOption}
                  >
                    {item.name}
                  </Button>

                  {index !== 3 && <Divider></Divider>}
                </Fragment>
              ))}
            </FormControl>
          </motion.div>
        )}
    </AnimatePresence>
  );
};

export default BottomSheet;
