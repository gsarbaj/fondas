import React from 'react';
import {Link} from "@/navigation"
import Image from "next/image";
import Logo from "@/img/image2-2.png";
import {useTranslations} from "next-intl";

const NavBar = () => {

    const t = useTranslations("NavBar")

    return (
        <>
            <header className="container mx-auto px-4 py-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="hidden md:flex space-x-4 text-2xl font-bold text-primary">Naujas Gyvenimas</span>
                </Link>
                <nav className="md:flex space-x-4">
                    <Link href="#about" className="text-muted-foreground hover:text-primary">{t('about')}</Link>
                    <Link href="#projects" className="text-muted-foreground hover:text-primary">{t('help')}</Link>
                    <Link href="#contact" className="text-muted-foreground hover:text-primary">{t('contacts')}</Link>


                </nav>
                <div className={'flex items-center space-x-1'}>
                    <Link href="/" locale={'lt'} className="text-muted-foreground hover:text-primary">LT</Link>
                    <Link href="/" locale={'ru'} className="text-muted-foreground hover:text-primary">RU</Link>
                </div>
            </header>
        </>
    );
};

export default NavBar;


// created on 22/10/2024 11:06

// 'use client'
//
// import React from "react"
// import { Facebook, Twitter, Instagram, Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {useTranslations} from "next-intl";
// import {Link} from "@/navigation"
//
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger, navigationMenuTriggerStyle,
//     NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
//
//
// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false)
//     const t = useTranslations("NavBar")
//
//     return (
//         <nav className="bg-white shadow-md sticky">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <span className="text-2xl font-bold text-primary">Naujas Gyvenimas</span>
//                     </div>
//
//                     {/* Menu Items - Hidden on mobile */}
//                     <div className="hidden md:block">
//
//                         <NavigationMenu>
//                             <NavigationMenuList>
//                                 <NavigationMenuItem>
//
//                                         <Link href="/" legacyBehavior passHref prefetch>
//                                             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                                 {t('contacts')}
//                                             </NavigationMenuLink>
//                                         </Link>
//
//                                 </NavigationMenuItem>
//
//                                 <NavigationMenuItem>
//
//                                     <Link href="/" legacyBehavior passHref prefetch>
//                                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                             {t('contacts')}
//                                         </NavigationMenuLink>
//                                     </Link>
//
//                                 </NavigationMenuItem>
//
//                             </NavigationMenuList>
//                         </NavigationMenu>
//
//
//                         {/*<div className="ml-10 flex items-baseline space-x-4">*/}
//                         {/*    <Link className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium" href="/">Home</Link>*/}
//                         {/*    <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>*/}
//                         {/*    <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</a>*/}
//                         {/*    <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Services</a>*/}
//                         {/*    <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</a>*/}
//                         {/*</div>*/}
//                     </div>
//
//                     {/* Social Media Links - Hidden on mobile */}
//                     <div className="hidden md:block">
//                         <div className="ml-4 flex items-center md:ml-6">
//                             <a href="#" className="text-gray-400 hover:text-primary px-3 py-2">
//                                 <Facebook size={20} />
//                                 <span className="sr-only">Facebook</span>
//                             </a>
//
//                             <a href="#" className="text-gray-400 hover:text-primary px-3 py-2">
//                                 <Instagram size={20} />
//                                 <span className="sr-only">Instagram</span>
//                             </a>
//                         </div>
//                     </div>
//
//                     {/* Mobile menu button */}
//                     <div className="md:hidden">
//                         <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             aria-label="Main menu"
//                             aria-expanded="false"
//                         >
//                             <Menu className="h-6 w-6" aria-hidden="true" />
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Mobile menu, show/hide based on menu state */}
//             {isMenuOpen && (
//                 <div className="md:hidden">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</a>
//                         <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</a>
//                         <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Services</a>
//                         <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</a>
//                     </div>
//                     <div className="pt-4 pb-3 border-t border-gray-200">
//                         <div className="flex items-center px-5">
//                             <a href="#" className="text-gray-400 hover:text-primary px-3 py-2">
//                                 <Facebook size={20} />
//                                 <span className="sr-only">Facebook</span>
//                             </a>
//
//                             <a href="#" className="text-gray-400 hover:text-primary px-3 py-2">
//                                 <Instagram size={20} />
//                                 <span className="sr-only">Instagram</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     )
// }