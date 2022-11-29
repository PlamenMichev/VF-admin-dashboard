export type AssociationModel = {
  id: string;
  name: string;
  subdomain: string;
  subscription: SubscriptionType;
  createdAt: Date;
  unitsCount: number;
};

export enum SubscriptionType {
  FreeTrial = 0,
  Basic,
  Standart,
  Plus,
  Moved,
  FreeTrialManual,
}
