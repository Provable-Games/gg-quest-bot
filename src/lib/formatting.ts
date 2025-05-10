import { BigNumberish, shortString } from "starknet";

export const feltToString = (v: BigNumberish): string => {
  return BigInt(v) > 0n ? shortString.decodeShortString(bigintToHex(v)) : "";
};

export const bigintToHex = (v: BigNumberish): `0x${string}` =>
  !v ? "0x0" : `0x${BigInt(v).toString(16)}`;

export const formatTokenMetadata = (data: any): any => {
  const result = {
    start: data.lifecycle.start.unwrap(),
    end: data.lifecycle.end.unwrap(),
    mint: data.lifecycle.mint,
    minted_by: data.minted_by,
    player_name: feltToString(data.player_name),
    settings_id: data.settings_id,
    token_id: data.token_id,
  };
  return result;
};
