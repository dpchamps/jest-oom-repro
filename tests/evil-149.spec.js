
  describe("some-evil-spec=149", () => {
    it("evil-block-149", () => {
      window.evil_149 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  