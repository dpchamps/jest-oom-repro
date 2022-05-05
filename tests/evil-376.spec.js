
  describe("some-evil-spec=376", () => {
    it("evil-block-376", () => {
      window.evil_376 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  