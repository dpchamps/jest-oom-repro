
  describe("some-evil-spec=714", () => {
    it("evil-block-714", () => {
      window.evil_714 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  