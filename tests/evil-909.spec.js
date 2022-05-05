
  describe("some-evil-spec=909", () => {
    it("evil-block-909", () => {
      window.evil_909 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  