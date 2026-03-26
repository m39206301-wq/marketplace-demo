import {
  Home, Compass, Heart, User, Search, X, ChevronLeft, Share2, Filter,
  Star, Bell, Settings, ArrowRight, Check, Plus, MoreHorizontal,
  // Category icons
  Gem, Baby, Cake, GraduationCap, Moon, Sparkles, Church, Leaf, Flower2, Home as HomeIcon,
  // Product icons
  Mail, CalendarHeart, MessageSquare, Timer, BookOpen, ListOrdered, LayoutGrid,
  UtensilsCrossed, Gift, Smartphone, Video, Camera, Megaphone, PartyPopper,
  PackageCheck, Award, TreePine, Flame, Droplets, CheckCircle, MapPin,
  HeartHandshake, FileText, Flower, BookHeart, Users,
  // Style / Tag icons
  Globe, Cross, LayoutDashboard,
  // Format icons
  Image as ImageIcon,
  // Misc
  TrendingUp, SlidersHorizontal, Eye, Clock, ChevronRight, ChevronDown,
  Package, ZoomIn, Heart as HeartFilled, Play, FolderOpen,
  Pencil, Download, BarChart3, RefreshCw, Trash2,
} from "lucide-react";

const ICON_MAP = {
  // Navigation
  Home, Compass, Heart, User, Search, X, ChevronLeft, Share2, Filter,
  Star, Bell, Settings, ArrowRight, Check, Plus, MoreHorizontal,
  ChevronRight, ChevronDown,

  // Categories
  Rings: Gem,
  Gem, Baby, Cake, GraduationCap, Moon, Sparkles, Church, Leaf, Flower2,

  // Products
  Mail, CalendarHeart, MessageSquare, Timer, BookOpen, ListOrdered, LayoutGrid,
  UtensilsCrossed, Gift, Smartphone, Video, Camera, Megaphone, PartyPopper,
  PackageCheck, Award, TreePine, Flame, Droplets, CheckCircle, MapPin,
  HeartHandshake, FileText, Flower, BookHeart, Users,

  // Tags
  Globe, Cross,

  // Format
  ImageIcon,
  // Misc
  TrendingUp, SlidersHorizontal, Eye, Clock, Package, ZoomIn,
  LayoutDashboard, Play, FolderOpen,
  Pencil, Download, BarChart3, RefreshCw, Trash2,
};

export const Icon = ({ name, size = 16, color = "currentColor", strokeWidth = 1.8, style, ...props }) => {
  const Component = ICON_MAP[name];
  if (!Component) return null;
  return (
    <Component
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      style={style}
      {...props}
    />
  );
};

export default Icon;
