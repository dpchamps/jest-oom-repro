
  describe("some-evil-spec=847", () => {
    it("evil-block-847", () => {
      window.evil_847 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  