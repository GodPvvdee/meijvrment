import React from 'react';

import {
    Box,
    Center,
    Image,
    Badge,
    Button,
    useColorModeValue,
    Fade, ScaleFade, Slide, SlideFade,
    useDisclosure,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";


const Index = ({ name, brand }) => {
    const { isOpen, onToggle } = useDisclosure()
    const property = {
        imageUrl: "http://ddl.mn/wp-content/uploads/2021/05/zx7-315gt-200x200.jpg",
        imageAlt: "Rear view of modern home with pool",
        
    }
    return (
        <div>
            <Center py={8} boxShadow={'2xl'}>
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" maxWidth={460} className='bg-white rounded-xl'>
                    <Image src={property.imageUrl} alt={property.imageAlt} className='mx-1' />
                    <Box p="3">
                        <Box
                            mt="1"
                            ml='3'
                            fontWeight="semibold"
                            as="h4"
                            textAlign={"left"}
                            lineHeight="tight"
                            isTruncated
                        >
                            {property.title}
                        </Box>

                        <Box
                            ml='3'
                        >
                            {property.formattedPrice}
                        </Box>
                        <Center>
                            <Button
                                className=''
                                style={{
                                    borderRadius: '.70rem',
                                    transition: '200ms',
                                }}
                                w={'full'}
                                mt={10}
                                mb={5}
                                px='36'
                                mx='4'
                                bg={useColorModeValue('#376bc4', 'gray.900')}
                                color={'white'}
                                _hover={{
                                    transform: 'translateY(-2px)',
                                }}>
                                дэлгэрэнгүй
                            </Button>
                        </Center>
                    </Box>
                </Box >
            </Center >
        </div>
    )
}
export default Index;
