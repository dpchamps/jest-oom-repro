
  describe("some-evil-spec=180", () => {
    it("evil-block-180", () => {
      window.evil_180 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  