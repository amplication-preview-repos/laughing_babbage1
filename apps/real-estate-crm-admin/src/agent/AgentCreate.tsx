import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ClientTitle } from "../client/ClientTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const AgentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="clients"
          reference="Client"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClientTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="properties"
          reference="Property"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PropertyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};