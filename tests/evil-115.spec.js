
  describe("some-evil-spec=115", () => {
    it("evil-block-115", () => {
      window.evil_115 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  