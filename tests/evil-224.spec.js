
  describe("some-evil-spec=224", () => {
    it("evil-block-224", () => {
      window.evil_224 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  