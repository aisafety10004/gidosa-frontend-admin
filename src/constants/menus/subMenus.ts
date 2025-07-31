import { CLIENT_PATHS } from '../paths/client.path';

// 1. 필요한 아이콘을 import (lucide-react 예시)
import {
  AlertTriangle as AlertTriangleIcon,
  BookOpen as BookOpenIcon,
  Cpu as CpuIcon,
  FileText as FileTextIcon,
  Gavel as GavelIcon,
  Users as UsersIcon,
} from 'lucide-react';

export const CONSTRUCTION_SUB_MENU = [
  {
    id: 'construction-sub-menu-main',
    title: '결재관리',
    path: CLIENT_PATHS.CONSTRUCTION.MAIN,
    icon: UsersIcon,
  },
  {
    id: 'construction-sub-menu-common',
    title: '공용자료 (시공관리)',
    path: CLIENT_PATHS.CONSTRUCTION.COMMON,
    icon: GavelIcon,
  },
  {
    id: 'construction-sub-menu-department',
    title: '부서자료 (시공관리)',
    path: CLIENT_PATHS.CONSTRUCTION.DEPARTMENT,
    icon: BookOpenIcon,
  },
  {
    id: 'construction-sub-menu-notice',
    title: '공지게시판',
    path: CLIENT_PATHS.CONSTRUCTION.NOTICE,
    icon: FileTextIcon,
  },
];
export const MANAGEMENT_SUB_MENU = [
  {
    id: 'management-sub-menu-main',
    title: '결재관리',
    path: CLIENT_PATHS.MANAGEMENT.MAIN,
    icon: UsersIcon,
  },
  {
    id: 'management-sub-menu-common',
    title: '공용자료',
    path: CLIENT_PATHS.MANAGEMENT.COMMON,
    icon: GavelIcon,
  },
  {
    id: 'management-sub-menu-department',
    title: '부서자료',
    path: CLIENT_PATHS.MANAGEMENT.DEPARTMENT,
    icon: BookOpenIcon,
  },
  {
    id: 'management-sub-menu-notice',
    title: '공지게시판',
    path: CLIENT_PATHS.MANAGEMENT.NOTICE,
    icon: FileTextIcon,
  },
];
export const PERSONNEL_SUB_MENU = [
  {
    id: 'personnel-sub-menu-main',
    title: '결재관리',
    path: CLIENT_PATHS.PERSONNEL.MAIN,
    icon: UsersIcon,
  },
  {
    id: 'personnel-sub-menu-common',
    title: '공용자료 (인사회계)',
    path: CLIENT_PATHS.PERSONNEL.COMMON,
    icon: GavelIcon,
  },
  {
    id: 'personnel-sub-menu-department',
    title: '부서자료 (인사회계)',
    path: CLIENT_PATHS.PERSONNEL.DEPARTMENT,
    icon: BookOpenIcon,
  },
  {
    id: 'personnel-sub-menu-notice',
    title: '공지게시판',
    path: CLIENT_PATHS.PERSONNEL.NOTICE,
    icon: FileTextIcon,
  },
];
export const SAFETY_SUB_MENU = [
  {
    id: 'safety-sub-menu-main',
    title: '결재관리',
    path: CLIENT_PATHS.SAFETY.MAIN,
    icon: UsersIcon,
  },
  {
    id: 'safety-sub-menu-common',
    title: '공용자료 (안전관리)',
    path: CLIENT_PATHS.SAFETY.COMMON,
    icon: GavelIcon,
  },
  {
    id: 'safety-sub-menu-department',
    title: '부서자료 (안전관리)',
    path: CLIENT_PATHS.SAFETY.DEPARTMENT,
    icon: BookOpenIcon,
  },
  {
    id: 'safety-sub-menu-education',
    title: '교육관리',
    path: CLIENT_PATHS.SAFETY.EDUCATION,
    icon: CpuIcon,
  },
  {
    id: 'safety-sub-menu-notice',
    title: '공지게시판',
    path: CLIENT_PATHS.SAFETY.NOTICE,
    icon: FileTextIcon,
  },
  {
    id: 'safety-sub-menu-risk',
    title: '위험관리',
    path: CLIENT_PATHS.SAFETY.RISK,
    icon: AlertTriangleIcon,
  },
];
export const SALES_SUB_MENU = [
  {
    id: 'sales-sub-menu-main',
    title: '결재관리',
    path: CLIENT_PATHS.SALES.MAIN,
    icon: UsersIcon,
  },
  {
    id: 'sales-sub-menu-common',
    title: '공용자료 (영업관리)',
    path: CLIENT_PATHS.SALES.COMMON,
    icon: GavelIcon,
  },
  {
    id: 'sales-sub-menu-department',
    title: '부서자료 (영업관리)',
    path: CLIENT_PATHS.SALES.DEPARTMENT,
    icon: BookOpenIcon,
  },
  {
    id: 'sales-sub-menu-notice',
    title: '공지게시판',
    path: CLIENT_PATHS.SALES.NOTICE,
    icon: FileTextIcon,
  },
];
export const SITE_SUB_MENU = [
  {
    id: 'site-sub-menu-main',
    title: '결재관리',
    path: CLIENT_PATHS.SITE.MAIN,
    icon: UsersIcon,
  },
  {
    id: 'site-sub-menu-common',
    title: '공용자료 (현장관리)',
    path: CLIENT_PATHS.SITE.COMMON,
    icon: GavelIcon,
  },
  {
    id: 'site-sub-menu-data',
    title: '현장자료 (현장관리)',
    path: CLIENT_PATHS.SITE.DATA,
    icon: BookOpenIcon,
  },
  {
    id: 'site-sub-menu-service',
    title: '복무관리',
    path: CLIENT_PATHS.SITE.SERVICE,
    icon: CpuIcon,
  },
  {
    id: 'site-sub-menu-risk',
    title: '위험관리',
    path: CLIENT_PATHS.SITE.RISK,
    icon: AlertTriangleIcon,
  },
  {
    id: 'site-sub-menu-education',
    title: '교육관리',
    path: CLIENT_PATHS.SITE.EDUCATION,
    icon: CpuIcon,
  },
];
