
  describe("some-evil-spec=934", () => {
    it("evil-block-934", () => {
      window.evil_934 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  