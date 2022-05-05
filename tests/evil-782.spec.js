
  describe("some-evil-spec=782", () => {
    it("evil-block-782", () => {
      window.evil_782 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  