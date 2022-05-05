
  describe("some-evil-spec=658", () => {
    it("evil-block-658", () => {
      window.evil_658 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  