
  describe("some-evil-spec=96", () => {
    it("evil-block-96", () => {
      window.evil_96 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  