interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Travel Planner'],
  customerRoles: ['End User'],
  tenantRoles: ['Administrator', 'Travel Planner', 'Group Member'],
  tenantName: 'Organization',
  applicationName: 'Tripp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
