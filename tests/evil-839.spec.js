
  describe("some-evil-spec=839", () => {
    it("evil-block-839", () => {
      window.evil_839 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  