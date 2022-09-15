import {
  Box,
  Button,
  Card,
  MaterialIcon,
  Typography,
} from "@gama-academy/smash-web";
import Image from "next/image";
import { RankingListProps } from "./ranking-list.types";

export const RankingList = ({ ranking }: RankingListProps) => {
  return (
    <Box px="2">
      <Typography fontWeight="bold" color="brand.secondary">
        RANKING
      </Typography>
      {ranking.map((rank) => (
        <Card
          key={rank.id}
          padding={3}
          backgroundColor="white"
          mt={3}
          shadowBehavior="never"
        >
          <Box dir="row" justifyContent="space-between" alignItems="center">
            <Box dir="row" alignItems="center" justifyContent="space-around">
              <MaterialIcon name="emoji_events" mr="1" color="yellow.4" />
              <Image
                src="/img/user-foto.png"
                width="32"
                alt="Logo"
                height="32"
              />
              <Typography fontWeight="bold" ml="2">
                {rank.user?.name}
              </Typography>
            </Box>
            <Typography>{String(rank.score)}</Typography>
          </Box>
        </Card>
      ))}
      <Box alignItems="flex-end" mt="2">
        <Button
          onClick={() => {}}
          variant="ghost"
          color="secondary.4"
          disableHoverEffect
        >
          <Typography fontWeight="bold">Ver ranking completo</Typography>
        </Button>
      </Box>
    </Box>
  );
};
