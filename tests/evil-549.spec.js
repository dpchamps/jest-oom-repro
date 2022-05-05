
  describe("some-evil-spec=549", () => {
    it("evil-block-549", () => {
      window.evil_549 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  