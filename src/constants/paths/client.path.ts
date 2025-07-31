const AUTH_BASE = '/auth';
const AUTH_PATH = {
  BASE: AUTH_BASE,
  LOGIN: `${AUTH_BASE}/login`,
  FIND_ID: `${AUTH_BASE}/find-id`,
  FIND_PW: `${AUTH_BASE}/find-pw`,
  SIGN_UP: `${AUTH_BASE}/sign-up`,
};

const APPROVAL_BASE = '/approval';
const APPROVAL_PATH = {
  MAIN: APPROVAL_BASE,
  REGISTER: `${APPROVAL_BASE}/register`,
  DETAIL: `${APPROVAL_BASE}/:id`,
};

const MANAGEMENT_BASE = '/management';
const MANAGEMENT_PATH = {
  MAIN: MANAGEMENT_BASE,
  COMMON: `${MANAGEMENT_BASE}/common`,
  DEPARTMENT: `${MANAGEMENT_BASE}/department`,
  NOTICE: `${MANAGEMENT_BASE}/notice`,
};

const PERSONNEL_BASE = '/personnel';
const PERSONNEL_PATH = {
  MAIN: PERSONNEL_BASE,
  COMMON: `${MANAGEMENT_BASE}/common`,
  DEPARTMENT: `${MANAGEMENT_BASE}/department`,
  NOTICE: `${MANAGEMENT_BASE}/notice`,
};

const SALES_BASE = '/sales';
const SALES_PATH = {
  MAIN: SALES_BASE,
  COMMON: `${SALES_BASE}/common`,
  DEPARTMENT: `${SALES_BASE}/department`,
  NOTICE: `${SALES_BASE}/notice`,
};

const CONSTRUCTION_BASE = '/construction';
const CONSTRUCTION_PATH = {
  MAIN: CONSTRUCTION_BASE,
  COMMON: `${CONSTRUCTION_BASE}/common`,
  DEPARTMENT: `${CONSTRUCTION_BASE}/department`,
  NOTICE: `${CONSTRUCTION_BASE}/notice`,
};

const SAFETY_BASE = '/safety';
const SAFETY_PATH = {
  MAIN: SAFETY_BASE,
  COMMON: `${SAFETY_BASE}/common`,
  DEPARTMENT: `${SAFETY_BASE}/department`,
  NOTICE: `${SAFETY_BASE}/notice`,
  EDUCATION: `${SAFETY_BASE}/education`,
  RISK: `${SAFETY_BASE}/risk`,
};

const SITE_BASE = '/site';
const SITE_PATH = {
  MAIN: SITE_BASE,
  COMMON: `${SITE_BASE}/common`,
  DEPARTMENT: `${SITE_BASE}/department`,
  NOTICE: `${SITE_BASE}/notice`,
  DATA: `${SITE_BASE}/data`,
  SERVICE: `${SITE_BASE}/service`,
  RISK: `${SITE_BASE}/risk`,
  EDUCATION: `${SITE_BASE}/education`,
};

const SYSTEM_BASE = '/system';
const SYSTEM_PATH = {
  MAIN: SYSTEM_BASE,
  APPROVAL: `${SYSTEM_BASE}/approval`,
  APPROVAL_DETAIL: `${SYSTEM_BASE}/approval/:id`,
};

const CLIENT_PATHS = {
  AUTH: AUTH_PATH,
  APPROVAL: APPROVAL_PATH,
  MANAGEMENT: MANAGEMENT_PATH,
  PERSONNEL: PERSONNEL_PATH,
  SALES: SALES_PATH,
  CONSTRUCTION: CONSTRUCTION_PATH,
  SAFETY: SAFETY_PATH,
  SITE: SITE_PATH,
  SYSTEM: SYSTEM_PATH,
} as const;

export { CLIENT_PATHS };
