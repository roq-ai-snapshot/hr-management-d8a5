const mapping: Record<string, string> = {
  customers: 'customer',
  employees: 'employee',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
