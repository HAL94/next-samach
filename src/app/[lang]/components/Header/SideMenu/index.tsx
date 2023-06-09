import useGetLocaleDir from "@/app/hooks/use-get-locale"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from "@chakra-ui/react";

export default function SideMenuDrawer({ isOpen, onClose }: {
    isOpen: boolean, onClose: () => void
}) {
    const isRTL = useGetLocaleDir();
    return (
        <Drawer
            isOpen={isOpen}
            placement={isRTL ? 'right' : 'left'}
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}