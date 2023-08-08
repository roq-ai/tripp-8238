import { TripInterface } from 'interfaces/trip';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  trip_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  trip?: TripInterface;
  user?: UserInterface;
  _count?: {};
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  trip_id?: string;
  user_id?: string;
}
