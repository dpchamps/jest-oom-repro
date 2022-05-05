
  describe("some-evil-spec=384", () => {
    it("evil-block-384", () => {
      window.evil_384 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  