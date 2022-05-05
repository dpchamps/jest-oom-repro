
  describe("some-evil-spec=65", () => {
    it("evil-block-65", () => {
      window.evil_65 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  