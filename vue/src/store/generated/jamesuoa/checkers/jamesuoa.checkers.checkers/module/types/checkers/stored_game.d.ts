import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "jamesuoa.checkers.checkers";
export interface StoredGame {
    index: string;
    creator: string;
    game: string;
    turn: string;
    red: string;
    black: string;
}
export declare const StoredGame: {
    encode(message: StoredGame, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): StoredGame;
    fromJSON(object: any): StoredGame;
    toJSON(message: StoredGame): unknown;
    fromPartial(object: DeepPartial<StoredGame>): StoredGame;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
