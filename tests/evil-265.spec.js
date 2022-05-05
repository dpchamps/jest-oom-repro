
  describe("some-evil-spec=265", () => {
    it("evil-block-265", () => {
      window.evil_265 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  