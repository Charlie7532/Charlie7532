import React from 'react'
import {
    Users, User, MessageCircle, Mail, Phone, Bell,
    Target, TrendingUp, BarChart2, PieChart, Bookmark, Flag, Star, Gift, Tag,
    Pencil, Paintbrush, Layers, Image, Camera, Video,
    Laptop, Monitor, Smartphone, Cpu, Server, Database, Cloud, Wifi, Code, Globe, Link, Search, Filter, Settings,
    Shield, Lock, Key, Eye,
    CheckCircle2, Calendar, Clock, MapPin, Home, Folder,
    Wrench, Scissors, Package, Truck, Zap, Droplet, Thermometer, LayoutGrid,
    Heart, Play, Globe2, Award, Handshake, Lightbulb, Rocket, Sparkles,
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { cn } from '@/utilities/ui'

// Local type until payload-types regenerates after block registration
type IconGridItem = {
    icon: string
    title: string
    description?: string | null
}

type IconGridBlockProps = {
    blockType: 'iconGrid'
    sectionHeading?: string | null
    columns?: string | null
    style?: string | null
    items: IconGridItem[]
    className?: string
}

const iconMap: Record<string, React.FC<LucideProps>> = {
    'users': Users,
    'user': User,
    'message-circle': MessageCircle,
    'mail': Mail,
    'phone': Phone,
    'bell': Bell,
    'target': Target,
    'trending-up': TrendingUp,
    'bar-chart-2': BarChart2,
    'pie-chart': PieChart,
    'bookmark': Bookmark,
    'flag': Flag,
    'star': Star,
    'gift': Gift,
    'tag': Tag,
    'pencil': Pencil,
    'paintbrush': Paintbrush,
    'layers': Layers,
    'image': Image,
    'camera': Camera,
    'video': Video,
    'laptop': Laptop,
    'monitor': Monitor,
    'smartphone': Smartphone,
    'cpu': Cpu,
    'server': Server,
    'database': Database,
    'cloud': Cloud,
    'wifi': Wifi,
    'code': Code,
    'globe': Globe,
    'link': Link,
    'search': Search,
    'filter': Filter,
    'settings': Settings,
    'shield': Shield,
    'lock': Lock,
    'key': Key,
    'eye': Eye,
    'check-circle-2': CheckCircle2,
    'calendar': Calendar,
    'clock': Clock,
    'map-pin': MapPin,
    'home': Home,
    'folder': Folder,
    'wrench': Wrench,
    'scissors': Scissors,
    'package': Package,
    'truck': Truck,
    'zap': Zap,
    'droplet': Droplet,
    'thermometer': Thermometer,
    'layout-grid': LayoutGrid,
    'heart': Heart,
    'play': Play,
    'globe-2': Globe2,
    'award': Award,
    'handshake': Handshake,
    'lightbulb': Lightbulb,
    'rocket': Rocket,
    'sparkles': Sparkles,
}

const columnClasses: Record<string, string> = {
    '2': 'grid-cols-1 sm:grid-cols-2',
    '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

type Props = IconGridBlockProps

export const IconGridBlock: React.FC<Props> = ({
    sectionHeading,
    columns = '3',
    style = 'boxed',
    items,
    className,
}) => {
    return (
        <div className={cn('py-6', className)}>
            {sectionHeading && (
                <h2 className="text-2xl font-bold mb-6">{sectionHeading}</h2>
            )}
            <div className={cn('grid gap-6', columnClasses[columns ?? '3'])}>
                {items?.map((item, index) => {
                    const IconComponent = iconMap[item.icon as string]
                    return (
                        <div key={index} className="neu-raised rounded-2xl flex flex-col gap-3 p-5">
                            {IconComponent && (
                                style === 'boxed' ? (
                                    <div className="neu-inset w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                                        <IconComponent className="w-5 h-5 text-foreground/70" />
                                    </div>
                                ) : (
                                    <IconComponent className="w-7 h-7 text-foreground/60" />
                                )
                            )}
                            {item.title && (
                                <h3 className="font-semibold text-base leading-snug">{item.title}</h3>
                            )}
                            {item.description && (
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
