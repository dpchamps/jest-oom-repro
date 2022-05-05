
  describe("some-evil-spec=678", () => {
    it("evil-block-678", () => {
      window.evil_678 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  