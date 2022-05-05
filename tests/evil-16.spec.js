
  describe("some-evil-spec=16", () => {
    it("evil-block-16", () => {
      window.evil_16 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  