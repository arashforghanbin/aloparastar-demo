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
import useHouseKeepingStore from "../store/useHouseKeepingStore";

const BottomSheet = () => {
  const theme = useTheme();

  const houseKeepingStore = usePersistData(
    useHouseKeepingStore,
    (state) => state
  );

  return (
    <AnimatePresence>
      {houseKeepingStore?.meterSelected === -1 &&
        houseKeepingStore?.houseKeeping === "true" && (
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
                انجام امور منزل توسط مراقب
              </Typography>
              <Typography
                variant="caption"
                color={theme.palette.grey[500]}
                component={"h2"}
              >
                متراژ محل سکونت سالمند را مشخص کنید.
              </Typography>
            </Box>
            <FormControl style={{ display: "flex", flexDirection: "column" }}>
              {options.map((item, index) => (
                <Fragment key={index}>
                  <Button
                    size="large"
                    onClick={() =>
                      houseKeepingStore.setMeterSelected(item.value)
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
