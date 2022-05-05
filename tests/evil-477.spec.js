
  describe("some-evil-spec=477", () => {
    it("evil-block-477", () => {
      window.evil_477 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  