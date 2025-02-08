import { Calendar, Contact2Icon, Home, Inbox, Search, Shield, SquareActivityIcon } from "lucide-react";

export const navLinks = [
    {
        id: 1,
        url: '/home',
        label: 'Trang chủ',
        icon: Home,
    },
    {
        id: 2,
        url: '/features',
        label: 'Nổi bật',
        icon: Calendar,
    },
    {
        id: 3,
        url: '/services',
        label: 'Dịch vụ',
        icon: Search,
    },
    {
        id: 4,
        url: '/reviews',
        label: 'Đánh giá',
        icon: Inbox,
    },
    {
        id: 5,
        url: '/team',
        label: 'Đội ngũ',
        icon: Shield,
    },
    {
        id: 6,
        url: '/pricing',
        label: 'Giá cả',
        icon: SquareActivityIcon,
    },
    {
        id: 7,
        url: '/contact',
        label: 'Liên hệ',
        icon: Contact2Icon,
    },
]