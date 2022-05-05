
  describe("some-evil-spec=323", () => {
    it("evil-block-323", () => {
      window.evil_323 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  