
  describe("some-evil-spec=462", () => {
    it("evil-block-462", () => {
      window.evil_462 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  