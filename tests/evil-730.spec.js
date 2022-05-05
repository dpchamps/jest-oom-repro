
  describe("some-evil-spec=730", () => {
    it("evil-block-730", () => {
      window.evil_730 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  