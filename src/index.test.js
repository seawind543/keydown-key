import keyDownEventPropsNormalizer from './index';

describe('keyDownEventPropsNormalizer', () => {
  describe('keyCode === 229', () => {
    const MOCK_KEYDOWN_EVENT = {
      key: 'Enter',
      keyCode: 229,
    };

    it('should return key with value `Process`', () => {
      expect(keyDownEventPropsNormalizer(MOCK_KEYDOWN_EVENT)).toEqual({
        key: 'Process',
      });
    });
  });

  describe('keyCode !== 229', () => {
    const MOCK_KEYDOWN_EVENT = {
      key: 'Enter',
      keyCode: 13,
    };

    it('should return key with original value', () => {
      expect(keyDownEventPropsNormalizer(MOCK_KEYDOWN_EVENT)).toEqual({
        key: 'Enter',
      });
    });
  });
});
