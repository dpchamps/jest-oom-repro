
  describe("some-evil-spec=263", () => {
    it("evil-block-263", () => {
      window.evil_263 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  