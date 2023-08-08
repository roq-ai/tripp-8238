const mapping: Record<string, string> = {
  bookings: 'booking',
  events: 'event',
  expenses: 'expense',
  organizations: 'organization',
  trips: 'trip',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
