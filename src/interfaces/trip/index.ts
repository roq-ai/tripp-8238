import { BookingInterface } from 'interfaces/booking';
import { EventInterface } from 'interfaces/event';
import { ExpenseInterface } from 'interfaces/expense';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TripInterface {
  id?: string;
  name: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  event?: EventInterface[];
  expense?: ExpenseInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    booking?: number;
    event?: number;
    expense?: number;
  };
}

export interface TripGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
  user_id?: string;
}
