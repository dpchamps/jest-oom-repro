
  describe("some-evil-spec=713", () => {
    it("evil-block-713", () => {
      window.evil_713 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  