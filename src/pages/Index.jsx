import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Stack, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const fences = [
  {
    id: 1,
    name: "Wooden Fence",
    description: "A classic wooden fence for your backyard.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1551584284-d3f7b68c8bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmZW5jZXxlbnwwfHx8fDE3MTE5OTA3MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Vinyl Fence",
    description: "Durable and low-maintenance vinyl fence.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1625496235025-d783abf061c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aW55bCUyMGZlbmNlfGVufDB8fHx8MTcxMTk5MTYzOXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Aluminum Fence",
    description: "Stylish and rust-resistant aluminum fence.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1506653526240-a9f2188a3355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMGZlbmNlfGVufDB8fHx8MTcxMTk5MTYzOXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Chain Link Fence",
    description: "Affordable and versatile chain link fence.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1617871709577-28394fdf55fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFpbiUyMGxpbmslMjBmZW5jZXxlbnwwfHx8fDE3MTE5OTE2NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (fence) => {
    setCart([...cart, fence]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Box>
      <Box bg="gray.100" p={4}>
        <Heading as="h1" size="xl">
          Fence Store
        </Heading>
        <Text fontSize="xl">Quality fences for your home and garden</Text>
      </Box>

      <Box p={4}>
        <Button leftIcon={<FaShoppingCart />} colorScheme="blue" onClick={onOpen}>
          Cart ({cart.length})
        </Button>
      </Box>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} p={4}>
        {fences.map((fence) => (
          <Box key={fence.id} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src={fence.image} alt={fence.name} />
            <Box p={4}>
              <Heading as="h3" size="lg">
                {fence.name}
              </Heading>
              <Text mt={2}>{fence.description}</Text>
              <Badge colorScheme="green" mt={2}>
                ${fence.price}
              </Badge>
              <Button mt={4} colorScheme="blue" onClick={() => addToCart(fence)}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
                {cart.map((item) => (
                  <Box key={item.id}>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text>${item.price}</Text>
                    <Button size="sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </Box>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Index;
