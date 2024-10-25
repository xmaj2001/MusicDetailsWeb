import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import {FaGithub} from 'react-icons/fa6'

export default function NavbarC() {
    return (
        <Navbar isMenuOpen={true} className='bg-transparent'>
            <NavbarBrand>
                <p className="font-bold text-lg text-inherit logo">Music Details</p>
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button className='bg-transparent' href="#" variant="flat">
                       <FaGithub /> GITHUB
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}