
  describe("some-evil-spec=850", () => {
    it("evil-block-850", () => {
      window.evil_850 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  