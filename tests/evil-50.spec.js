
  describe("some-evil-spec=50", () => {
    it("evil-block-50", () => {
      window.evil_50 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  