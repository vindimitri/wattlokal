export type Rolle = "erzeuger" | "verbraucher" | "beides";
export type SmartMeterStatus = "ja" | "nein" | "unsicher";
export type RegistrationStatus = "pending" | "confirmed";

export type RegistrationInput = {
  name: string;
  email: string;
  plz: string;
  ort: string;
  rolle: Rolle;
  pv_kwp: number | null;
  verbrauch_kwh: number | null;
  smart_meter: SmartMeterStatus;
  consent_dsgvo: boolean;
  consent_studie: boolean;
};
