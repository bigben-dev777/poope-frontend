import { Add, NorthEast, SouthEast } from "@mui/icons-material";
import { Chip, Divider, Stack, Typography } from "@mui/material";

import { initData } from "./balance.constant";
import {
  AmountTypography,
  BalanceItemsStack,
  BalanceItemTypography,
  BalanceRowStack,
  BalanceTypography,
  ControlPanelButton,
  ControlPanelItemStack,
  ControlPanelStack,
  MainStack,
  RowStack,
  Section,
} from "./balance.style";

export const Balance = () => {
  return (
    <Section>
      <MainStack>
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
          Total Poopie Balance
        </Typography>
        <RowStack>
          <BalanceTypography>
            <strong>54,860</strong> $POOPE
          </BalanceTypography>
          <AmountTypography flex={1}>$62340.48</AmountTypography>
          <Chip
            color="success"
            variant="outlined"
            label={"+1.2%"}
            onDelete={() => {}}
            deleteIcon={<NorthEast />}
          />
        </RowStack>
        <BalanceRowStack>
          <BalanceItemsStack>
            {initData.balance.map((item, index) => (
              <>
                <Stack key={item.title}>
                  <Typography variant="h6" color="textSecondary">
                    {item.title}
                  </Typography>
                  <BalanceItemTypography variant="body2" color="textPrimary">
                    {item.amount > 0 ? `+${item.amount} %` : `${item.amount} %`}
                    {item.amount > 0 ? (
                      <NorthEast color="success" />
                    ) : (
                      <SouthEast color="error" />
                    )}
                  </BalanceItemTypography>
                </Stack>
                {index < 2 ? (
                  <Divider orientation="vertical" flexItem />
                ) : (
                  <></>
                )}
              </>
            ))}
          </BalanceItemsStack>
          <ControlPanelStack>
            {initData.controlPanel.map((item) => (
              <ControlPanelItemStack key={item}>
                <ControlPanelButton>
                  <Add />
                </ControlPanelButton>
                <Typography variant="h5">{item} </Typography>
              </ControlPanelItemStack>
            ))}
          </ControlPanelStack>
        </BalanceRowStack>
      </MainStack>
    </Section>
  );
};

