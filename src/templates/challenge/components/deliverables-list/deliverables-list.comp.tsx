import {
  Box,
  Card,
  MaterialIcon,
  Modal,
  Typography,
} from "@gama-academy/smash-web";
import { useDimensions } from "../../../../hooks/layout/use-dimensions.hook";
import { MOBILE_BREAKPOINT } from "../../../../utils/responsive";
import { ChallengeProps } from "../../challenge.types";

import { DeliverableListProps } from "./deliverables-list.types";

const DeliverablesList = ({ deliverables }: DeliverableListProps) => {
  const { width } = useDimensions();

  return (
    <Box px="2">
      <Typography pt="1" pb="4" fontWeight="bold" color="brand.secondary">
        ENTREGÁVEIS
      </Typography>
      {deliverables.map((deliverable) => (
        <Card padding={3} mt={3} key={deliverable.id}>
          <Box
            dir={width <= MOBILE_BREAKPOINT ? "column" : "row"}
            alignItems={width <= MOBILE_BREAKPOINT ? "flex-start" : "center"}
          >
            <Box dir="row" alignItems="center">
              <Box
                borderRadius={24}
                alignItems="center"
                justifyContent="center"
                p={3}
                width={24}
                height={24}
                mr={1}
                backgroundColor="secondary.1"
              >
                <MaterialIcon name="task" size={20} color="brand.secondary" />
              </Box>
              <Typography type="title">{deliverable.title}</Typography>
            </Box>
            <Box
              dir="row"
              ml={width <= MOBILE_BREAKPOINT ? 0 : 4}
              mt={width <= MOBILE_BREAKPOINT ? 3 : 0}
              backgroundColor="grey.1"
              borderRadius="1"
              padding={1}
              alignItems="center"
            >
              <MaterialIcon name="schedule" size={20} color="brand.secondary" />
              <Typography type="tips" ml="1">
                Reserve {String(deliverable.averageTime)} minutos
              </Typography>
            </Box>
          </Box>
          <Box mt="2">
            <Typography type="description">
              {deliverable.description}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default DeliverablesList;
