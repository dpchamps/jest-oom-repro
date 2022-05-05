
  describe("some-evil-spec=283", () => {
    it("evil-block-283", () => {
      window.evil_283 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  