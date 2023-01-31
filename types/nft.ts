export type TraitType = "attack" | "health" | "speed";

export type NftAttribute = {
  trait_type: TraitType;
  value: string;
};

export type NftMeta = {
  description: string;
  image: string;
  name: string;
  attributes: NftAttribute[];
};
