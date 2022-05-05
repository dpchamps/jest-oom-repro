
  describe("some-evil-spec=532", () => {
    it("evil-block-532", () => {
      window.evil_532 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  