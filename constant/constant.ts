import { Calendar, Contact2Icon, Home, Inbox, Search, Shield, SquareActivityIcon } from "lucide-react";

export const navLinks = [
    {
        id: 1,
        url: '/home',
        label: 'Home',
        icon: Home,
    },
    {
        id: 2,
        url: '/features',
        label: 'Features',
        icon: Calendar,
    },
    {
        id: 3,
        url: '/services',
        label: 'Services',
        icon: Search,
    },
    {
        id: 4,
        url: '/reviews',
        label: 'Reviews',
        icon: Inbox,
    },
    {
        id: 5,
        url: '/team',
        label: 'Team',
        icon: Shield,
    },
    {
        id: 6,
        url: '/pricing',
        label: 'Pricing',
        icon: SquareActivityIcon,
    },
    {
        id: 7,
        url: '/contact',
        label: 'Contact',
        icon: Contact2Icon,
    },
]