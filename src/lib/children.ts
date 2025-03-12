export interface Children {
  userId: number;
  fullname: string;
  avatarUrl: string;
  birthDate: string | null;
  gender: string | null;
  height: string | null;
  weight: string | null;
  relatives: Rela[];
}

export interface Rela {
  relativeId: number;
  fullname: string;
  relationshipType: string;
}
