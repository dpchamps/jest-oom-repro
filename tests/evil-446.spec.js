
  describe("some-evil-spec=446", () => {
    it("evil-block-446", () => {
      window.evil_446 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  