
  describe("some-evil-spec=364", () => {
    it("evil-block-364", () => {
      window.evil_364 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  