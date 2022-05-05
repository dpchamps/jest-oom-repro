
  describe("some-evil-spec=857", () => {
    it("evil-block-857", () => {
      window.evil_857 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  