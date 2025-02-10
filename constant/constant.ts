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

export const footerLinks = [
    {
      title: "Giải pháp",
      links: ["Doanh nghiệp", "Lưu lượng làm việc", "Bởi đội ngũ"],
    },
    {
      title: "Công ty",
      links: ["Về chúng tôi", "Tin tức & Báo chí", "Khách hàng", "Lãnh đạo", "Tuyển dụng"],
    },
    {
      title: "Tài nguyên",
      links: ["Blog", "Hội thảo & Sự kiện", "Podcast", "E-book & Hướng dẫn"],
    },
    {
      title: "Liên hệ",
      links: [
        { text: "Số điện thoại", value: "+0356400315", isBold: true },
        { text: "Email", value: "quang456a@gmail.com", isBold: true },
      ],
    },
  ];
  