import useGenres from "../hooks/useGenres";
import { ListItem, HStack, Spinner, Skeleton } from "@chakra-ui/react";
import getCroppedUrl from "../services/image-urls";

interface Props {
  numberOfItems?: number;
}

const GenreListSkeleton = ({ numberOfItems = 20 }: Props) => {
  return (
    <>
      {Array.from({ length: numberOfItems }).map((_, i) => (
        <ListItem key={i} paddingY="5px">
          <HStack spacing={3}>
            <Skeleton height="32px" width="32px" borderRadius={8} />
            <Skeleton height="20px" width="70%" />
          </HStack>
        </ListItem>
      ))}
    </>
  );
};

export default GenreListSkeleton;
