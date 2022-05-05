
  describe("some-evil-spec=630", () => {
    it("evil-block-630", () => {
      window.evil_630 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  