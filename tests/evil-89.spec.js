
  describe("some-evil-spec=89", () => {
    it("evil-block-89", () => {
      window.evil_89 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  