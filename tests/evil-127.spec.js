
  describe("some-evil-spec=127", () => {
    it("evil-block-127", () => {
      window.evil_127 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  