
  describe("some-evil-spec=930", () => {
    it("evil-block-930", () => {
      window.evil_930 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  