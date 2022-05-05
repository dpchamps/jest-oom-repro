
  describe("some-evil-spec=328", () => {
    it("evil-block-328", () => {
      window.evil_328 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  