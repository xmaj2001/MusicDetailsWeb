import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa6'

interface NavbarCProps {
    bg: string
}

export default function NavbarC({ bg }: NavbarCProps) {
    return (
        <Navbar isMenuOpen={true} className={`${bg}`}>
            <NavbarBrand>
                <Link className="font-bold text-lg text-inherit logo" href='/'>Music Details</Link>
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="https://github.com/xmaj2001/MusicDetails">
                        <Button className="bg-transparent" as="a" variant="flat">
                            <FaGithub /> GITHUB
                        </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}