/// <reference types="react" />
export interface NormalizedKeyDownKey {
    key: KeyboardEvent['key'];
}
declare function keyDownEventPropsNormalizer(keyDownEvent: KeyboardEvent | React.KeyboardEvent): NormalizedKeyDownKey;
export default keyDownEventPropsNormalizer;
//# sourceMappingURL=index.d.ts.map