
  describe("some-evil-spec=940", () => {
    it("evil-block-940", () => {
      window.evil_940 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  