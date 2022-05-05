
  describe("some-evil-spec=980", () => {
    it("evil-block-980", () => {
      window.evil_980 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  