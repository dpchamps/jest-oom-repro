
  describe("some-evil-spec=366", () => {
    it("evil-block-366", () => {
      window.evil_366 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  