
  describe("some-evil-spec=740", () => {
    it("evil-block-740", () => {
      window.evil_740 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  