import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
// import { Icons } from "@/components/icons";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
    },
    // {
    //     title: "Scroll-area",
    //     href: "/docs/primitives/scroll-area",
    // },
    // {
    //     title: "Tabs",
    //     href: "/docs/primitives/tabs",
    // },
    // {
    //     title: "Tooltip",
    //     href: "/docs/primitives/tooltip",
    // },
];

function ListItem({ className, title, children, ...props }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}

ListItem.displayName = "ListItem";

export default function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList >
                <NavigationMenuItem className="flex">
                    <NavLink to="/" className="text-white hover:text-orane-300">
                     Home
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="mr-[-18px]">
                            <NavigationMenuTrigger className='text-sm hover:bg-slate-950 hover:text-orane-300'> 
                            <NavLink to="/about" className="ml-5 text-white hover:text-orane-300">
                            About Us
                    </NavLink>
                          </NavigationMenuTrigger>
                            <NavigationMenuContent className='flex flex-col p-3'>
                              
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">
                               
                                What We Do?
                 
                                  </NavigationMenuLink>
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">What We Are</NavigationMenuLink>
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">Our Vission</NavigationMenuLink>
                            </NavigationMenuContent>

                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="mr-[-18px]">
                            <NavigationMenuTrigger className='text-sm group hover:bg-slate-950 hover:text-orane-300'>Products</NavigationMenuTrigger>
                            <NavigationMenuContent className='flex flex-col p-3'>
                              
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">Barcode Printers</NavigationMenuLink>
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">Barcode Scanners</NavigationMenuLink>
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">Printers head</NavigationMenuLink>
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">RFID and IOT</NavigationMenuLink>
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">RFID animal Identification</NavigationMenuLink>
                                <NavigationMenuLink className="flex min-w-40 cursor-pointer hover:text-orane-300 rounded-sm p-2">Barcode and Solution</NavigationMenuLink>
                            </NavigationMenuContent>

                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenuItem >
                    <NavLink to="/blogs" className="ml-5 text-white hover:text-orane-300">
                        Blog
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem >
                    <NavLink to="/career" className="ml-5 text-white hover:text-orane-300">
                        Career
                    </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavLink to="/contact" className="ml-5 text-white hover:text-orane-300">
                            Contact Us
                        </NavLink>
                    </NavigationMenuItem>
                </NavigationMenuItem>
                

            </NavigationMenuList>
        </NavigationMenu>
    );
}