
  describe("some-evil-spec=338", () => {
    it("evil-block-338", () => {
      window.evil_338 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  