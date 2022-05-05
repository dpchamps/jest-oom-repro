
  describe("some-evil-spec=784", () => {
    it("evil-block-784", () => {
      window.evil_784 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  