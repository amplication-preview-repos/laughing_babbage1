import { Appointment } from "../appointment/Appointment";
import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Agent = {
  appointments?: Array<Appointment>;
  clients?: Array<Client>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};