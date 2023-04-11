import {
  Button,
  Card,
  CardBody,
  Container,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function Home() {
  return (
    <Container maxWidth="100%" padding="20px 50px">
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        <Card>
          <CardBody>
            <Text fontWeight="bold" fontSize="xl" textTransform="uppercase">
              Sprite Generator Tool
            </Text>
            <Text>
              This tool allows you to generate a sprite image and CSS from a
              collection of images. Upload your images and get the CSS code for
              your sprite image.
            </Text>
            <Button
              as={NextLink}
              href="/sprite-generator"
              marginTop="20px"
              size="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              View
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
